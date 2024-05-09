import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import tw from 'twrnc';

const App = () => {
  const [taxType, setTaxType] = useState('Exclusive');
  const [amount, setAmount] = useState('');
  const [gst, setGst] = useState('');
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    if (amount && gst) {
      let totalAmount = parseFloat(amount);
      let gstAmount = parseFloat(gst);
      if (taxType === 'Exclusive') {
        totalAmount += (totalAmount * gstAmount) / 100;
      } else if (taxType === 'Inclusive') {
        totalAmount -= (totalAmount * gstAmount) / (100 + gstAmount);
      }
      setTotal(totalAmount);
    }
  };

  useEffect(() => {
    calculateTotal();
  });

  return (
    <View
      style={[
        tw`flex-1 bg-gray-100 p-4 items-center justify-center`,
        {marginTop: 20},
      ]}>
      <Text style={tw`text-lg font-bold text-black`}>Free GST Calculator</Text>
      <View
        style={tw`bg-white rounded-lg border border-gray-300 mx-4 p-4 w-full`}>
        <Text style={tw`font-bold text-black`}>Amount</Text>
        <TextInput
          style={tw`h-10 border border-gray-300 px-2`}
          placeholder="Enter amount"
          onChangeText={text => setAmount(text)}
        />
        <Text style={tw`font-bold text-black mt-4`}>GST %</Text>
        <TextInput
          style={tw`h-10 border border-gray-300 px-2`}
          placeholder="Enter GST"
          onChangeText={text => setGst(text)}
        />
        <Text style={tw`font-bold text-black mt-4`}>Tax</Text>
        <View style={tw`border border-gray-300 mb-4`}>
          <Picker
            selectedValue={taxType}
            onValueChange={itemValue => setTaxType(itemValue)}
            style={tw`text-center`}>
            <Picker.Item label="Exclusive" value="Exclusive" />
            <Picker.Item label="Inclusive" value="Inclusive" />
          </Picker>
        </View>
        <View style={tw`flex-row justify-between mt-4`}>
          <View style={tw`flex-1 items-center`}>
            <Text style={tw`font-bold text-black`}>Amount:</Text>
            <Text>{amount}</Text>
          </View>
          <View style={tw`flex-1 items-center`}>
            <Text style={tw`font-bold text-black`}>GST %:</Text>
            <Text>{gst}</Text>
          </View>
          <View style={tw`flex-1 items-center`}>
            <Text style={tw`font-bold text-black`}>Total:</Text>
            <Text>{total.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
