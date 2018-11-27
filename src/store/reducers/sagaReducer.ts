import { INCREMENT, DECREMENT } from '../action-type/SagaType';
import { SagaTestAction } from '../actions/SagaAction';

const sagaTestInit: number = 0;

export default function counter(state: number = sagaTestInit, action: SagaTestAction): number {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

