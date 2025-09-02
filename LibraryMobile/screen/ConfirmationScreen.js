import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';


const ConfirmationScreen = ({ route, navigation }) => {
    const { title, author, isbn, published_date, genre, date_added } = route.params || {};
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Book Confirmation</Text>
            <Text style={styles.label}>Title: <Text style={styles.value}>{title}</Text></Text>
            <Text style={styles.label}>Author: <Text style={styles.value}>{author}</Text></Text>
            <Text style={styles.label}>ISBN: <Text style={styles.value}>{isbn}</Text></Text>
            <Text style={styles.label}>Published Date: <Text style={styles.value}>{published_date}</Text></Text>
            <Text style={styles.label}>Genre: <Text style={styles.value}>{genre}</Text></Text>
            <Text style={styles.label}>Date Added: <Text style={styles.value}>{date_added}</Text></Text>
            <Button title="Confirm" onPress={() => navigation.navigate('BookForm')} />
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'flex-start',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    value: {
        fontWeight: 'normal',
    },
});


export default ConfirmationScreen;
