import monstersJSON from "../data/monsters.json";
import { ACTIONS } from "../components/context/MonsterReducer";

//Strukturen för ett monster, ett objekt
export type OneMonster = {
  id: string;
  avatar?: string;
  firstName: string;
  lastName: string;
  class: string;
  program: string;
  description: string[];
  appearance: Appearance;
  diet: string;
  interests: string[];
  courses: string[];
  grades: Grades[];
  hometown: string;
};

export type Ceo = {
    id: string;
    avatar: string;
    firstName:    string;
    middleName:   string;
    lastName:     string;
    title:        string;
    company:      string;
    description:  string;
    appearance:   Appearance;
    achievements: string[];
    interests:    string[];
    hometown:     string;
}

export type Appearance = {
  numberOfEyes: number;
  numberOfTentacles: number;
  color: string;
  skinOrFurType: string;
  hasHorns: boolean;
};

export type Grades = {
  course: string;
  grade: string;
};

//Strukturen för alla monster, ett objekt av en Monsters array av monster-objekt
export type initialMonsterState = {
  monsters: OneMonster[];
  ceo: Ceo[],
};

//InitialaMonsters
export const initialMonsters: initialMonsterState = monstersJSON;

//typen Action till vår reducer
export type Action =
  | { type: typeof ACTIONS.ADD; payload: string }
  | { type: typeof ACTIONS.REMOVE; payload: string };
