/*import React from 'react';
import { View, SectionList, TouchableOpacity, Text, StyleSheet, Image, Button } from 'react-native';


const datasource = [
    {
        title: "Water",
        icon: "💧",
        color: "#a2d2ff",
        data: [
            { key: 'Squirtle', cardNumber: 21 },
            { key: 'Poliwag', cardNumber: 72 },
        ],
    },
    {
        title: "Fire",
        icon: "🔥",
        color: "#ffadad",
        data: [
            { key: 'Charmander', cardNumber: 4 },
            { key: 'Vulpix', cardNumber: 37 },
        ],
    },
];


const getCardImageUrl = (cardNumber) => {
    return `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${cardNumber}-2x.png`;
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        flex: 1,
    },
    addButton: {
        marginBottom: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
    },
    sectionHeaderText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 5,

    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    pokemonName: {
        flex: 1,
        fontSize: 20,
    },
    pokemonImage: {
        width: 100,
        height: 150,
    },
});

const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => alert(`${item.key} clicked`)}>
        <Text style={styles.pokemonName}>{item.key}</Text>
        <Image source={{ uri: getCardImageUrl(item.cardNumber) }} style={styles.pokemonImage} />
    </TouchableOpacity>
);

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.addButton}>
                <Button title="Add Pokémon" onPress={() => alert("Add Pokémon pressed")} />
            </View>

            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, icon, color } }) => (
                    <View style={[styles.sectionHeader, { backgroundColor: color }]}>
                        <Text style={styles.sectionHeaderText}>{icon} {title}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => item.key + index}
            />
        </View>
    );
};

export default App;

*/
