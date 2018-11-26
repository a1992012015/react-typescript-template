import { Reducer, ReducersMapObject, combineReducers } from 'redux';
import { IReducers } from '../../interfaces/global';

/**
 * Create a reducer creator for potential additional reducer key/value pairs
 * @param reducers Reducers map
 * @return Reducer creator
 */
export default function createReducerCreator<S>(
  reducers: Partial<ReducersMapObject<S>>
) {
  return function createReducer(
    extraReducers: Partial<ReducersMapObject<S>> = {}
  ) {
    // tslint:disable-next-line:prefer-object-spread
    return combineReducers<S>(
      Object.assign(
        {},
        reducers as ReducersMapObject<S>,
        extraReducers as ReducersMapObject<S>
      )
    ) as Reducer<S & IReducers>; // tslint:disable-line:no-useless-intersection
  };
}
