import inventorNames from '@/data/inventorNames';

export enum Profession {
    ALCH = 'ALCH',
    CMPD = 'CMPD',
    COOK = 'COOK',
    CRFT = 'CRFT',
    ENG = 'ENG',
    SMTH = 'SMTH',
    WRIT = 'WRIT'
}

export interface Inventor<T extends Profession> {
    inventor: (typeof inventorNames)[T][number];
    skill: number;
    time: number;
    cost: number;
}

export interface Item<T extends Profession> {
    item: string;
    cost: number;
    rating: number;
    inventors: Set<(typeof inventorNames)[T][number]>;
}

export interface LocalState {
    selectedInventors?: string[];
    selectedItem?: string;
    hasBoostItem?: boolean;
}
