import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';

const openTwitter = (handle: string) =>
  Linking.openURL(
    `https://twitter.com/intent/tweet?text=%40${handle}%20re%3A%20Monorepo%20%40RevistaSG%20-%20`,
  );

export const Footer = () => (
  <View style={styles.footerContainer}>
    <Text style={styles.footerParagraph}>Feedback? Reach out!</Text>
    <TouchableOpacity onPress={() => openTwitter('xnt')}>
      <Text style={styles.tweet}>🐦 Tweet: @xnt</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => openTwitter('carlosh191')}>
      <Text style={styles.tweet}>🐦 Tweet: @carlosh191</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  footerContainer: {
    marginHorizontal: 24,
    marginVertical: 10,
  },
  footerParagraph: {
    fontSize: 16,
    textAlign: 'left',
  },
  tweet: {
    color: 'navy',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textShadowOffset: { width: 0.5, height: 0 },
    textShadowRadius: 1,
    textShadowColor: '#333',
  },
});
