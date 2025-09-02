
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';


const BookFormScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setIsbn] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [genre, setGenre] = useState('');
    const [dateAdded, setDateAdded] = useState('');


    const handleSubmit = () => {
        navigation.navigate('Confirmation', {
            title,
            author,
            isbn,
            published_date: publishedDate,
            genre,
            date_added: dateAdded,
        });
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Add a Book</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Author"
                value={author}
                onChangeText={setAuthor}
            />
            <TextInput
                style={styles.input}
                placeholder="ISBN"
                value={isbn}
                onChangeText={setIsbn}
            />
            <TextInput
                style={styles.input}
                placeholder="Published Date"
                value={publishedDate}
                onChangeText={setPublishedDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Genre"
                value={genre}
                onChangeText={setGenre}
            />
            <TextInput
                style={styles.input}
                placeholder="Date Added"
                value={dateAdded}
                onChangeText={setDateAdded}
            />
                <Button title="Submit" onPress={() => navigation.navigate('Confirmation', {
                    title,
                    author,
                    isbn,
                    published_date: publishedDate,
                    genre,
                    date_added: dateAdded,
                    })} />
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        minHeight: '100vh',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
    },
});


export default BookFormScreen