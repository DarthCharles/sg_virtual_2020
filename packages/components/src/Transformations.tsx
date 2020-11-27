import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
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
  <View style={styles.container}>
    {transformations.map(
      ({ label, sampleLowerCaseA, sampleUpperCaseA }, index) => (
        <React.Fragment key={`${label}_${index}`}>
          <TextTransformer
            displaySnackbar={setVisibleSnackbar}
            label={label}
            sampleLowerCaseA={sampleLowerCaseA}
            sampleUpperCaseA={sampleUpperCaseA}
            targetText={targetText}
          />
          <Divider style={styles.divider} />
        </React.Fragment>
      ),
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {},
      android: {},
      default: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
    }),
  },
  divider: {
    marginBottom: 5,
  },
});

export { Transformations };
