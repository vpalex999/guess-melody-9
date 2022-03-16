import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getStep = (state: State): number => state[NameSpace.game].step;
export const getMistakeCount = (state: State): number => state[NameSpace.game].mistakes;
