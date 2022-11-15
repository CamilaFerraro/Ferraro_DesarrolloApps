import { StyleSheet, Text, View, Pressable, Modal as NewModal } from 'react-native'

const Modal = (props) => {

const {isVisible, actionDeleteItem, actionSaveItem, actionCompleted} = props;

  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.centeredView}>
            <View style={{backgroundColor:"white"}}>
                <Text>Que deseas hacer con el elemento?</Text>
                <Pressable onPress={()=> actionSaveItem()} style={{backgroundColor: "pink"}}>
                    <Text>Guardar</Text>
                </Pressable>
                <Pressable onPress={()=> actionDeleteItem()} style={{backgroundColor: "pink"}}>
                    <Text>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
});