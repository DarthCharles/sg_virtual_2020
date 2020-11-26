import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Snackbar } from 'react-native-paper';

import { UserInput } from './UserInput';
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
  body: {
    backgroundColor: 'white',
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
