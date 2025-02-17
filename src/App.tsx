import {Calculator} from '@/components/Calculator';
import {Profession} from '@/types';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import itemStats from '@/data/items/itemStats';
import inventorStats from '@/data/inventorStats';
import boostItems from '@/data/boostItems';
import {ThemeProvider} from '@/components/theme-provider';
import {ModeToggle} from './components/ModeToggle';
import {FAQ} from '@/components/FAQ';
import {Toaster} from '@/components/ui/toaster';
import {S211} from './components/S211';

const tabTrigger = Object.values(Profession).map((p) => (
    <TabsTrigger value={p} key={p}>
        {p}
    </TabsTrigger>
));

tabTrigger.push(
    <TabsTrigger value="S211" key="S211">
        S211
    </TabsTrigger>
);

tabTrigger.push(
    <TabsTrigger value="FAQ" key="FAQ">
        FAQ
    </TabsTrigger>
);

const tabContent = Object.values(Profession).map((p) => (
    <TabsContent value={p} key={p}>
        <Calculator
            profession={p}
            items={itemStats[p].sort((a, b) => a.item.localeCompare(b.item))}
            inventors={inventorStats[p].sort((a, b) => a.inventor.localeCompare(b.inventor))}
            boostItem={boostItems[p]}></Calculator>
    </TabsContent>
));

tabContent.push(
    <TabsContent value="S211" key="S211">
        <S211 />
    </TabsContent>
);

tabContent.push(
    <TabsContent value="FAQ" key="FAQ">
        <FAQ />
    </TabsContent>
);

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="theme">
            <div className="absolute right-2 top-2">
                <ModeToggle />
            </div>
            <Toaster />
            <h1 className="text-4xl text-center p-8">Star Ocean 3 Tools</h1>
            <Tabs defaultValue={Profession.ALCH}>
                <div className="text-center overflow-x-auto">
                    <TabsList>{tabTrigger}</TabsList>
                </div>
                {tabContent}
            </Tabs>
        </ThemeProvider>
    );
}

export default App;
