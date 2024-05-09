import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import GSTCalculator from './GSTCalculator';
import Crudoperations from './Crudoperations';
import Homescreen from './Homescreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Homescreen} />
        <Drawer.Screen name="GST% Calculation" component={GSTCalculator} />
        <Drawer.Screen name="Crud Operations" component={Crudoperations} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// --------------------- Task using Flatlist  --------------------------------
// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
// } from 'react-native';
// import axios from 'axios';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);

//   const getUsers = () => {
//     setIsLoading(true);
//     axios
//       .get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
//       .then(res => {
//         setUsers([...users, ...res.data.results]);
//         setIsLoading(false);
//       });
//   };

//   const renderItem = ({item}) => {
//     return (
//       <TouchableOpacity onPress={() => setSelectedUser(item)}>
//         <View style={styles.itemWrapperStyle}>
//           <Image
//             style={styles.itemImageStyle}
//             source={{uri: item.picture.large}}
//           />
//           <Text
//             style={
//               styles.txtNameStyle
//             }>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const renderModal = () => {
//     return (
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={selectedUser !== null}
//         onRequestClose={() => setSelectedUser(null)}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text
//               style={
//                 styles.modalTitle
//               }>{`${selectedUser?.name.title} ${selectedUser?.name.first} ${selectedUser?.name.last}`}</Text>
//             <Text style={styles.modalText}>Email: {selectedUser?.email}</Text>
//             <TouchableOpacity onPress={() => setSelectedUser(null)}>
//               <Text style={styles.modalClose}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     );
//   };

//   const loadMoreItem = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   useEffect(() => {
//     getUsers();
//   }, [currentPage]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={users}
//         renderItem={renderItem}
//         keyExtractor={item => item.email}
//         onEndReached={loadMoreItem}
//         onEndReachedThreshold={0.5}
//       />
//       {renderModal()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   itemWrapperStyle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//   },
//   itemImageStyle: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 16,
//   },
//   txtNameStyle: {
//     fontSize: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   modalClose: {
//     fontSize: 16,
//     color: 'blue',
//     textAlign: 'right',
//   },
// });

// export default App;

// -------------------------------------- Async Storage ----------------------------------------

// import React from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const App = () => {
//   const setData = async () => {
//     await AsyncStorage.setItem('Name', 'Muni Vinay');
//   };

//   const getData = async () => {
//     const getName = await AsyncStorage.getItem('Name');
//     console.log(getName);
//   };

//   const removeData = async () => {
//     await AsyncStorage.removeItem('Name');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Async Storage</Text>
//       <View style={styles.buttonContainer}>
//         <Button title="Set Data" onPress={setData} />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="Get Data" onPress={getData} />
//       </View>
//       <View style={styles.buttonContainer}>
//         <Button title="Rem Data" onPress={removeData} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 35,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 25,
//     marginBottom: 20,
//   },
//   buttonContainer: {
//     marginBottom: 10,
//     width: '70%',
//   },
// });

// export default App;
