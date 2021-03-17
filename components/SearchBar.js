import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.container}>
            <Icon name="search" type="Ionicons" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize='none'
                autoCorrect= {false}
                style={styles.input} 
                placeholder="Search!"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:"#F0EEEE",
        borderRadius:5,
        height:50,
        margin:15,

    },
    input:{
        flex:1,
        fontSize:18, 
        
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
       
    }
})

export default SearchBar
