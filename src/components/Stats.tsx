import 'react-circular-progressbar/dist/styles.css';

import {useEffect, useState} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {Item, Profession} from '@/types';

export const Stats = (props: {successChance: number; boostItem: string; selectedItem?: Item<Profession>}) => {
    const [color, setColor] = useState('red');
    const [hasBoost, setHasBoost] = useState(true);
    const [successChance, setSuccessChance] = useState(0);

    useEffect(() => {
        const newChance = Math.max(props.successChance ? props.successChance + (hasBoost ? 20 : 0) : 0, 0);

        if (newChance > 66) {
            setColor('#6ADD0D');
        } else if (newChance < 33) {
            setColor('#FF4646');
        } else {
            setColor('#FFA703');
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
                <div className="w-[200px] h-[200px] my-4">
                    <CircularProgressbar
                        value={Math.min(successChance, 100)}
                        text={`${successChance.toString()}%`}
                        styles={buildStyles({
                            pathColor: color
                        })}
                    />
                </div>
                <div>
                    <label>
                        <input
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
                                        {props.boostItem}
                                    </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <span>+20% Boost to Total Skill</span>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>{' '}
                        in bag?
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xl">Difficulty: {props.selectedItem ? props.selectedItem.rating : 0} / 100</div>
                <div className="text-xl">Base Cost: {props.selectedItem ? props.selectedItem.cost : 0} Fol</div>
                <div className="text-xl">Inventors:</div>
                <ul className="list-disc list-inside">
                    {props.selectedItem &&
                        [...props.selectedItem.inventors.values()].map((inventor) => (
                            <li className="ml-2" key={inventor}>
                                {inventor}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};
