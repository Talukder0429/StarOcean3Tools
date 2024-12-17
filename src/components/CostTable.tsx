import {Item, Profession} from '@/types';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';

export const CostTable = (props: {costMap: Map<number, Item<Profession>[]>}) => {
    const rows = [...props.costMap.entries()].map(([cost, items]) => {
        return (
            <TableRow key={cost}>
                <TableCell className="text-center">{cost}</TableCell>
                <TableCell className="max-w-[320px]">
                    {items.length ? items.map((i) => i.item).join(', ') : 'None'}
                </TableCell>
            </TableRow>
        );
    });

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center">Exact Price(s) (Fol)</TableHead>
                    <TableHead className="text-center">Conflicting Items</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>{rows}</TableBody>
        </Table>
    );
};
