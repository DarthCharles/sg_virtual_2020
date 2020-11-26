const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// our packages that will now be included in the CRA build step
const appIncludes = [
  resolveApp('src'),
  resolveApp('../components/src'),
  resolveApp('../../node_modules/react-native-vector-icons'),
];

module.exports = function override(config, env) {
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => plugin.constructor.name !== 'ModuleScopePlugin',
  );

  config.module.rules[0].include = appIncludes;
  config.module.rules[1].oneOf[2].include = appIncludes;
  config.module.rules[1].oneOf[2].options.plugins.push(
    require.resolve('babel-plugin-react-native-web'),
  );

  config.plugins.push(
    new webpack.DefinePlugin({ __DEV__: env !== 'production' }),
  );
  (() => {
    const filePath = require.resolve(
      'react-native-vector-icons/lib/tab-bar-item-ios.js',
    );
    const code = fs.readFileSync(filePath).toString();
    fs.writeFileSync(
      filePath,
      code.replace(
        "import { TabBarIOS } from './react-native';",
        'const TabBarIOS = { Item: () => null };',
      ),
    );
  })();
  return config;
};
