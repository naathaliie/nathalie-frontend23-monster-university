import MonstersJSON from "../data/monsters.json";
import { ACTIONS } from "../components/context/MonsterReducer";

 //Strukturen för ett monster, ett objekt
 export type OneMonster = {
    id: string;
    name: string;
    age: number;
    species: string;
    abilities: string[];
    isEvil: boolean;
    avatar: string;
};

//Strukturen för alla monster, ett objekt av en Monsters array av monster-objekt
export type initialMonsterState = {
    monsters: OneMonster[],
};

//InitialaMonsters
export const initialMonsters: initialMonsterState = MonstersJSON;




//typen Action till vår reducer
export type Action = 
|{type: typeof ACTIONS.ADD, payload:string}
|{type: typeof ACTIONS.REMOVE, payload:string}
;
 