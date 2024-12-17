import {Item, Profession} from '@/types';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';

export const CostTable = (props: {costMap: Map<number, Item<Profession>[]>}) => {
    const rows = [...props.costMap.entries()].map(([cost, items]) => {
        return (
            <TableRow key={cost}>
                <TableCell>{cost}</TableCell>
                <TableCell>{items.length ? items.map((i) => i.item).join(', ') : 'None'}</TableCell>
            </TableRow>
        );
    });

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="max-w-[180px]">Exact Price(s) (Fol)</TableHead>
                    <TableHead className="max-w-[360px]">Conflicting Items</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>{rows}</TableBody>
        </Table>
    );
};
