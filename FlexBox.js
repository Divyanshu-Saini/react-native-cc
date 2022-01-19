import React from 'react';
import { Text, View } from 'react-native';

/**
 *
 * flex -> shrink or grow items
 * dlexDirection -> order of item placement
 * justifycontent -> main axis based on direction
 * alignitem -> placment on crossaxis
 *
 */
export default function FlexBox() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: 'column-reverse',
        width: '80%',
        height: 300,
        justifyContent: 'space-around',
        alignItems: 'stretch',
      }}
    >
      <View
        style={{
          backgroundColor: 'red',
          // width: 100,
          // height: 100,
          flex: 1, //how much space will item taken in flex container
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          // width: 100,
          // height: 100,
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          // width: 100,
          // height: 100,
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
