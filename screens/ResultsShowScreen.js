import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);
    const id = route.params?.id;
    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){
        return null;
    }
  
    return (
        <View style={styles.container}>
            <Text style={{ fontSize:22, fontWeight:'bold'}}>{result.name}</Text>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                return <Image style={styles.image} 
                source={{ uri: item }} 
                /> }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        
        justifyContent:'center',
    },
    image:{
        
        margin:20,
        height:200,
        width:300
    }
})
export default ResultsShowScreen

