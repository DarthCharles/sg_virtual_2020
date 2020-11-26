import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';

import TextTransformer from './TextTransformer';
import transformations from './transformationCatalog';

interface TransformationsProps {
  setVisibleSnackbar: () => void;
  targetText: string;
}

const Transformations: React.FC<TransformationsProps> = ({
  setVisibleSnackbar,
  targetText,
}) => (
  <View>
    {transformations.map((transformation) => (
      <>
        <TextTransformer
          displaySnackbar={setVisibleSnackbar}
          label={transformation.label}
          sampleLowerCaseA={transformation.sampleLowerCaseA}
          sampleUpperCaseA={transformation.sampleUpperCaseA}
          targetText={targetText}
        />
        <Divider style={styles.divider} />
      </>
    ))}
  </View>
);

const styles = StyleSheet.create({
  divider: {
    marginBottom: 5,
  },
});

export { Transformations };
