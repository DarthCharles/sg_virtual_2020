import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const UserInput = ({ updateText }) => {
  const [currentText, setCurrentText] = useState('');

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ paddingTop: 10 }}>
      <TextInput
        type="outlined"
        label="Your Text..."
        onChangeText={(text) => setCurrentText(text)}
      />
      <Button
        mode="outlined"
        onPress={() => {
          updateText(currentText);
        }}
        style={styles.button}>
        🧙 Transform
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
});

export default UserInput;
