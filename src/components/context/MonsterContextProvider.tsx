import { useReducer } from "react";
import { initialMonsters } from "../../types/types";
import { monsterContext } from "./MonsterContext";
import { MonsterReducer } from "./MonsterReducer";

type MonsterContextProviderProps = {
  children: React.ReactNode;
};

const MonsterContextProvider = ({ children }: MonsterContextProviderProps) => {
  const [state, dispatch] = useReducer(MonsterReducer, initialMonsters);
  return (
    <monsterContext.Provider value={{ state, dispatch }}>
      {children}
    </monsterContext.Provider>
  );
};

export default MonsterContextProvider;
