import 'react-circular-progressbar/dist/styles.css';

import {useEffect, useState} from 'react';
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {Item, Profession} from '@/types';

export const Stats = (props: {successChance: number; boostItem: string; selectedItem?: Item<Profession>}) => {
    const [color, setColor] = useState('red');
    const [hasBoost, setHasBoost] = useState(true);
    const [successChance, setSuccessChance] = useState(0);

    useEffect(() => {
        const newChance = Math.max(props.successChance ? props.successChance + (hasBoost ? 20 : 0) : 0, 0);

        if (newChance > 66) {
            // Green 400
            setColor('#4ade80');
        } else if (newChance < 33) {
            // Red 400
            setColor('#f87171');
        } else {
            // Orange 400
            setColor('#fb923c');
        }

        setSuccessChance(newChance);
    }, [hasBoost, props.successChance]);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center w-full">
                <div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <span className="decoration-dotted underline underline-offset-8">
                                    Initial Probability of Success
                                </span>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>Probability Decreases Each Iteration</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="max-w-[300px] max-h-[300px] my-4">
                    <CircularProgressbarWithChildren
                        value={Math.min(successChance, 100)}
                        styles={buildStyles({
                            pathColor: color
                        })}>
                        <div className="flex flex-col gap-2 items-center">
                            <div className="text-4xl" style={{color: color}}>
                                {successChance.toString()}%
                            </div>
                            <div className="text-lg">
                                Difficulty: {props.selectedItem ? props.selectedItem.rating : 0} / 100
                            </div>
                            <div className="text-lg">
                                Base Cost: {props.selectedItem ? props.selectedItem.cost : 0} Fol
                            </div>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div>
                    <input
                        id="boost"
                        className="align-middle mr-2"
                        type="checkbox"
                        checked={hasBoost}
                        onChange={() => {
                            setHasBoost((old) => !old);
                        }}
                    />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <span className="decoration-dotted underline underline-offset-8">
                                    <label htmlFor="boost">{props.boostItem}</label>
                                </span>
                            </TooltipTrigger>
                            <TooltipContent>
                                <span>+20% Boost to Total Skill</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>{' '}
                    <label htmlFor="boost">in bag?</label>
                </div>
            </div>
        </div>
    );
};
