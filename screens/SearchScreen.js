import React, { useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
const SearchScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');
   const [searchApi, errorMessage, results] = useResults();

//    console.log(results);
   const filterResultsByPrice = (price) => {
       return results.filter(result =>{
           return result.price === price;
       });
   };
    return (
        <View style={styles.screen}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)} 
            />
            { errorMessage ? <Text>{errorMessage}</Text> : null } 
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
            <ResultsList 
                title="Cost Effective"
                results={filterResultsByPrice('$')} 
                navigation={navigation}    />
            <ResultsList 
                title="Bit Pricier" 
                results={filterResultsByPrice("$$")}
                navigation={navigation}   />
            <ResultsList 
                title="Big Spender"
                results={filterResultsByPrice("$$$")}
                navigation={navigation}   />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'white'
    }
})
export default SearchScreen
