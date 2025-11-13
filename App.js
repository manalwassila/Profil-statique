// App.js
import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [nom, setNom] = useState('Manal');           // Nom modifiable
  const [message, setMessage] = useState('Salut !'); // Message modifiable

  // Fonction pour afficher l'alerte
  const handlePress = () => {
    Alert.alert('Bonjour !', 'Vous avez appuyé sur le bouton 😊');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=15' }} // Image de profil
        style={styles.avatar}
      />

      <Text style={styles.title}>Profil utilisateur</Text>

      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
        editable={true} // Champ modifiable activé
      />

      <Text style={styles.label}>Message :</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        editable={true} // Champ modifiable activé
      />

      {/* Bouton avec alerte fonctionnelle */}
      <Button 
        title="Afficher une alerte" 
        onPress={handlePress} 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
