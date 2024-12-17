import {Item, Profession} from '@/types';

const cookItems: Item<Profession.COOK>[] = [
    {
        item: 'Amazing Tenderloin',
        cost: 694,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Broken Prophet Cider',
        cost: 340,
        rating: 50,
        inventors: new Set(['Damda Mooda', 'Mayu'])
    },
    {
        item: 'Almond Jelly',
        cost: 40,
        rating: 60,
        inventors: new Set(['Fayt', 'Nel', 'Mirage', 'Mayu'])
    },
    {item: 'Awful Cider', cost: 42, rating: 1, inventors: new Set(['Adray'])},
    {
        item: 'BBQ Pork Ramen',
        cost: 102,
        rating: 40,
        inventors: new Set(['Fayt', 'Maria', 'Nel', 'Mirage', 'Mayu'])
    },
    {
        item: 'Beautiful Ice Cream',
        cost: 694,
        rating: 99,
        inventors: new Set(['Peppita', 'Rigel'])
    },
    {
        item: 'Bleu Cheese',
        cost: 100,
        rating: 60,
        inventors: new Set(['Maria', 'Albel', 'Rigel'])
    },
    {
        item: 'Blue Moon Cider',
        cost: 305,
        rating: 40,
        inventors: new Set(['Cliff', 'Peppita', 'Roger', 'Adray', 'Damda Mooda'])
    },
    {
        item: 'Boiled King Crab',
        cost: 100,
        rating: 40,
        inventors: new Set(['Rigel'])
    },
    {
        item: 'Cheap Cider',
        cost: 32,
        rating: 1,
        inventors: new Set(['Fayt', 'Sophia', 'Cliff', 'Maria', 'Nel', 'Albel', 'Mirage', 'Adray'])
    },
    {
        item: 'Cheap Sashami',
        cost: 96,
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
            'Damda Mooda',
            'Mayu',
            'Rigel',
            'Killer Chef'
        ])
    },
    {
        item: 'Brass Demon Cider',
        cost: 340,
        rating: 80,
        inventors: new Set(['Damda Mooda', 'Mayu'])
    },
    {
        item: 'Chocolate Banana',
        cost: 40,
        rating: 60,
        inventors: new Set(['Maria', 'Albel', 'Rigel'])
    },
    {
        item: 'Chopped Steak',
        cost: 40,
        rating: 30,
        inventors: new Set(['Fayt', 'Maria', 'Nel', 'Mirage', 'Mayu'])
    },
    {
        item: 'Cold Soba',
        cost: 40,
        rating: 30,
        inventors: new Set(['Fayt', 'Maria', 'Nel', 'Mirage', 'Adray', 'Mayu'])
    },
    {
        item: 'Corn on the Cob',
        cost: 40,
        rating: 25,
        inventors: new Set(['Rigel'])
    },
    {
        item: 'Curry Rice',
        cost: 18,
        rating: 20,
        inventors: new Set([
            'Fayt',
            'Cliff',
            'Maria',
            'Nel',
            'Peppita',
            'Roger',
            'Mirage',
            'Adray',
            'Damda Mooda',
            'Mayu'
        ])
    },
    {
        item: 'Decorated Cake',
        cost: 22,
        rating: 50,
        inventors: new Set(['Fayt', 'Nel', 'Mayu'])
    },
    {
        item: 'Deluxe Fruit Bowl',
        cost: 40,
        rating: 10,
        inventors: new Set(['Maria', 'Albel', 'Rigel'])
    },
    {
        item: 'Demonic Durian',
        cost: 694,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Devilish Sea Squirt',
        cost: 694,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Discordant Dessert',
        cost: 6,
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
            'Damda Mooda',
            'Mayu',
            'Rigel',
            'Killer Chef'
        ])
    },
    {
        item: 'Dragon Pot Stickers',
        cost: 694,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Fachuchon',
        cost: 429,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Fiery Cyclops Cider',
        cost: 330,
        rating: 75,
        inventors: new Set(['Cliff', 'Peppita', 'Roger', 'Adray', 'Damda Mooda', 'Killer Chef'])
    },
    {
        item: 'Fresh Spring Rolls',
        cost: 40,
        rating: 30,
        inventors: new Set(['Fayt', 'Nel', 'Mayu'])
    },
    {
        item: 'Friend Turnips',
        cost: 40,
        rating: 60,
        inventors: new Set(['Fayt', 'Maria', 'Nel', 'Mirage', 'Mayu'])
    },
    {
        item: 'Fruit Parfait',
        cost: 40,
        rating: 70,
        inventors: new Set(['Maria', 'Albel', 'Rigel'])
    },
    {
        item: 'Gelatinous Potion',
        cost: 25,
        rating: 60,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Giant King Crab',
        cost: 1234,
        rating: 99,
        inventors: new Set(['Peppita', 'Rigel'])
    },
    {
        item: 'Golden Curry',
        cost: 63,
        rating: 65,
        inventors: new Set(['Fayt', 'Sophia', 'Nel', 'Peppita', 'Roger', 'Damda Mooda', 'Mayu', 'Killer Chef'])
    },
    {
        item: 'Golden Natto',
        cost: 694,
        rating: 99,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Granadilla Juice',
        cost: 330,
        rating: 40,
        inventors: new Set(['Rigel', 'Killer Chef'])
    },
    {
        item: 'Gratin',
        cost: 50,
        rating: 30,
        inventors: new Set(['Fayt', 'Maria', 'Nel', 'Mirage', 'Mayu'])
    },
    {
        item: 'Grilled Tuna Head',
        cost: 40,
        rating: 60,
        inventors: new Set(['Cliff', 'Peppita', 'Roger', 'Adray', 'Damda Mooda'])
    },
    {
        item: 'Growling Fist Cider',
        cost: 500,
        rating: 95,
        inventors: new Set(['Damda Mooda', 'Mayu', 'Killer Chef'])
    },
    {
        item: 'Handmade Soba',
        cost: 694,
        rating: 99,
        inventors: new Set(['Cliff', 'Mirage', 'Damda Mooda'])
    },
    {
        item: 'Haute Chinese Soup',
        cost: 100,
        rating: 60,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Hogplum Juice',
        cost: 330,
        rating: 80,
        inventors: new Set(['Killer Chef'])
    },
    {
        item: 'Howling Fox Cider',
        cost: 390,
        rating: 75,
        inventors: new Set(['Damda Mooda', 'Mayu'])
    },
    {
        item: 'Hungry Harpy Cider',
        cost: 420,
        rating: 90,
        inventors: new Set(['Damda Mooda', 'Mayu', 'Killer Chef'])
    },
    {
        item: 'Itty-Bitty Steak',
        cost: 30,
        rating: 60,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Jackfruit Juice',
        cost: 500,
        rating: 80,
        inventors: new Set(['Rigel'])
    },
    {
        item: 'Joyful Bandit Cider',
        cost: 305,
        rating: 75,
        inventors: new Set(['Damda Mooda'])
    },
    {
        item: 'Jumbo Pot Stickers',
        cost: 280,
        rating: 40,
        inventors: new Set(['Cliff', 'Roger', 'Adray', 'Damda Mooda'])
    },
    {
        item: "Kid's Meal",
        cost: 30,
        rating: 60,
        inventors: new Set(['Mirage', 'Rigel'])
    },
    {
        item: 'Kimchi',
        cost: 40,
        rating: 50,
        inventors: new Set(['Fayt', 'Maria', 'Nel', 'Mirage', 'Mayu'])
    },
    {
        item: 'Kirschtorte',
        cost: 40,
        rating: 60,
        inventors: new Set(['Mirage', 'Rigel'])
    },
    {
        item: 'Lansium Juice',
        cost: 570,
        rating: 99,
        inventors: new Set(['Rigel', 'Killer Chef'])
    },
    {
        item: 'Leaping Titan Cider',
        cost: 330,
        rating: 80,
        inventors: new Set(['Killer Chef'])
    },
    {
        item: 'Legendary Otoro',
        cost: 434,
        rating: 99,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: "Lilien's Ultimate",
        cost: 694,
        rating: 99,
        inventors: new Set(['Peppita', 'Mirage', 'Rigel'])
    },
    {
        item: "Lord's Ozoni",
        cost: 410,
        rating: 80,
        inventors: new Set(['Cliff', 'Roger', 'Adray', 'Damda Mooda'])
    },
    {
        item: 'Luscious Gratin',
        cost: 694,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Luscious Oysters',
        cost: 694,
        rating: 99,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Magical Salad',
        cost: 1234,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Mammoth Meat',
        cost: 210,
        rating: 70,
        inventors: new Set(['Cliff', 'Maria', 'Albel', 'Peppita', 'Roger', 'Adray', 'Damda Mooda', 'Rigel'])
    },
    {
        item: 'Mangosteen Juice',
        cost: 570,
        rating: 100,
        inventors: new Set(['Rigel', 'Killer Chef'])
    },
    {
        item: 'Marbled Beef Sirloin',
        cost: 110,
        rating: 70,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Marbled Sirloin 1000',
        cost: 870,
        rating: 60,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {item: 'Mont Blanc', cost: 50, rating: 50, inventors: new Set(['Rigel'])},
    {
        item: 'Natto',
        cost: 40,
        rating: 20,
        inventors: new Set(['Fayt', 'Nel', 'Adray', 'Mayu'])
    },
    {
        item: 'Otoro',
        cost: 100,
        rating: 60,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Ozoni of Madness',
        cost: 434,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Pasta Salad',
        cost: 40,
        rating: 40,
        inventors: new Set(['Maria', 'Albel', 'Rigel'])
    },
    {
        item: 'Peach Dessert Soup',
        cost: 130,
        rating: 60,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Pear Tart',
        cost: 40,
        rating: 70,
        inventors: new Set(['Fayt', 'Nel', 'Mayu'])
    },
    {
        item: 'Perfect Duck',
        cost: 694,
        rating: 99,
        inventors: new Set(['Peppita', 'Rigel'])
    },
    {
        item: 'Petite Sirloin',
        cost: 30,
        rating: 5,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Pomegranate Juice',
        cost: 570,
        rating: 95,
        inventors: new Set(['Rigel', 'Killer Chef'])
    },
    {
        item: 'Prehistoric Meat',
        cost: 210,
        rating: 20,
        inventors: new Set(['Cliff', 'Roger', 'Adray', 'Damda Mooda'])
    },
    {
        item: 'Rambutan Juice',
        cost: 330,
        rating: 70,
        inventors: new Set(['Rigel'])
    },
    {item: 'Roast Duck', cost: 40, rating: 30, inventors: new Set(['Sophia'])},
    {
        item: 'Sachertorte',
        cost: 15,
        rating: 50,
        inventors: new Set(['Mirage', 'Rigel'])
    },
    {
        item: 'Sapodilla Juice',
        cost: 390,
        rating: 90,
        inventors: new Set(['Killer Chef'])
    },
    {
        item: 'Shining Pasta',
        cost: 694,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Silver Scepter Cider',
        cost: 330,
        rating: 70,
        inventors: new Set(['Cliff', 'Peppita', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Tasteless Stew',
        cost: 21,
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
            'Damda Mooda',
            'Mayu',
            'Rigel',
            'Killer Chef'
        ])
    },
    {
        item: 'Umai-Bo 13',
        cost: 5010,
        rating: 99,
        inventors: new Set(['Fayt', 'Nel', 'Mayu'])
    },
    {
        item: 'Umeboshi',
        cost: 15,
        rating: 20,
        inventors: new Set(['Nel', 'Mirage', 'Damda Mooda', 'Mayu'])
    },
    {
        item: 'Sirloin 140',
        cost: 50,
        rating: 80,
        inventors: new Set(['Maria', 'Rigel'])
    },
    {
        item: 'Tearful Risotto',
        cost: 694,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Umai-Bo 14',
        cost: 20,
        rating: 60,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Vanilla Ice Cream',
        cost: 15,
        rating: 20,
        inventors: new Set(['Maria', 'Albel', 'Rigel'])
    },
    {
        item: 'Slimy Gelatin',
        cost: 694,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Tough Steak',
        cost: 135,
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
            'Damda Mooda',
            'Mayu',
            'Rigel',
            'Killer Chef'
        ])
    },
    {item: 'Umai-Bo 2', cost: 20, rating: 30, inventors: new Set(['Rigel'])},
    {
        item: 'Watermelon Bar',
        cost: 40,
        rating: 70,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Soft-Shelled Turtle',
        cost: 40,
        rating: 70,
        inventors: new Set(['Cliff', 'Peppita', 'Roger', 'Adray', 'Damda Mooda'])
    },
    {
        item: 'Tuna Salad',
        cost: 15,
        rating: 25,
        inventors: new Set(['Fayt', 'Maria', 'Nel', 'Mirage', 'Mayu'])
    },
    {item: 'Umai-Bo 3', cost: 20, rating: 30, inventors: new Set(['Rigel'])},
    {
        item: 'Well-Aged Cheese',
        cost: 1234,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Spicy Cake',
        cost: 86,
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
            'Damda Mooda',
            'Mayu',
            'Rigel'
        ])
    },
    {
        item: 'Ultimate Ramen',
        cost: 649,
        rating: 99,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Umai-Bo 4',
        cost: 20,
        rating: 30,
        inventors: new Set(['Fayt', 'Nel', 'Mayu'])
    },
    {
        item: 'Winking Sage Cider',
        cost: 330,
        rating: 80,
        inventors: new Set(['Cliff', 'Nel', 'Roger', 'Rigel', 'Killer Chef'])
    },
    {
        item: 'Spicy Stew',
        cost: 2512,
        rating: 40,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {item: 'Umai-Bo 1', cost: 20, rating: 30, inventors: new Set(['Rigel'])},
    {
        item: 'Umai-Bo 5',
        cost: 20,
        rating: 30,
        inventors: new Set(['Fayt', 'Nel', 'Mayu'])
    },
    {
        item: 'Super-Spicy Stew',
        cost: 694,
        rating: 99,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Umai-Bo 10',
        cost: 20,
        rating: 60,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Umai-Bo 6',
        cost: 20,
        rating: 30,
        inventors: new Set(['Fayt', 'Nel', 'Mayu'])
    },
    {
        item: 'Super-Sweet Curry',
        cost: 31,
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
            'Damda Mooda',
            'Mayu',
            'Rigel',
            'Killer Chef'
        ])
    },
    {
        item: 'Umai-Bo 11',
        cost: 20,
        rating: 60,
        inventors: new Set(['Sophia', 'Killer Chef'])
    },
    {
        item: 'Umai-Bo 7',
        cost: 20,
        rating: 30,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Supreme Dorayaki Pie',
        cost: 694,
        rating: 99,
        inventors: new Set(['Cliff', 'Roger', 'Mirage', 'Damda Mooda'])
    },
    {item: 'Umai-Bo 12', cost: 20, rating: 60, inventors: new Set(['Rigel'])},
    {
        item: 'Umai-Bo 8',
        cost: 20,
        rating: 30,
        inventors: new Set(['Cliff', 'Roger', 'Damda Mooda'])
    },
    {
        item: 'Tamarind Juice',
        cost: 330,
        rating: 70,
        inventors: new Set(['Rigel'])
    },
    {
        item: 'Umai-Bo 9',
        cost: 20,
        rating: 60,
        inventors: new Set(['Sophia', 'Killer Chef'])
    }
];

export default cookItems;
