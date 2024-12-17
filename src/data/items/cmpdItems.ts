import {Item, Profession} from '@/types';

const cmpdItems: Item<Profession.CMPD>[] = [
    {
        item: 'Antidote',
        cost: 21,
        rating: 20,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Nel',
            'Peppita',
            'Roger',
            'Mirage',
            'Gossam',
            'Milenya',
            'Puffy',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Beguiling Device',
        cost: 1001,
        rating: 80,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Berry Potion',
        cost: 21,
        rating: 20,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Nel',
            'Peppita',
            'Roger',
            'Mirage',
            'Gossam',
            'Milenya',
            'Puffy',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Cinderella Tablets',
        cost: 1001,
        rating: 99,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Cliff',
            'Maria',
            'Nel',
            'Albel',
            'Peppita',
            'Roger',
            'Gossam',
            'Milenya',
            'Puffy',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Aqua Potion',
        cost: 22,
        rating: 20,
        inventors: new Set([
            'Fayt',
            'Sophia',
            'Nel',
            'Peppita',
            'Roger',
            'Mirage',
            'Gossam',
            'Milenya',
            'Puffy',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Berserker Device',
        cost: 101,
        rating: 60,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Bitter Potion',
        cost: 12,
        rating: 1,
        inventors: new Set(['Sophia', 'Nel', 'Roger', 'Mirage', 'Milenya', 'Louise the Diviner'])
    },
    {
        item: 'Bubbling Potion',
        cost: 12,
        rating: 1,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Durian Stun Bomb-R4',
        cost: 731,
        rating: 40,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Bubbly Potion',
        cost: 202,
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
            'Gossam',
            'Milenya',
            'Puffy',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Endorphin Boost',
        cost: 18,
        rating: 1,
        inventors: new Set(['Fayt', 'Peppita', 'Gossam'])
    },
    {
        item: 'Faerie Elixir',
        cost: 110,
        rating: 80,
        inventors: new Set([
            'Sophia',
            'Cliff',
            'Nel',
            'Albel',
            'Roger',
            'Mirage',
            'Adray',
            'Milenya',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Fizzing Potion',
        cost: 152,
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
            'Gossam',
            'Milenya',
            'Puffy'
        ])
    },
    {
        item: 'Fruity Potion',
        cost: 13,
        rating: 20,
        inventors: new Set(['Sophia', 'Nel', 'Roger', 'Mirage', 'Milenya', 'Louise the Diviner'])
    },
    {
        item: 'Grabbag Stun Bomb-R2',
        cost: 731,
        rating: 40,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Heroic Elixir',
        cost: 110,
        rating: 80,
        inventors: new Set([
            'Sophia',
            'Cliff',
            'Nel',
            'Albel',
            'Roger',
            'Mirage',
            'Adray',
            'Milenya',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Liquid Flare Bomb',
        cost: 601,
        rating: 30,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Liquid Hybrid Bomb',
        cost: 801,
        rating: 90,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Liquid Mind Bomb',
        cost: 601,
        rating: 30,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Malodorous Potion',
        cost: 12,
        rating: 1,
        inventors: new Set(['Fayt', 'Peppita', 'Gossam'])
    },
    {
        item: 'Medicine Bottle',
        cost: 60,
        rating: 5,
        inventors: new Set(['Sophia', 'Nel', 'Roger', 'Mirage', 'Adray', 'Milenya', 'Louise the Diviner'])
    },
    {
        item: 'Might Tablets',
        cost: 90,
        rating: 4,
        inventors: new Set(['Fayt', 'Cliff', 'Maria', 'Albel', 'Peppita', 'Gossam', 'Puffy', 'Louise the Diviner'])
    },
    {
        item: 'Miracle Power',
        cost: 102,
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
            'Gossam',
            'Milenya',
            'Puffy',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Molotov Stun Bomb-R1',
        cost: 121,
        rating: 40,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Deadly Poison',
        cost: 160,
        rating: 50,
        inventors: new Set(['Puffy', 'Louise the Diviner'])
    },
    {
        item: 'Neural Augmenter',
        cost: 61,
        rating: 1,
        inventors: new Set(['Fayt', 'Peppita', 'Gossam'])
    },
    {
        item: 'Pheramone Enhancer',
        cost: 36,
        rating: 1,
        inventors: new Set(['Fayt', 'Peppita', 'Gossam'])
    },
    {
        item: 'Potion of Youth (Fake)',
        cost: 5,
        rating: 65,
        inventors: new Set(['Cliff', 'Albel', 'Peppita', 'Roger', 'Puffy'])
    },
    {
        item: 'Resurrection Elixir',
        cost: 140,
        rating: 2,
        inventors: new Set([
            'Sophia',
            'Cliff',
            'Nel',
            'Albel',
            'Roger',
            'Mirage',
            'Adray',
            'Milenya',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Resurrection Mist',
        cost: 210,
        rating: 10,
        inventors: new Set(['Sophia', 'Cliff', 'Maria', 'Nel', 'Albel', 'Mirage', 'Louise the Diviner'])
    },
    {
        item: 'Shielding Device',
        cost: 61,
        rating: 70,
        inventors: new Set(['Puffy'])
    },
    {item: 'Sleeping Gas', cost: 40, rating: 10, inventors: new Set(['Puffy'])},
    {
        item: 'Soul Strengthening Device',
        cost: 101,
        rating: 60,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Super Potion',
        cost: 302,
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
            'Gossam',
            'Milenya',
            'Puffy',
            'Louise the Diviner'
        ])
    },
    {
        item: 'Sweet Potion',
        cost: 40,
        rating: 20,
        inventors: new Set(['Sophia', 'Nel', 'Roger', 'Mirage', 'Adray', 'Milenya', 'Louise the Diviner'])
    },
    {
        item: 'Syrupy Potion',
        cost: 20,
        rating: 40,
        inventors: new Set(['Sophia', 'Cliff', 'Nel', 'Albel', 'Roger', 'Mirage', 'Milenya', 'Louise the Diviner'])
    },
    {
        item: 'Tears of Aphrodite',
        cost: 26,
        rating: 1,
        inventors: new Set(['Fayt', 'Peppita', 'Gossam'])
    },
    {
        item: 'Tears of Ishtar',
        cost: 86,
        rating: 1,
        inventors: new Set(['Fayt', 'Peppita', 'Gossam'])
    },
    {
        item: 'Tears of Venus',
        cost: 56,
        rating: 1,
        inventors: new Set(['Fayt', 'Peppita', 'Gossam', 'Milenya'])
    },
    {item: 'Thick Potion', cost: 12, rating: 1, inventors: new Set(['Puffy'])},
    {
        item: 'Umai-bo Stun Bomb-R3',
        cost: 121,
        rating: 40,
        inventors: new Set(['Puffy'])
    },
    {
        item: 'Verdurous Potion',
        cost: 310,
        rating: 90,
        inventors: new Set(['Sophia', 'Nel', 'Roger', 'Mirage', 'Adray', 'Milenya', 'Louise the Diviner'])
    },
    {
        item: 'Vial of Poison',
        cost: 40,
        rating: 10,
        inventors: new Set(['Fayt', 'Peppita', 'Gossam', 'Puffy'])
    },
    {
        item: 'Witch Tablets',
        cost: 210,
        rating: 70,
        inventors: new Set(['Cliff', 'Maria', 'Nel', 'Albel', 'Roger', 'Milenya', 'Puffy', 'Louise the Diviner'])
    },
    {
        item: 'Roe Tablets',
        cost: 3060,
        rating: 99,
        inventors: new Set(['Fayt', 'Peppita', 'Gossam'])
    }
];

export default cmpdItems;
