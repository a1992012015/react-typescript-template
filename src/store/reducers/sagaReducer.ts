import { INCREMENT, DECREMENT } from '../action-type/SagaType';
import { SagaAction } from '../actions/SagaAction';

const sagaInit: number = 0;

export default function SagaReducer(state: number = sagaInit, action: SagaAction): number {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

