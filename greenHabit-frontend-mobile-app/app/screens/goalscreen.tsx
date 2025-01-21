/**
 * Ce fichier définit l'écran de gestion des objectifs.
 * Il permet à l'utilisateur de créer, suivre et supprimer des objectifs.
 *
 * @module GoalsScreen
 */
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import { goalsData, Goal, MiniTask } from '../../data/goalsData';
import { Picker } from '@react-native-picker/picker';

/**
 * Type pour les catégories d'objectifs.
 */
type Category = 'Énergie' | 'Déchets' | 'Transport' | 'Alimentation' | 'Eau' | 'Consommation';

/**
 * Composant pour l'écran des objectifs.
 * @returns {JSX.Element} L'écran des objectifs.
 */
const GoalsScreen: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>(goalsData);
  const [newGoalTitle, setNewGoalTitle] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Tous'>('Tous');
  const [newGoalCategory, setNewGoalCategory] = useState<Category>('Énergie');

  // Fonction pour basculer l'état d'une mini-tâche
  const toggleMiniTaskCompletion = (goalId: number, miniTaskId: number) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId
          ? {
              ...goal,
              miniTasks: goal.miniTasks.map((miniTask) =>
                miniTask.id === miniTaskId
                  ? { ...miniTask, completed: !miniTask.completed }
                  : miniTask
              ),
            }
          : goal
      )
    );
  };

  // Fonction pour ajouter un nouvel objectif
  const addGoal = () => {
    if (!newGoalTitle.trim()) {
      Alert.alert('Erreur', 'Le titre de l’objectif ne peut pas être vide.');
      return;
    }
  
    const newGoal: Goal = {
      id: goals.length + 1,
      title: newGoalTitle,
      category: newGoalCategory, // Utilisez la catégorie sélectionnée
      miniTasks: [],
    };
    setGoals([...goals, newGoal]);
    setNewGoalTitle('');
  };

  // Fonction pour supprimer un objectif
  const removeGoal = (goalId: number) => {
    setGoals(goals.filter((goal) => goal.id !== goalId));
  };

  // Fonction pour calculer la progression d'un objectif
  const calculateProgress = (miniTasks: MiniTask[]) => {
    const completedTasks = miniTasks.filter((task) => task.completed).length;
    return (completedTasks / miniTasks.length) * 100 || 0;
  };

  // Filtrer les objectifs par catégorie
  const filteredGoals = selectedCategory === 'Tous' 
    ? goals 
    : goals.filter((goal) => goal.category === selectedCategory);

  // Catégories disponibles
  const categories: Category[] = ['Énergie', 'Déchets', 'Transport', 'Alimentation', 'Eau', 'Consommation'];

  // Rendu d'une mini-tâche
  const renderMiniTasks = (miniTasks: MiniTask[], goalId: number) => {
    return miniTasks.map((miniTask) => (
      <TouchableOpacity
        key={miniTask.id}
        onPress={() => toggleMiniTaskCompletion(goalId, miniTask.id)}
        style={styles.miniTask}
      >
        <Text style={[styles.miniTaskText, miniTask.completed && styles.completed]}>
          {miniTask.title}
        </Text>
      </TouchableOpacity>
    ));
  };

  // Rendu d'un objectif
  const renderGoal = ({ item }: { item: Goal }) => {
    const progress = calculateProgress(item.miniTasks);
    return (
      <View style={styles.goalContainer}>
        <Text style={styles.goalTitle}>{item.title}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress.toFixed(0)}% complété</Text>
        {renderMiniTasks(item.miniTasks, item.id)}
        <TouchableOpacity style={styles.deleteButton} onPress={() => removeGoal(item.id)}>
          <Text style={styles.deleteButtonText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Mes Objectifs</Text>

      {/* Filtres par catégorie */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === "Tous" && styles.selectedCategory,
          ]}
          onPress={() => setSelectedCategory("Tous")}
        >
          <Text style={styles.categoryText}>Tous</Text>
        </TouchableOpacity>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Ajout d'un nouvel objectif */}
      <View style={styles.addGoalContainer}>
        <TextInput
          style={styles.input}
          placeholder="Titre de l'objectif"
          value={newGoalTitle}
          onChangeText={setNewGoalTitle}
        />
        <Picker
          selectedValue={newGoalCategory}
          style={styles.categoryPicker}
          onValueChange={(itemValue) =>
            setNewGoalCategory(itemValue as Category)
          }
        >
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
        <TouchableOpacity style={styles.addButton} onPress={addGoal}>
          <Text style={styles.addButtonText}>Ajouter</Text>
        </TouchableOpacity>
      </View>
      {/* Liste des objectifs */}
      <FlatList
        data={filteredGoals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGoal}
        scrollEnabled={false} // Désactive le défilement interne pour permettre le défilement global
      />
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#ecf0f1',
    marginRight: 10,
  },
  selectedCategory: {
    backgroundColor: '#2ecc71',
  },
  categoryText: {
    fontSize: 14,
    color: '#2c3e50',
  },
  addGoalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  goalContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  goalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 5,
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2ecc71',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 10,
  },
  miniTask: {
    paddingVertical: 5,
  },
  miniTaskText: {
    fontSize: 16,
    color: '#34495e',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#7f8c8d',
  },
  deleteButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  categoryPicker: {
    flex: 1,
    marginRight: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },  
});

export default GoalsScreen;