/*import React from 'react';

import { View, SectionList, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
        title:"Vowels",  headerColor: "#f9c2ff"},
    {data:[
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
        ],
        title:"Consonants", headerColor: "#c2e9fb" }
];

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
    },
    textStyle: {
        fontsize: 15,
        margin: 10,
        textAlign: 'left',
    },
    headerText: {
        fontsize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    container: {
        paddingHorizontal: 50,
    },

    sectionHeader: {
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 40,
        borderColor: "#000000",
        borderWidth: 10,
    }
});
const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};
const App = () => {
    return (
        <View>
            <SectionList style={styles.container} sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title, headerColor}})=>(
                             <View style={[styles.sectionHeader, { backgroundColor: headerColor }]}>
                                 <Text style={styles.headerText}>{title}</Text>
                             </View>
                         )}/>
        </View>
    );
};
export default App;*/
