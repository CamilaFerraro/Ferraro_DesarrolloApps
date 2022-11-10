import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Pressable} from 'react-native';
import Modal from './components/Modal';

export default function App() {

  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const onHandleChange=(t)=>{
    setTextItem(t);
  };

  const addItem=()=>{
    setList(currentState=>[
      ...currentState,
      {id: Math.random().toString(), value: textItem},
    ]);
    setTextItem("");
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={()=> selectedItem (item.id)}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );

  const deleteItem=()=>{
    setList(currentState=> currentState.filter(item => item.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(false)
  }

  const selectedItem = (id) => {
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };

  /*{const deleteItem = (id) =>{
    setList((currentState)=>
    currentState.filter((item)=> item.id!== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);

  };*/



  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Shopping List 🛒</Text>
      <View style = {styles.inputcontainer}>
        <TextInput 
        placeholder="new item"
        placeholderTextColor="white"
        value={textItem} 
        style={styles.inputStyle} 
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
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8000FF',
    padding: 30,
    marginTop: 50,
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
  items: {
    marginTop: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
});

