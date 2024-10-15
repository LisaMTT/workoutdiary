import { BottomNavigation, PaperProvider } from 'react-native-paper';
import { useState } from 'react';
import { WorkoutProvider } from './components/WorkoutContext'; 
import AddWorkoutPage from './components/AddWorkoutPage';
import WorkoutListPage from './components/WorkoutListPage';
import SettingsPage from './components/SettingsPage';
import Styles from './styles/Styles';

const routes = [
  { key: 'addworkout', title: 'Add Workout', focusedIcon: 'plus-circle' },
  { key: 'workoutlist', title: 'Workout List', focusedIcon: 'format-list-bulleted' },
  { key: 'settings', title: 'Settings', focusedIcon: 'cog' },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const renderScene = BottomNavigation.SceneMap({
    addworkout: AddWorkoutPage,
    workoutlist: WorkoutListPage,
    settings: SettingsPage,
  });

  return (
    <PaperProvider>
      <WorkoutProvider>
        <BottomNavigation
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          style={Styles.bottomNavigation}
        />
      </WorkoutProvider>
    </PaperProvider>
  );
}
