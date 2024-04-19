import { createContext } from "react";
import {
  Action,
  initialMonsterState,
  initialMonsters,
} from "../../types/types";

export const monsterContext = createContext<{
  state: initialMonsterState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsters,
  dispatch: () => null,
});
