import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Resultscreen extends React.Component {
  render() {
    return <View style={styles.container}>result</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    padding: 8,
  },
 
});
