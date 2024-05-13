import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciseListItem from './src/components/ExerciseListItem';

function ExerciseListItem({item}){
   return(
    <View style={styles.exerciseContainer}> 
    <Text style= {styles.exerciseName}>{item.name}</Text>
    <Text style= {styles.exerciseSubtitle}>{item.muscle.toUpperCase()} I {item.equipment.toUpperCase()}</Text>
  </View>
   )
}

export default function App() {
  const exercise = exercises[2];


  return (
    <View style={styles.container}>

     <FlatList
       
       data={exercise}
       contentContainerStyle={{gap:5}}
       keyExtractor={(item, index)=> item.name + index}
       renderItem={({item})=> <ExerciseListItem item={item} />}
      
     />

     
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 70,
  },
  exerciseContainer:{
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize:20,
    fontWeight:"500",
  },
  exerciseSubtitle: {
    color:"dimgray"
  }
 
});