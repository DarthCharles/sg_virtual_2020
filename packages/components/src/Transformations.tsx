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
    {transformations.map((transformation, index) => (
      <React.Fragment key={`fragment-${index}`}>
        <TextTransformer
          key={`transformation-${index}`}
          displaySnackbar={setVisibleSnackbar}
          label={transformation.label}
          sampleLowerCaseA={transformation.sampleLowerCaseA}
          sampleUpperCaseA={transformation.sampleUpperCaseA}
          targetText={targetText}
        />
        <Divider key={`divider-${index}`} style={styles.divider} />
      </React.Fragment>
    ))}
  </View>
);

const styles = StyleSheet.create({
  divider: {
    marginBottom: 5,
  },
});

export { Transformations };
