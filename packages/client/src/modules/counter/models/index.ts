import { AddCounter } from './index';
import { SubscribeToMoreOptions } from 'apollo-client';

type SubscribeToMore = (option: SubscribeToMoreOptions) => void;
type AddCounterFN = (amount: number) => any;

export interface Counter {
  counter: number;
}

interface Amount {
  amount: number;
}

interface Data {
  data: CounterUpdated;
}

interface CounterUpdated {
  counterUpdated: Amount;
}

export interface SubscriptionData {
  subscriptionData: Data;
}

export interface CounterResponse {
  counter: Counter;
  loading: boolean;
  subscribeToMore: SubscribeToMore;
}

export interface CounterState {
  counter: number;
}

export interface CounterStateResponse {
  counterState: CounterState;
}

export interface ReduxCount {
  reduxCount: number;
}

export interface State {
  counter: ReduxCount;
}

export interface CounterProps {
  loading: boolean;
  subscribeToMore: SubscribeToMore;
  counter: Amount;
  reduxCount: number;
  counterState: number;
  addCounter: AddCounterFN;
  addCounterState: AddCounterFN;
  onReduxIncrement: AddCounterFN;
}

export interface AddCounter {
  addCounter: AddCounterFN;
}

export interface AddCounterState {
  addCounterState: AddCounterFN;
}
