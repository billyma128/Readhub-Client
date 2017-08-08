import React from 'react';
import { Router } from 'react-native-router-flux';
import AppRoutes from './navigation/index';
import { AppStyles } from './theme/index';

export default function ReadhubClient() {
  return (
    <Router scenes={AppRoutes} style={AppStyles.appContainer} />
  );
}

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import { Router } from 'react-native-router-flux';
// import AppRoutes from './navigation/index';
// import { AppStyles } from './theme/index';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// export default function ReadhubClient() {
//   console.log(Router);
//   console.log(AppRoutes);
//   console.log(AppStyles);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>
//         {JSON.stringify(Router.toString())}
//       </Text>
//       <Text style={styles.instructions}>
//         To get started, edit index.android.js
//       </Text>
//       <Text style={styles.instructions}>
//         Double tap R on your keyboard to reload,{'\n'}
//         Shake or press menu button for dev menu
//       </Text>
//     </View>
//   );
// }
