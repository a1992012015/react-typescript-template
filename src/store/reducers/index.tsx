import { Reducer, ReducersMapObject } from 'redux';
import { persistCombineReducers, PersistConfig } from 'redux-persist';
import { IReducers } from '../../interfaces/global';

/**
 * Create a reducer creator for potential additional reducer key/value pairs
 * @param config
 * @param reducers Reducers map
 * @return Reducer creator
 */
export default function createReducerCreator<S>(config: PersistConfig, reducers: Partial<ReducersMapObject<S>>) {
  return function (extraReducers: Partial<ReducersMapObject<S>> = {}) {
    // tslint:disable-next-line:prefer-object-spread
    return persistCombineReducers<S>(
      config,
      Object.assign(
        {},
        reducers as ReducersMapObject<S>,
        extraReducers as ReducersMapObject<S>
      )
    ) as Reducer<S & IReducers>; // tslint:disable-line:no-useless-intersection
  };
}
