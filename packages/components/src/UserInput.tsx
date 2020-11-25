import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

interface UserInputProps {
  updateText: (text: string) => void;
}

export const UserInput: React.FC<UserInputProps> = ({ updateText }) => {
  const [currentText, setCurrentText] = useState('');

  return (
    <View style={{ paddingTop: 10 }}>
      <TextInput
        label={'Your Text...'}
        onChangeText={(text: string) => setCurrentText(text)}
      />
      <Button
        mode={'outlined'}
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
