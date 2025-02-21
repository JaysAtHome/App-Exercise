import React, { useState } from 'react';
import { View, Text, Image, FlatList, Switch, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const projects = [
  { id: '1', name: 'Inventory Management System', description: 'A React-based system to manage store items efficiently.' },
  { id: '2', name: 'Flappy Clone', description: 'A Unity 2022 game inspired by Flappy Bird mechanics.' },
  { id: '3', name: 'Social Media Awareness Story', description: 'An interactive Ink-based story for kids aged 6-10.' }
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      <StatusBar style={darkMode ? 'light' : 'dark'} />
      
      <Image source={require('./assets/ID Picture.jpg')} style={styles.profilePic} />
      <Text style={[styles.name, darkMode ? styles.darkText : styles.lightText]}>Jay Marlo R. Marmeto</Text>
      <Text style={[styles.bio, darkMode ? styles.darkText : styles.lightText]}>A passionate developer currently learning Game Development, Mobile Application Development, and Website Development.</Text>
      
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Skills</Text>
      <Text style={[styles.skill, darkMode ? styles.darkText : styles.lightText]}>React Native, React, Node.js, Unity, UiPath</Text>
      
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Contact</Text>
      <Text style={[styles.contact, darkMode ? styles.darkText : styles.lightText]}>Email: jaymarlomarmeto16@gmail.com / jay_marlo_marmeto@dlsl.edu.ph</Text>
      <Text style={[styles.contact, darkMode ? styles.darkText : styles.lightText]}>GitHub: github.com/JaysAtHome</Text>
      
      <Text style={[styles.sectionTitle, darkMode ? styles.darkText : styles.lightText]}>Projects</Text>
      <FlatList
        data={projects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.projectItem, darkMode ? styles.darkProjectItem : styles.lightProjectItem]}>
            <Text style={[styles.projectName, darkMode ? styles.darkText : styles.lightText]}>{item.name}</Text>
            <Text style={[styles.projectDesc, darkMode ? styles.darkText : styles.lightText]}>{item.description}</Text>
          </View>
        )}
      />
      
      <View style={styles.themeToggle}>
        <Text style={[darkMode ? styles.darkText : styles.lightText]}>Dark Mode </Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  lightContainer: { backgroundColor: '#fff' },
  darkContainer: { backgroundColor: '#121212' },
  profilePic: { width: 200, height: 200, borderRadius: 50, marginBottom: 10, borderWidth: 3, borderColor: '#000' },
  name: { fontSize: 24, fontWeight: 'bold' },
  bio: { fontSize: 16, textAlign: 'center', marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  skill: { fontSize: 16, marginBottom: 5 },
  contact: { fontSize: 16, marginBottom: 5 },
  projectItem: { padding: 15, borderRadius: 10, marginVertical: 5, width: '100%' },
  lightProjectItem: { backgroundColor: '#f0f0f0', borderColor: '#ccc', borderWidth: 1 },
  darkProjectItem: { backgroundColor: '#333', borderColor: '#555', borderWidth: 1 },
  projectName: { fontSize: 16, fontWeight: 'bold' },
  projectDesc: { fontSize: 14 },
  themeToggle: { flexDirection: 'row', alignItems: 'center', marginTop: 20 },
  lightText: { color: '#000' },
  darkText: { color: '#fff' }
});