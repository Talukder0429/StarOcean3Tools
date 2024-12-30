import {useEffect, useState} from 'react';
import {Inventor, Item, LocalState, Profession} from '@/types';
import {Stats} from '@/components/Stats';
import {CostTable} from '@/components/CostTable';

import {ArrowUpDown, UserCheck} from 'lucide-react';
import {ColumnDef, Row} from '@tanstack/react-table';
import {DataTable} from '@/components/ui/data-table';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

export const Calculator = <P extends Profession>(props: {
    profession: P;
    inventors: Inventor<P>[];
    items: Item<P>[];
    boostItem: string;
}) => {
    const [selectedInventors, setSelectedInventors] = useState<Set<Inventor<P>>>(new Set());
    const [selectedItem, setSelectedItem] = useState<Item<P>>();
    const [totalSkill, setTotalSkill] = useState(0);
    const [timeMod, setTimeMod] = useState(0);
    const [costMod, setCostMod] = useState(0);
    const [costMap, setCostMap] = useState<Map<number, Item<P>[]>>(new Map());

    const SelectableItems = () =>
        props.items.map((item, index) => (
            <SelectItem key={item.item} value={index.toString()}>
                {item.item}
            </SelectItem>
        ));

    const ColoredPercent = (props: {value: number}) => {
        return (
            <span
                className={props.value > 0 ? 'text-orange-400' : props.value < 0 ? 'text-green-400 font-semibold' : ''}>
                {props.value > 0 ? `+${props.value.toString()}` : props.value}%
            </span>
        );
    };

    // save new settings
    const updateLocalstorage = (inventors?: Set<Inventor<P>>, item?: Item<P>) => {
        const state: LocalState = {
            selectedInventors: [...selectedInventors.values()].map((inventor) => inventor.inventor),
            selectedItem: selectedItem?.item
        };

        if (inventors) {
            state.selectedInventors = [...inventors.values()].map((inventor) => inventor.inventor);
        }

        if (item) {
            state.selectedItem = item.item;
        }

        localStorage.setItem(props.profession, JSON.stringify(state));
    };

    // load previous settings
    useEffect(() => {
        const state = JSON.parse(localStorage.getItem(props.profession) ?? '{}') as LocalState;

        const selectedInventors = state.selectedInventors ?? [];
        const selectedItem = state.selectedItem ?? null;

        if (selectedInventors.length) {
            const inventors = props.inventors.filter((inventor) => selectedInventors.includes(inventor.inventor));
            setSelectedInventors(new Set([...inventors]));
        }

        if (selectedItem) {
            const item = props.items.find((item) => item.item === selectedItem);
            setSelectedItem(item);
        }
    }, [props.profession, props.inventors, props.items]);

    // inventor change logic
    const updateSelectedInventors = (row: Row<Inventor<P>>) => {
        const inventor = row.original;
        const addInventor = !selectedInventors.has(inventor);

        setSelectedInventors((currentSelection) => {
            const updatedInventors = new Set(currentSelection);
            if (addInventor) {
                updatedInventors.add(inventor);
            } else {
                updatedInventors.delete(inventor);
            }

            updateLocalstorage(updatedInventors, undefined);
            return updatedInventors;
        });
    };

    // inventor table columns
    const columns: ColumnDef<Inventor<P>>[] = [
        {
            id: 'select',
            cell: ({row}) => (
                <input
                    type="checkbox"
                    checked={selectedInventors.has(row.original)}
                    onChange={() => {
                        updateSelectedInventors(row);
                    }}
                    disabled={selectedInventors.size >= 3 && !selectedInventors.has(row.original)}
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
                    <div className="flex gap-4 items-center pl-4">
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
            cell: ({row}) => {
                return <div className="text-center">{row.original.skill}</div>;
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
                        Time Modifier
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({row}) => {
                return (
                    <div className="text-center">
                        <ColoredPercent value={row.original.time} />
                    </div>
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
                        Cost Modifier
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                );
            },
            cell: ({row}) => {
                return (
                    <div className="text-center">
                        <ColoredPercent value={row.original.cost} />
                    </div>
                );
            }
        }
    ];

    // update team stats on inventor change
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

    // update item costs
    const updateCostMap = () => {
        if (!selectedItem) return;

        const inventorRequirementMet = (item: Item<P>) => {
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
            const costMap = new Map<number, Item<P>[]>();

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
    };

    // update item costs on item change
    useEffect(updateCostMap, [selectedInventors, selectedItem, props.items]);

    return (
        <div className="flex flex-wrap gap-8 p-4 justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>Select Item</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-8">
                    <Select
                        value={selectedItem ? props.items.indexOf(selectedItem).toString() : undefined}
                        onValueChange={(idx) => {
                            setSelectedItem(() => {
                                const newItem = props.items[parseInt(idx)];
                                updateLocalstorage(undefined, newItem);
                                return newItem;
                            });
                        }}>
                        <SelectTrigger className="min-w-[320px]">
                            <SelectValue placeholder="Select Item..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectableItems />
                        </SelectContent>
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
                    <div className="flex justify-around gap-4 p-4 text-xl w-full">
                        <div>Team Skill: {totalSkill}</div>
                        <div>
                            Time Modifier:{' '}
                            <span>
                                <ColoredPercent value={timeMod} />
                            </span>
                        </div>
                        <div>
                            Cost Modifier:{' '}
                            <span>
                                <ColoredPercent value={costMod} />
                            </span>
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
