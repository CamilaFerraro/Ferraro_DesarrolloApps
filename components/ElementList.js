import { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const ElementList = ({item, selectedItem, deleteItem}) => {

    const [savedStatus, setSavedStatus] = useState("Save?");
    const [eraseStatus, setEraseStatus] = useState("Erase");


    return(
        <View style={styles.flatlistOuterContainer}>
        <View style={styles.flatlistInnerContainer}>
        <View style={styles.flatlistElementsContainer}>
           <TouchableOpacity onPress={()=> selectedItem(item.id)}>
              <Text style={styles.flatlistStyle}>{item.value}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {setSavedStatus("Saved! ✅")}}>
                <Text>{savedStatus}</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => {setEraseStatus(deleteItem)}}>
                <Text>{eraseStatus}</Text>
           </TouchableOpacity>
          </View>
        </View>
      </View>
    )
}

export default ElementList

const styles = StyleSheet.create({
    flatlistStyle:{
        fontWeight:"bold",
        fontSize:15,
        margin:5
      },
      flatlistInnerContainer:{
        borderWidth: 2,
        borderRadius: 5,
        width:300
      },
      flatlistOuterContainer:{
        display:"flex",
        alignItems:"center",
        margin:2
      },
      flatlistElementsContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:5
      }

  })