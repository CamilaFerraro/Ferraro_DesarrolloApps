import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, Modal, Pressable} from 'react-native';

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
  }

  const selectedItem=(id)=>{
    setItemSelected(list.filter(item=>item.id===id)[0])
    setModalVisible(true)
  }

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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        >
          <View style={styles.centeredView}>
            <View style={{backgroundColor:"white"}}>
              <Text>Quieres eliminar este elemento?</Text>
              <Pressable onPress={()=> deleteItem()} style={{backgroundColor: "purple"}}>
                <Text style={styles.textStyle}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    marginTop: 50,
  },
  addItem: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 200,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  items: {
    marginTop: 50,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'purple',
  },
});

