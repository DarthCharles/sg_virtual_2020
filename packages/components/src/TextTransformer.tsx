import React from 'react';
import { Clipboard, StyleSheet, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';

import rebuildText from './rebuildText';

interface TextTransformerProps {
  displaySnackbar: () => void;
  label: string;
  sampleLowerCaseA: string;
  sampleUpperCaseA: string;
  targetText: string;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
  },
});

const copyToClipboard = async (text: string, displaySnackbar: () => void) => {
  await Clipboard.setString(text);
  displaySnackbar();
};

const getCodePointDelta = (sample: string, target: string) =>
  (sample.codePointAt(0) || 0) - (target.codePointAt(0) || 0);

const TextTransformer: React.FC<TextTransformerProps> = ({
  displaySnackbar,
  label,
  sampleLowerCaseA,
  sampleUpperCaseA,
  targetText,
}) => {
  // TODO useEffect
  const lowerCaseDelta = getCodePointDelta(sampleLowerCaseA, 'a');
  const upperCaseDelta = getCodePointDelta(sampleUpperCaseA, 'A');
  const resultText = rebuildText(
    targetText || 'Your Text...',
    lowerCaseDelta,
    upperCaseDelta,
  );

  return (
    <Card>
      <Card.Title title={label} titleStyle={styles.title} />
      <Card.Content>
        <Text>{resultText}</Text>
      </Card.Content>
      <Card.Actions>
        <Button
          mode="outlined"
          onPress={() => {
            copyToClipboard(resultText, displaySnackbar);
          }}>
          📋 Copy to Clipboard
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default React.memo(TextTransformer);
