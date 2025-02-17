import {Card, CardContent, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from './ui/button';
import {useToast} from '@/hooks/use-toast';

export const FAQ = () => {
    const {toast} = useToast();

    return (
        <div className="p-4 flex">
            <Card className="mx-auto">
                <CardHeader>
                    <CardTitle className="text-center text-lg">Item Refining FAQ</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3>Support Items and their Location</h3>
                    <ul className="ml-4">
                        <li>Alchemist&apos;s Stone (ALCH) &gt; Mosel Dunes</li>
                        <li>Multi-Flask (CMPD) &gt; Arias</li>
                        <li>Keen Kitchen Knife (COOK) &gt; Gemity (Buy for 55,000 Fol)</li>
                        <li>Cherubic Bust (CRFT) &gt; Palmira Plains</li>
                        <li>NC Program Disk (ENG) &gt; Moonbase</li>
                        <li>Smithy Hammer (SMTH) &gt; Arkives (Flad&apos;s House)</li>
                        <li>Enchanted Pen (WRIT) &gt; Shrine of Kaddan (RoD Required)</li>
                    </ul>

                    <h3 className="mt-4">Special Thanks to:</h3>
                    <ul className="ml-4">
                        <li>
                            <span>
                                <span className="bold">3vrB257A5gq3fg</span>, for laying down the foundations in their{' '}
                                <a
                                    href="https://gamefaqs.gamespot.com/ps2/536705-star-ocean-till-the-end-of-time/faqs/77830"
                                    target="_blank"
                                    rel="noreferrer">
                                    guide
                                </a>
                                !
                            </span>
                        </li>
                        <li>
                            <span>
                                <span className="bold">A I e x</span>, and their{' '}
                                <a
                                    href="https://gamefaqs.gamespot.com/ps2/536705-star-ocean-till-the-end-of-time/faqs/32232"
                                    target="_blank"
                                    rel="noreferrer">
                                    guide
                                </a>{' '}
                                used for cross-referencing!
                            </span>
                        </li>
                        <li>
                            <span>
                                <span className="bold">Aerius</span>, and their{' '}
                                <a href="http://pendell.atspace.cc/so3ic.html" target="_blank" rel="noreferrer">
                                    crafting calculator
                                </a>{' '}
                                used for testing and ideas!
                            </span>
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <div>
                        <h4>If you find a bug or inaccuracy</h4>
                        <ol className="list-decimal list-inside mt-2 pl-4">
                            <li>
                                Try to
                                <Button
                                    className="ml-2"
                                    variant="destructive"
                                    onClick={() => {
                                        sessionStorage.clear();
                                        localStorage.clear();
                                        toast({
                                            description: 'Local Web Storage Cleared',
                                            variant: 'success',
                                            duration: 1500
                                        });
                                    }}>
                                    Clear Local Web Storage
                                </Button>
                            </li>
                            <li className="mt-2">
                                Still broken? Please{' '}
                                <a href="mailto:arnob_talukder@hotmail.com?subject=SO3-IC-BUG">contact me</a>!
                            </li>
                        </ol>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};
