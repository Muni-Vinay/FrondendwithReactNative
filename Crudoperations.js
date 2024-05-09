import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import tw from 'twrnc';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [userList, setUserList] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCreate = () => {
    if (isUpdateMode) {
      const updatedList = [...userList];
      updatedList[selectedIndex] = inputText;
      setUserList(updatedList);
      setInputText('');
      setIsUpdateMode(false);
    } else {
      setUserList([...userList, inputText]);
      setInputText('');
    }
  };

  const handleUpdate = index => {
    setSelectedIndex(index);
    setInputText(userList[index]);
    setIsUpdateMode(true);
  };

  const handleDelete = index => {
    const updatedList = [...userList];
    updatedList.splice(index, 1);
    setUserList(updatedList);
  };

  return (
    <View style={tw`flex-1 bg-gray-100 px-4 pt-10`}>
      <Text style={tw`font-bold text-2xl text-center mb-4`}>
        Crud Operations
      </Text>
      <View style={tw`flex-row items-center mb-4`}>
        <TextInput
          style={tw`flex-1 h-11 px-3 bg-white rounded border border-gray-400 mr-2`}
          placeholder="Enter your name"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 px-4 py-2 rounded h-11`}
          onPress={handleCreate}>
          <Text style={tw`text-white font-bold text-lg`}>
            {isUpdateMode ? 'Update' : 'Create'}
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {userList.map((userData, index) => (
          <View
            key={index}
            style={tw`flex-row items-center bg-white rounded p-2 my-2`}>
            <Text style={tw`flex-1 mr-2`}>{userData}</Text>
            <TouchableOpacity
              style={tw`bg-green-500 px-4 py-2 rounded mr-2`}
              onPress={() => handleUpdate(index)}>
              <Text style={tw`text-white font-bold text-lg`}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-red-500 px-4 py-2 rounded`}
              onPress={() => handleDelete(index)}>
              <Text style={tw`text-white font-bold text-lg`}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
