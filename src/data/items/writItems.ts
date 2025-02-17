import {Item, Profession} from '@/types';

const writItems: Item<Profession.WRIT>[] = [
    {
        item: 'Brittle Tome',
        cost: 1500,
        rating: 100,
        inventors: new Set(['Sophia', 'Maria', 'Mirage', 'Osman the Sage'])
    },
    {
        item: 'Crumbling Tome',
        cost: 1500,
        rating: 60,
        inventors: new Set(['Fayt', 'Nel', 'Adray', 'Mishell', 'Count Noppen'])
    },
    {
        item: 'Damaged Tome',
        cost: 1500,
        rating: 99,
        inventors: new Set(['Osman the Sage'])
    },
    {
        item: 'Dated Tome',
        cost: 1500,
        rating: 60,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Roger',
            'Mirage',
            'Cornelius',
            'Mishell',
            'Count Noppen',
            'Osman the Sage'
        ])
    },
    {
        item: 'Decayed Tome',
        cost: 1500,
        rating: 40,
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
            'Cornelius',
            'Mishell',
            'Count Noppen',
            'Osman the Sage'
        ])
    },
    {
        item: 'Deteriorating Tome',
        cost: 1500,
        rating: 40,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Albel', 'Roger', 'Cornelius', 'Mishell'])
    },
    {
        item: 'Earth Discharge',
        cost: 350,
        rating: 30,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Adray',
            'Cornelius',
            'Mishell',
            'Count Noppen',
            'Osman the Sage'
        ])
    },
    {
        item: 'Esoteric Scroll',
        cost: 50,
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
            'Cornelius',
            'Mishell',
            'Count Noppen',
            'Osman the Sage'
        ])
    },
    {
        item: 'Fading Tome',
        cost: 1500,
        rating: 99,
        inventors: new Set(['Osman the Sage'])
    },
    {
        item: 'Fire Discharge',
        cost: 350,
        rating: 30,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Roger',
            'Adray',
            'Cornelius',
            'Mishell',
            'Count Noppen',
            'Osman the Sage'
        ])
    },
    {
        item: 'Fire Resistance',
        cost: 710,
        rating: 30,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Cornelius',
            'Mishell',
            'Count Noppen'
        ])
    },
    {
        item: 'Glued Rod',
        cost: 1,
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
            'Cornelius',
            'Mishell',
            'Count Noppen'
        ])
    },
    {
        item: 'Illegible Book',
        cost: 175,
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
            'Cornelius',
            'Mishell',
            'Count Noppen'
        ])
    },
    {
        item: 'Mildewed Tome',
        cost: 1500,
        rating: 90,
        inventors: new Set(['Osman the Sage'])
    },
    {
        item: 'Moldy Tome',
        cost: 1500,
        rating: 99,
        inventors: new Set(['Sophia', 'Maria', 'Mirage', 'Adray', 'Osman the Sage'])
    },
    {
        item: 'Musty Tome',
        cost: 1500,
        rating: 60,
        inventors: new Set(['Cliff', 'Albel', 'Roger', 'Cornelius', 'Count Noppen'])
    },
    {
        item: 'Ragged Book',
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
            'Cornelius',
            'Mishell',
            'Count Noppen',
            'Osman the Sage'
        ])
    },
    {
        item: 'Earth Resistance',
        cost: 710,
        rating: 30,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Cornelius',
            'Mishell',
            'Count Noppen'
        ])
    },
    {
        item: 'Secret Teachings',
        cost: 150,
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
            'Cornelius',
            'Mishell',
            'Count Noppen',
            'Osman the Sage'
        ])
    },
    {
        item: 'Strange Book',
        cost: 5400,
        rating: 65,
        inventors: new Set(['Cornelius', 'Count Noppen'])
    },
    {
        item: 'Tattered Tome',
        cost: 1500,
        rating: 40,
        inventors: new Set(['Fayt', 'Cliff', 'Nel', 'Albel', 'Roger', 'Cornelius', 'Mishell'])
    },
    {
        item: 'Tome of Insight',
        cost: 601,
        rating: 50,
        inventors: new Set(['Sophia', 'Maria', 'Mirage', 'Osman the Sage'])
    },
    {
        item: 'Tome of Prowess',
        cost: 1670,
        rating: 70,
        inventors: new Set(['Sophia', 'Maria', 'Mirage', 'Osman the Sage'])
    },
    {
        item: 'Water Discharge',
        cost: 350,
        rating: 30,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Roger',
            'Adray',
            'Cornelius',
            'Mishell',
            'Count Noppen',
            'Osman the Sage'
        ])
    },
    {
        item: 'Water Resistance',
        cost: 710,
        rating: 30,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Cornelius',
            'Mishell',
            'Count Noppen'
        ])
    },
    {
        item: 'Wind Discharge',
        cost: 350,
        rating: 30,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Roger',
            'Adray',
            'Cornelius',
            'Mishell',
            'Count Noppen',
            'Osman the Sage'
        ])
    },
    {
        item: 'Wind Resistance',
        cost: 710,
        rating: 30,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Cornelius',
            'Mishell',
            'Count Noppen'
        ])
    }
];

export default writItems;
