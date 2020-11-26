import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Snackbar } from 'react-native-paper';

import { UserInput } from './UserInput';
// @ts-ignore
import { Transformations } from './Transformations';
import { Appbar } from 'react-native-paper';

import { Footer } from './Footer';

export function App() {
  const [text, setText] = React.useState('');
  const [visibleSnackbar, setVisibleSnackbar] = React.useState(false);

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Appbar.Header>
            <Appbar.Content title="Code sharing using Monorepo" />
          </Appbar.Header>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Code sharing using Monorepo
              </Text>
              <Text style={styles.sectionDescription}>
                Edit{' '}
                <Text style={styles.highlight}>
                  packages/components/App.tsx
                </Text>{' '}
                to change this screen and then come back to see your edits (in
                the phone or the browser).
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Web support via react-native-web
              </Text>
              <Text style={styles.sectionDescription}>
                Run{' '}
                <Text style={styles.highlight}>yarn workspace web start</Text>{' '}
                to open this app in the browser.
              </Text>
              <Text style={styles.sectionDescription}>
                It will share the same code from mobile, unless you create
                platform-specific files using the{' '}
                <Text style={styles.highlight}>.web.tsx</Text> extension (also
                supports <Text style={styles.highlight}>.android</Text>,{' '}
                <Text style={styles.highlight}>.ios</Text>,{' '}
                <Text style={styles.highlight}>.native</Text>, etc).
              </Text>
            </View>
            <UserInput updateText={setText} />
            <Transformations
              setVisibleSnackbar={() => {
                setVisibleSnackbar(true);
              }}
              targetText={text}
            />
            <Snackbar
              duration={2000}
              visible={visibleSnackbar}
              onDismiss={() => setVisibleSnackbar(false)}
              action={{
                label: 'OK',
                onPress: () => {
                  setVisibleSnackbar(false);
                },
              }}>
              Text has been copied to clipboard!
            </Snackbar>
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
