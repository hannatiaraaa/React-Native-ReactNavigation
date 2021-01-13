import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Home(props) {
  console.log(props);
  const actionMoveToAbout = () => {
    props.navigation.navigate('About');
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={actionMoveToAbout}>
        <Text>Move To About</Text>
      </TouchableOpacity>
    </View>
  );
}
