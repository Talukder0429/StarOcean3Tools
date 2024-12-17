import {Item, Profession} from '@/types';

const crftItems: Item<Profession.CRFT>[] = [
    {
        item: 'Aegis Pendant',
        cost: 1370,
        rating: 98,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Anti-Incapacitation Amulet',
        cost: 601,
        rating: 60,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Peppita', 'Stanice', 'Balbados', 'Aqua & Evia', 'Chilico'])
    },
    {
        item: 'Anti-Poison Amulet',
        cost: 500,
        rating: 50,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Roger',
            'Mirage',
            'Adray',
            'Stanice',
            'Balbados',
            'Aqua & Evia'
        ])
    },
    {
        item: 'Anti-Silence Amulet',
        cost: 650,
        rating: 50,
        inventors: new Set(['Sophia', 'Peppita', 'Aqua & Evia'])
    },
    {
        item: 'Aqua Ring',
        cost: 900,
        rating: 40,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Anti-Stone Amulet',
        cost: 700,
        rating: 50,
        inventors: new Set(['Sophia', 'Maria', 'Peppita', 'Balbados', 'Aqua & Evia'])
    },
    {
        item: 'Adorable Kitty Doll',
        cost: 241,
        rating: 2,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Roger', 'Adray', 'Stanice'])
    },
    {
        item: 'Amulet of Freedom',
        cost: 600,
        rating: 50,
        inventors: new Set(['Sophia', 'Maria', 'Balbados', 'Aqua & Evia'])
    },
    {
        item: 'Badge of Reflection',
        cost: 290,
        rating: 20,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Anti-Freezing Amulet',
        cost: 800,
        rating: 50,
        inventors: new Set(['Sophia', 'Peppita', 'Aqua & Evia'])
    },
    {
        item: 'Badge of Resistance',
        cost: 290,
        rating: 20,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Badge of Shielding',
        cost: 290,
        rating: 20,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Bangle of Accuracy',
        cost: 222,
        rating: 20,
        inventors: new Set(['Sophia', 'Maria', 'Balbados', 'Aqua & Evia'])
    },
    {
        item: 'Bangle of Intellect',
        cost: 300,
        rating: 20,
        inventors: new Set(['Sophia', 'Maria', 'Balbados', 'Aqua & Evia'])
    },
    {
        item: 'Battle Bonus Ring',
        cost: 500,
        rating: 80,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Ankh of Dismissal',
        cost: 280,
        rating: 50,
        inventors: new Set(['Fayt', 'Nel', 'Albel', 'Mirage', 'Stanice', 'Chilico'])
    },
    {
        item: "Berserker's Pendant",
        cost: 490,
        rating: 70,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Bladebane Cross',
        cost: 550,
        rating: 50,
        inventors: new Set(['Aqua & Evia', 'Chilico'])
    },
    {
        item: 'Blazing Pendant',
        cost: 380,
        rating: 30,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Blue Talisman',
        cost: 260,
        rating: 20,
        inventors: new Set(['Sophia', 'Maria', 'Balbados', 'Aqua & Evia'])
    },
    {
        item: 'Boots of Prowess',
        cost: 2480,
        rating: 99,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Brooch of Footwork',
        cost: 170,
        rating: 20,
        inventors: new Set(['Fayt', 'Nel', 'Albel', 'Mirage', 'Stanice'])
    },
    {
        item: 'Crude Ring',
        cost: 10,
        rating: 1,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Mirage',
            'Adray',
            'Stanice',
            'Balbados',
            'Aqua & Evia',
            'Chilico'
        ])
    },
    {
        item: 'Demonbane Cross',
        cost: 550,
        rating: 50,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Disgusting Doll',
        cost: 2,
        rating: 1,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Mirage',
            'Adray',
            'Stanice',
            'Balbados',
            'Aqua & Evia'
        ])
    },
    {
        item: 'Earring of Accuracy',
        cost: 220,
        rating: 40,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Earth Ring',
        cost: 900,
        rating: 40,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Eldritch Brooch',
        cost: 8500,
        rating: 99,
        inventors: new Set(['Fayt', 'Nel', 'Albel', 'Mirage', 'Stanice'])
    },
    {
        item: 'Elven Slippers',
        cost: 1020,
        rating: 60,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Embarrassing Earring',
        cost: 20,
        rating: 1,
        inventors: new Set(['Albel', 'Peppita', 'Roger', 'Mirage', 'Adray'])
    },
    {
        item: 'Emerald Earring',
        cost: 1700,
        rating: 90,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Emerald Ring',
        cost: 600,
        rating: 90,
        inventors: new Set(['Fayt', 'Nel', 'Albel', 'Mirage', 'Stanice'])
    },
    {
        item: 'Faerie Earring',
        cost: 1600,
        rating: 80,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Faerie Ring',
        cost: 600,
        rating: 80,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Feline Guardian',
        cost: 221,
        rating: 2,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Roger', 'Stanice'])
    },
    {
        item: 'Flare Ring',
        cost: 900,
        rating: 40,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Green Talisman',
        cost: 460,
        rating: 20,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Albel', 'Roger', 'Mirage', 'Adray', 'Stanice'])
    },
    {
        item: 'Hammer Charm',
        cost: 1390,
        rating: 70,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Mirage',
            'Stanice',
            'Balbados',
            'Aqua & Evia'
        ])
    },
    {
        item: 'Heavy Ring',
        cost: 15,
        rating: 1,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Mirage',
            'Adray',
            'Stanice',
            'Balbados',
            'Aqua & Evia',
            'Chilico'
        ])
    },
    {
        item: 'Humiliating Earring',
        cost: 30,
        rating: 1,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Mirage',
            'Adray',
            'Stanice',
            'Balbados',
            'Aqua & Evia',
            'Chilico'
        ])
    },
    {
        item: 'Laughable Bracelet',
        cost: 80,
        rating: 1,
        inventors: new Set(['Fayt', 'Sophia', 'Cliff', 'Maria', 'Nel', 'Stanice', 'Balbados', 'Aqua & Evia'])
    },
    {
        item: 'Loose Ring',
        cost: 20,
        rating: 1,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Mirage',
            'Adray',
            'Stanice',
            'Balbados',
            'Aqua & Evia',
            'Chilico'
        ])
    },
    {
        item: 'Lunar Talisman',
        cost: 320,
        rating: 70,
        inventors: new Set(['Sophia', 'Maria', 'Peppita', 'Balbados', 'Aqua & Evia'])
    },
    {
        item: 'Magebane Ankh',
        cost: 550,
        rating: 50,
        inventors: new Set(['Aqua & Evia', 'Chilico'])
    },
    {
        item: 'Mallet Charm',
        cost: 1280,
        rating: 99,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Mystic Orb',
        cost: 200,
        rating: 60,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Over-Carved Figure',
        cost: 8,
        rating: 1,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Mirage',
            'Adray',
            'Stanice',
            'Balbados',
            'Aqua & Evia'
        ])
    },
    {
        item: 'Pitiful Earring',
        cost: 50,
        rating: 1,
        inventors: new Set(['Fayt', 'Sophia', 'Cliff', 'Maria', 'Nel', 'Stanice', 'Balbados', 'Aqua & Evia', 'Chilico'])
    },
    {
        item: 'Purple Orb',
        cost: 150,
        rating: 30,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Roger', 'Adray', 'Stanice'])
    },
    {
        item: 'Red Talisman',
        cost: 260,
        rating: 20,
        inventors: new Set(['Sophia', 'Maria', 'Balbados', 'Aqua & Evia'])
    },
    {
        item: 'Ring of Animosity',
        cost: 700,
        rating: 70,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Ring of Erudition',
        cost: 640,
        rating: 70,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Ring of Haste',
        cost: 1100,
        rating: 60,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Ring of Healing',
        cost: 300,
        rating: 80,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Ring of Lunacy',
        cost: 200,
        rating: 70,
        inventors: new Set(['Aqua & Evia'])
    },
    {
        item: 'Ring of Mental Power',
        cost: 220,
        rating: 80,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Ring of Might',
        cost: 305,
        rating: 99,
        inventors: new Set(['Aqua & Evia'])
    },
    {
        item: 'Ring of Quietude',
        cost: 700,
        rating: 50,
        inventors: new Set(['Aqua & Evia'])
    },
    {
        item: 'Silver Cross',
        cost: 550,
        rating: 50,
        inventors: new Set(['Aqua & Evia', 'Chilico'])
    },
    {
        item: 'Star Necklace',
        cost: 4100,
        rating: 80,
        inventors: new Set(['Chilico'])
    },
    {
        item: 'Star Talisman',
        cost: 320,
        rating: 70,
        inventors: new Set(['Sophia', 'Maria', 'Peppita', 'Balbados', 'Aqua & Evia'])
    },
    {
        item: 'Strange Figure',
        cost: 12,
        rating: 1,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Mirage',
            'Adray',
            'Stanice',
            'Balbados',
            'Aqua & Evia'
        ])
    },
    {
        item: 'Tacky Earring',
        cost: 15,
        rating: 1,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Mirage',
            'Adray',
            'Stanice',
            'Balbados',
            'Aqua & Evia',
            'Chilico'
        ])
    },
    {
        item: "Theives' Boots",
        cost: 6700,
        rating: 99,
        inventors: new Set(['Aqua & Evia', 'Chilico'])
    },
    {
        item: 'Third-Rate Bracelet',
        cost: 60,
        rating: 1,
        inventors: new Set(['Fayt', 'Sophia', 'Cliff', 'Maria', 'Nel', 'Stanice', 'Balbados', 'Aqua & Evia', 'Chilico'])
    },
    {
        item: 'Unbelievable Hair Ornament',
        cost: 15,
        rating: 1,
        inventors: new Set(['Albel', 'Peppita', 'Roger', 'Mirage', 'Adray'])
    },
    {
        item: 'Vulgar Hair Ornament',
        cost: 1,
        rating: 1,
        inventors: new Set(['Albel', 'Peppita', 'Roger', 'Mirage', 'Adray'])
    },
    {
        item: 'Wind Ring',
        cost: 900,
        rating: 40,
        inventors: new Set(['Sophia', 'Maria', 'Balbados'])
    },
    {
        item: 'Wingbane Cross',
        cost: 550,
        rating: 50,
        inventors: new Set(['Aqua & Evia', 'Chilico'])
    },
    {
        item: 'Yellow Talisman',
        cost: 260,
        rating: 20,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Mirage',
            'Stanice',
            'Balbados',
            'Aqua & Evia',
            'Chilico'
        ])
    }
];

export default crftItems;
