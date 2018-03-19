import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../../common/components';

import { Counter, CounterProps } from '../models';

const CounterView = ({
  loading,
  counter,
  addCounter,
  reduxCount,
  onReduxIncrement,
  counterState,
  addCounterState
}: CounterProps) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.element}>
          <Text style={styles.box}>
            Current counter, is {counter.amount}. This is being stored server-side in the database and using Apollo
            subscription for real-time updates.
          </Text>
        </View>
        <Button onPress={addCounter(1)}>Click to increase counter</Button>
        <View style={styles.element}>
          <Text style={styles.box}>
            Current reduxCount, is {reduxCount}. This is being stored client-side with Redux.
          </Text>
        </View>
        <Button onPress={onReduxIncrement(1)}>Click to increase reduxCount</Button>
        <View style={styles.element}>
          <Text style={styles.box}>
            Current apolloLinkState, is {counterState}. This is being stored client-side with Apollo Link State.
          </Text>
        </View>
        <Button onPress={addCounterState(1)}>Click to increase apolloLinkStateCount</Button>
      </View>
    );
  }
};

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  element: {
    paddingTop: 30
  },
  box: {
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5
  }
});

export default CounterView;
