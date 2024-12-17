import {Profession} from '@/types';

const names = {
    PARTY: ['Fayt', 'Sophia', 'Cliff', 'Nel', 'Roger', 'Maria', 'Albel', 'Peppita', 'Mirage', 'Adray'],
    [Profession.ALCH]: ['Eliza', 'Mackwell', 'Misty Lear', 'Ansala'],
    [Profession.CMPD]: ['Gossam', 'Milenya', 'Puffy', 'Louise the Diviner'],
    [Profession.COOK]: ['Damda Mooda', 'Mayu', 'Rigel', 'Killer Chef'],
    [Profession.CRFT]: ['Stanice', 'Balbados', 'Aqua & Evia', 'Chilico'],
    [Profession.ENG]: ['Dejison', 'Vanilla', 'Meryl', 'Izak'],
    [Profession.SMTH]: ['Grats', 'Lias', 'Gusto', 'Boyd'],
    [Profession.WRIT]: ['Cornelius', 'Mishell', 'Count Noppen', 'Osman the Sage']
} as const;

// we want these names as const, as we will be using them as ids
const inventorNames = {
    [Profession.ALCH]: [...names.PARTY, ...names[Profession.ALCH]],
    [Profession.CMPD]: [...names.PARTY, ...names[Profession.CMPD]],
    [Profession.COOK]: [...names.PARTY, ...names[Profession.COOK]],
    [Profession.CRFT]: [...names.PARTY, ...names[Profession.CRFT]],
    [Profession.ENG]: [...names.PARTY, ...names[Profession.ENG]],
    [Profession.SMTH]: [...names.PARTY, ...names[Profession.SMTH]],
    [Profession.WRIT]: [...names.PARTY, ...names[Profession.WRIT]]
} as const satisfies Record<Profession, readonly string[]>;

export default inventorNames;
