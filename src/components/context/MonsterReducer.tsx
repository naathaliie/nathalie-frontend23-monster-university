import { Action, initialMonsterState } from "../../types/types";

export const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
};

export const MonsterReducer = (state: initialMonsterState, action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return state;

    case ACTIONS.REMOVE:
      return state;
    default:
      return state;
  }
};
