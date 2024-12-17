import {Calculator} from '@/components/Calculator';
import {Profession} from '@/types';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import itemStats from '@/data/items/itemStats';
import inventorStats from './data/inventorStats';
import boostItems from './data/boostItems';

const tabTrigger = Object.values(Profession).map((p) => (
    <TabsTrigger value={p} key={p}>
        {p}
    </TabsTrigger>
));

const tabContent = Object.values(Profession).map((p) => (
    <TabsContent value={p} key={p}>
        <Calculator
            profession={p}
            items={itemStats[p].sort((a, b) => a.item.localeCompare(b.item))}
            inventors={inventorStats[p].sort((a, b) => a.inventor.localeCompare(b.inventor))}
            boostItem={boostItems[p]}></Calculator>
    </TabsContent>
));

function App() {
    return (
        <Tabs>
            <TabsList>
                {tabTrigger}
                {/* <Tab style={{ color: "#3e98c7", fontStyle: "italic" }}>Extras</Tab> */}
            </TabsList>

            {tabContent}
        </Tabs>
    );
}

export default App;
