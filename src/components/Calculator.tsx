import {useEffect, useState} from 'react';
// import DataTable, { TableColumn } from "react-data-table-component";
// import ReactTooltip from "react-tooltip";
// import Select from "react-select";
// import CircularProgressbar from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import {Inventor, Item, Profession} from '../types';
import {ColumnDef, Row} from '@tanstack/react-table';
import {DataTable} from '@/components/ui/data-table';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {ArrowUpDown, UserCheck} from 'lucide-react';
import {Button} from './ui/button';

import 'react-circular-progressbar/dist/styles.css';

import 'react-circular-progressbar/dist/styles.css';
import {Stats} from './Stats';
import {CostTable} from './CostTable';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from './ui/card';

export const Calculator = <P extends Profession, T extends P>(props: {
    profession: P;
    items: Item<T>[];
    inventors: Inventor<T>[];
    boostItem: string;
}) => {
    type TableType = typeof props.profession;
    type TableItemType = Item<TableType>;
    type TableInventorType = Inventor<TableType>;
    // const prvSelectedInventors = JSON.parse(sessionStorage.getItem(props.ic) || "[]");

    // const prvSelectedItem = JSON.parse(sessionStorage.getItem(props.ic + "item") || "[]");

    // const prvBoostSelected = JSON.parse(sessionStorage.getItem(props.ic + "boost") || "true");

    const [selectedInventors, setSelectedInventors] = useState<Set<TableInventorType>>(new Set());
    const [selectedItem, setSelectedItem] = useState<TableItemType>(); //prvSelectedItem.length === 0 ? null : prvSelectedItem,
    const [totalSkill, setTotalSkill] = useState(0);
    const [timeMod, setTimeMod] = useState(0);
    const [costMod, setCostMod] = useState(0);
    const [costMap, setCostMap] = useState<Map<number, Item<P>[]>>(new Map());
    const selectableItems = props.items.map((item, index) => (
        <SelectItem key={item.item} value={index.toString()}>
            {item.item}
        </SelectItem>
    ));

    // Inventor Change Logic

    const updateSelectedInventors = (row: Row<TableInventorType>) => {
        const inventor = row.original;
        const addInventor = !row.getIsSelected();

        setSelectedInventors((currentSelection) => {
            const updatedInventors = new Set(currentSelection);
            if (addInventor) {
                updatedInventors.add(inventor);
            } else {
                updatedInventors.delete(inventor);
            }
            return updatedInventors;
        });

        row.toggleSelected(addInventor);
    };

    const columns: ColumnDef<TableInventorType>[] = [
        {
            id: 'select',
            cell: ({row}) => (
                <input
                    type="checkbox"
                    checked={row.getIsSelected()}
                    onChange={() => {
                        updateSelectedInventors(row);
                    }}
                    disabled={selectedInventors.size >= 3 && !row.getIsSelected()}
                />
            ),
            enableSorting: false,
            enableHiding: false
        },
        {
            accessorKey: 'inventor',
            header: ({column}) => {
                return (
                    <Button
                        className="p-4"
                        variant="ghost"
                        onClick={() => {
                            column.toggleSorting(column.getIsSorted() === 'asc');
                        }}>
                        Inventor
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({row}) => {
                const canCreateItem = selectedItem ? selectedItem.inventors.has(row.original.inventor) : false;

                return (
                    <div className="flex gap-4 items-center">
                        {row.original.inventor} {!!canCreateItem && <UserCheck className="h-6 w-6" />}
                    </div>
                );
            },
            invertSorting: true
        },
        {
            accessorKey: 'skill',
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => {
                            column.toggleSorting(column.getIsSorted() === 'asc');
                        }}>
                        Skill
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            invertSorting: true
        },
        {
            accessorKey: 'time',
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => {
                            column.toggleSorting(column.getIsSorted() === 'asc');
                        }}>
                        Time Modifier (%)
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            }
        },
        {
            accessorKey: 'cost',
            header: ({column}) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => {
                            column.toggleSorting(column.getIsSorted() === 'asc');
                        }}>
                        Cost Modifier (%)
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            }
        }
    ];

    useEffect(() => {
        let newTotalSkill = 0;
        let newTimeMod = 0;
        let newCostMod = 0;

        selectedInventors.forEach((inventor) => {
            newTotalSkill += inventor.skill;
            newTimeMod += inventor.time;
            newCostMod += inventor.cost;
        });

        setTotalSkill(newTotalSkill);
        setTimeMod(newTimeMod);
        setCostMod(newCostMod);
    }, [selectedInventors]);

    // Item Change Logic

    const updateCostMap = () => {
        if (!selectedItem) return;

        const inventorRequirementMet = (item: TableItemType) => {
            const selectedInventorNames = new Set([...selectedInventors.values()].map((i) => i.inventor));

            return selectedInventorNames.intersection(item.inventors).size > 0;
        };

        const generatePossibleCosts = (baseCost: number) => {
            const _costMod = selectedInventors.values().reduce((c, {cost}) => c + cost, 0);

            // costs = (1 + costMod% + random) x baseCost
            const allCostMods = [
                100 + _costMod - 5,
                100 + _costMod - 4,
                100 + _costMod - 3,
                100 + _costMod - 2,
                100 + _costMod - 1,
                100 + _costMod,
                100 + _costMod + 1,
                100 + _costMod + 2,
                100 + _costMod + 3,
                100 + _costMod + 4,
                100 + _costMod + 5
            ];

            const allPossibleCosts = new Set(allCostMods.map((mod) => Math.round((mod * baseCost) / 100)));

            return allPossibleCosts;
        };

        const generateCostMap = () => {
            const costMap = new Map<number, TableItemType[]>();

            if (!inventorRequirementMet(selectedItem)) {
                return costMap;
            }

            const selectedCosts = generatePossibleCosts(selectedItem.cost);

            selectedCosts.forEach((cost) => {
                costMap.set(cost, []);
            });

            props.items.forEach((item) => {
                if (selectedItem.item === item.item || !inventorRequirementMet(item)) return;

                const possibleCosts = generatePossibleCosts(item.cost);
                const conflictingCosts = selectedCosts.intersection(possibleCosts);

                conflictingCosts.forEach((cost) => {
                    costMap.get(cost)?.push(item);
                });
            });

            return costMap;
        };

        const costMap = generateCostMap();
        setCostMap(costMap);
        //   sessionStorage.setItem(this.props.ic + "item", JSON.stringify(this.state.selectedItem));
    };

    useEffect(updateCostMap, [selectedInventors, selectedItem, props.items]);

    return (
        <div className="flex flex-wrap gap-8 p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Select Item</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-8">
                    <Select
                        onValueChange={(idx) => {
                            setSelectedItem(props.items[parseInt(idx)]);
                        }}>
                        <SelectTrigger className="min-w-[320px]">
                            <SelectValue placeholder="Select Item..." />
                        </SelectTrigger>
                        <SelectContent>{selectableItems}</SelectContent>
                    </Select>
                    <Stats
                        successChance={selectedItem && costMap.size > 1 ? totalSkill - selectedItem.rating : 0}
                        boostItem={props.boostItem}
                        selectedItem={selectedItem}
                    />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Select Team</CardTitle>
                </CardHeader>
                <CardContent>
                    <DataTable columns={columns} data={props.inventors} />
                </CardContent>
                <CardFooter>
                    <div className="flex justify-around gap-4 p-4 text-lg w-full">
                        <div>Team Skill: {totalSkill}</div>
                        <div>
                            Time Modifier:{' '}
                            <span className={timeMod > 0 ? 'text-red-600' : 'text-green-600'}>{timeMod}%</span>
                        </div>
                        <div>
                            Cost Modifier:{' '}
                            <span className={costMod > 0 ? 'text-red-600' : 'text-green-600'}>{costMod}%</span>
                        </div>
                    </div>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Resulting Costs</CardTitle>
                </CardHeader>
                <CardContent>
                    <CostTable costMap={costMap} />
                </CardContent>
            </Card>
        </div>
    );
};

