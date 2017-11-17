import {INCREMENT, DECREMENT} from './type';

export const counterIncrement = () => ({type: INCREMENT});
export const counterDecrement = () => ({type: DECREMENT});