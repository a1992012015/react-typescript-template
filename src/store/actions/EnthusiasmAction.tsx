import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../action-type/EnthusiasmType';

export interface IncrementEnthusiasm {
  type: INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
  type: DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | IDecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): IDecrementEnthusiasm {
  return {
    type: DECREMENT_ENTHUSIASM
  };
}
