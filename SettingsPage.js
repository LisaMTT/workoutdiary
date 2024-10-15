import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { RadioButton, Text, Card } from 'react-native-paper';
import WorkoutContext from './WorkoutContext';
import Styles from '../styles/Styles';

export default function SettingsPage() {

  const { unit, setUnit } = useContext(WorkoutContext);

  return (
    <SafeAreaView style={Styles.container}>
      <Text variant="headlineLarge" style={Styles.header}>Settings</Text>

      <Card style={Styles.card}>
      <Card.Title title="Units" titleStyle={Styles.cardTitleText}/>
        <Card.Content>
          <RadioButton.Group onValueChange={newValue => setUnit(newValue)} value={unit}>
            <RadioButton.Item label="Kilometers" value="km" />
            <RadioButton.Item label="Miles" value="mi" />
          </RadioButton.Group>
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}