//   selectedInventorsChange = (selectedRowState: {
//     allSelected: boolean;
//     selectedCount: number;
//     selectedRows: Inventor[];
//   }) => {
//     sessionStorage.setItem(this.props.ic, JSON.stringify(selectedRowState.selectedRows));

//     let skillSum = this.state.hasBoost ? 20 : 0;
//     let timeSum = 0;
//     let costSum = 0;

//     selectedRowState.selectedRows.forEach((i: Inventor) => {
//       skillSum += i.skill;
//       timeSum += i.time;
//       costSum += i.cost;
//     });

//     this.setState(
//       {
//         selectedInventors: selectedRowState.selectedRows,
//         selectedCount: selectedRowState.selectedCount,
//         totalSkill: skillSum,
//         timeMod: timeSum,
//         costMod: costSum,
//       },
//       () => {
//         if (this.state.selectedItem !== null && this.canMakeItem(this.state.selectedItem)) this.calcCosts();
//       }
//     );
//   };

//   loadPrvSelectedInventors = (row: Inventor) => {
//     let res = false;
//     this.state.selectedInventors.forEach((i: Inventor) => {
//       if (i.inventor === row.inventor) {
//         res = res || true;
//       }
//     });
//     return res;
//   };

//   disableInventors = (row: Inventor) => {
//     let res = false;
//     this.state.selectedInventors.forEach((i: Inventor) => {
//       if (i.inventor === row.inventor) {
//         res = res || true;
//       }
//     });
//     return !res && this.state.selectedCount > 2;
//   };
