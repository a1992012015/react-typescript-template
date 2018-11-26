import { IEnthusiasm } from '../../interfaces/global';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../action-type/Enthusiasm';
import { EnthusiasmAction } from '../actions/Enthusiasm';

const enthusiasmInit: IEnthusiasm = {
  enthusiasmLevel: 1,
  name: 'typeScript'
};

export default function Enthusiasm(state: IEnthusiasm = enthusiasmInit, action: EnthusiasmAction): IEnthusiasm {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
  }
  return state;
}
