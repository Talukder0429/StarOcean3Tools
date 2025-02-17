import layout1 from '@/assets/layout1.jpg';
import layout2 from '@/assets/layout2.jpg';
import layout3 from '@/assets/layout3.jpg';
import layout4 from '@/assets/layout4.jpg';
import layout5 from '@/assets/layout5.jpg';
import layout6 from '@/assets/layout6.jpg';
import layout7 from '@/assets/layout7.jpg';
import layout8 from '@/assets/layout8.jpg';
import s211FloorData from '@/data/s211FloorData';

import {useEffect, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components//ui/card';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {useToast} from '@/hooks/use-toast';

const LAYOUTS = [layout1, layout2, layout3, layout4, layout5, layout6, layout7, layout8];
const MAX_FLOOR = s211FloorData.length - 1;

export function S211() {
    const {toast} = useToast();

    const [floor, setFloor] = useState(() => {
        const savedFloor = localStorage.getItem('floor');
        if (savedFloor) {
            toast({
                description: 'Previous Floor Selection Loaded',
                variant: 'success',
                duration: 1500
            });
        }
        return parseInt(savedFloor ?? '0');
    });

    useEffect(() => {
        localStorage.setItem('floor', floor.toString());
    }, [floor]);

    const nextFloor = () => {
        if (floor < MAX_FLOOR) {
            setFloor(floor + 1);
        }
    };

    const previousFloor = () => {
        if (floor > 0) {
            setFloor(floor - 1);
        }
    };

    return (
        <div className="p-4 flex">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle className="text-center text-lg">Sphere 211 Floor Guide</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="w-fit mx-auto">
                        <img
                            className="aspect-square object-contain max-h-[600px]"
                            alt=""
                            src={LAYOUTS[s211FloorData[floor].Layout - 1]}></img>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center mt-4">
                        <Button onClick={previousFloor} disabled={floor <= 0} variant="secondary">
                            &lt; Previous Floor
                        </Button>
                        <div>
                            <Select
                                value={floor.toString()}
                                onValueChange={(idx) => {
                                    setFloor(parseInt(idx));
                                }}>
                                <SelectTrigger className="w-[80px]">
                                    <SelectValue placeholder="Select Floor" />
                                </SelectTrigger>
                                <SelectContent>
                                    {s211FloorData.map((floorData, index) => (
                                        <SelectItem key={floorData.Floor} value={index.toString()}>
                                            {floorData.Floor}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <Button onClick={nextFloor} disabled={floor >= MAX_FLOOR} variant="secondary">
                            Next Floor &gt;
                        </Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <div className="mx-auto">
                        <div>Chest A: {s211FloorData[floor]['Chest A']}</div>
                        <div>Chest B: {s211FloorData[floor]['Chest B']}</div>
                        <div>Chest C: {s211FloorData[floor]['Chest C']}</div>
                        <div>Chest D: {s211FloorData[floor]['Chest D']}</div>
                        <div>Chest E: {s211FloorData[floor]['Chest E']}</div>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
