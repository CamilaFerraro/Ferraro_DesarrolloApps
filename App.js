import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Pressable} from 'react-native';
import Modal from './components/Modal';

export default function App() {

  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});
  const [savedItem, setSavedItem] = useState({});

  const onHandleChange=(t)=>{
    setTextItem(t);
  };

  const addItem=()=>{
    setList((currentState)=>[
      ...currentState,
      {id: Math.random().toString(), value: textItem},
    ]);
    setTextItem("");
  };
 
  const selectedItem = (id) => {
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };
  
  const deleteItem = () => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const saveItem = () => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== savedItem.id)
    );
    setSavedItem({});
    setModalVisible(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=> selectedItem (item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Shopping List 🛒</Text>
      <View style = {styles.inputcontainer}>
        <TextInput 
        placeholder="new item"
        placeholderTextColor="white"
        style={styles.inputStyle} 
        value={textItem} 
        onChangeText={onHandleChange}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} actionSaveItem={saveItem} actionCompleted={savedItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8000FF',
    alignItems: "center",
    paddingTop: 100,
  },
  inputcontainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputStyle: {
    width: 250,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: "purple",
    height: 35,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

