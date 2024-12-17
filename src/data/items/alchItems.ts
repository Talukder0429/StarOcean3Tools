import {Item, Profession} from '@/types';

const alchItems: Item<Profession.ALCH>[] = [
    {
        item: 'Air Gem',
        cost: 350,
        rating: 40,
        inventors: new Set(['Fayt', 'Sophia', 'Maria', 'Nel', 'Mirage', 'Adray', 'Mackwell', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Angel Stone',
        cost: 5050,
        rating: 70,
        inventors: new Set(['Fayt', 'Peppita', 'Mirage', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Celestial Homunculus',
        cost: 10300,
        rating: 80,
        inventors: new Set(['Fayt', 'Peppita', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Brownie Stone',
        cost: 1050,
        rating: 70,
        inventors: new Set(['Fayt', 'Peppita', 'Mirage', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Damask',
        cost: 1440,
        rating: 60,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Mirage',
            'Adray',
            'Eliza',
            'Mackwell',
            'Misty Lear'
        ])
    },
    {
        item: 'Diamond',
        cost: 1290,
        rating: 60,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Maria',
            'Nel',
            'Peppita',
            'Mirage',
            'Adray',
            'Eliza',
            'Mackwell',
            'Misty Lear'
        ])
    },
    {
        item: 'Dark Crystal',
        cost: 3700,
        rating: 95,
        inventors: new Set(['Ansala'])
    },
    {
        item: 'Earth Homunculus',
        cost: 1300,
        rating: 80,
        inventors: new Set(['Fayt', 'Sophia', 'Maria', 'Nel', 'Mirage', 'Mackwell', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Emerald',
        cost: 200,
        rating: 25,
        inventors: new Set([
            'Fayt',
            'Cliff',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Adray',
            'Eliza',
            'Mackwell',
            'Misty Lear'
        ])
    },
    {
        item: 'Fire Gem',
        cost: 350,
        rating: 40,
        inventors: new Set(['Fayt', 'Sophia', 'Maria', 'Nel', 'Mirage', 'Adray', 'Mackwell', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Fire Homunculus',
        cost: 2800,
        rating: 80,
        inventors: new Set(['Fayt', 'Sophia', 'Maria', 'Nel', 'Mackwell', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Iron',
        cost: 50,
        rating: 15,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Albel', 'Peppita', 'Adray', 'Eliza', 'Mackwell', 'Misty Lear'])
    },
    {
        item: 'Misconceived Product',
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
            'Eliza',
            'Mackwell',
            'Misty Lear',
            'Ansala'
        ])
    },
    {item: 'Mythril', cost: 3070, rating: 90, inventors: new Set(['Ansala'])},
    {
        item: 'Earth Gem',
        cost: 350,
        rating: 40,
        inventors: new Set(['Fayt', 'Sophia', 'Maria', 'Nel', 'Mirage', 'Adray', 'Mackwell', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Nereid Stone',
        cost: 1550,
        rating: 70,
        inventors: new Set(['Fayt', 'Peppita', 'Mirage', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Orichalcum',
        cost: 5700,
        rating: 98,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Albel', 'Peppita', 'Roger', 'Eliza', 'Mackwell', 'Misty Lear'])
    },
    {
        item: 'Overweight Product',
        cost: 17,
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
            'Eliza',
            'Mackwell',
            'Misty Lear',
            'Ansala'
        ])
    },
    {
        item: "Philosopher's Stone",
        cost: 12,
        rating: 100,
        inventors: new Set(['Peppita', 'Eliza'])
    },
    {
        item: 'Rainbow Diamond',
        cost: 3080,
        rating: 95,
        inventors: new Set(['Ansala'])
    },
    {
        item: 'Repulsive Lump',
        cost: 9,
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
            'Eliza',
            'Mackwell',
            'Misty Lear',
            'Ansala'
        ])
    },
    {
        item: 'Ruby',
        cost: 160,
        rating: 25,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Albel', 'Peppita', 'Adray', 'Eliza', 'Mackwell', 'Misty Lear'])
    },
    {
        item: 'Salamander Stone',
        cost: 2550,
        rating: 70,
        inventors: new Set(['Fayt', 'Peppita', 'Mirage', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Sapphire',
        cost: 160,
        rating: 25,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Albel', 'Peppita', 'Adray', 'Eliza', 'Mackwell', 'Misty Lear'])
    },
    {
        item: 'Shell Sapphire',
        cost: 2300,
        rating: 90,
        inventors: new Set(['Ansala'])
    },
    {item: 'Star Ruby', cost: 2700, rating: 80, inventors: new Set(['Ansala'])},
    {
        item: 'Crystal',
        cost: 830,
        rating: 60,
        inventors: new Set(['Fayt', 'Sophia', 'Maria', 'Nel', 'Mirage', 'Adray', 'Eliza', 'Mackwell', 'Misty Lear'])
    },
    {
        item: 'Stone of Evil',
        cost: 200,
        rating: 2,
        inventors: new Set(['Eliza', 'Ansala'])
    },
    {
        item: 'Strange Lump',
        cost: 18,
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
            'Eliza',
            'Mackwell',
            'Misty Lear',
            'Ansala'
        ])
    },
    {
        item: 'Sylph Stone',
        cost: 1550,
        rating: 70,
        inventors: new Set(['Fayt', 'Peppita', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Water Gem',
        cost: 350,
        rating: 40,
        inventors: new Set(['Fayt', 'Sophia', 'Maria', 'Nel', 'Mirage', 'Adray', 'Mackwell', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Water Homunculus',
        cost: 1800,
        rating: 80,
        inventors: new Set(['Fayt', 'Sophia', 'Maria', 'Nel', 'Mirage', 'Mackwell', 'Misty Lear', 'Ansala'])
    },
    {
        item: 'Wind Homunculus',
        cost: 1800,
        rating: 80,
        inventors: new Set(['Fayt', 'Sophia', 'Maria', 'Nel', 'Mackwell', 'Misty Lear', 'Ansala'])
    }
];

export default alchItems;
