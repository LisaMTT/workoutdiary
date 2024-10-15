import { SafeAreaView, View, Alert } from "react-native";
import { Button, Text, TextInput, ToggleButton, useTheme } from "react-native-paper";
import { useContext, useState } from "react";
import WorkoutContext from "./WorkoutContext";
import DateTimePicker from '@react-native-community/datetimepicker';
import Styles from "../styles/Styles";

const categories = ['run', 'ski', 'swim'];

export default function AddWorkoutPage() {
    const [category, setCategory] = useState(categories[0]);
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date());

    const { workouts, setWorkouts, unit } = useContext(WorkoutContext);

    function addWorkout() {
        if (!isPositiveNumber(distance) || !isPositiveNumber(duration)) {
            Alert.alert('Distance and duration must be positive numbers.');
            return;
        }

        const newWorkout = { 
            category, 
            distance: Number(distance),
            duration: Number(duration), 
            date: date.toDateString(),
            unit 
        };
        const modifiedWorkouts = [...workouts, newWorkout];
        setWorkouts(modifiedWorkouts);


        setDistance('');
        setDuration('');
        setDate(new Date());
    }

    function isPositiveNumber(value) {
        return !isNaN(value) && Number(value) > 0;
    }

    return (
        <SafeAreaView style={Styles.container}>
            <Text variant="headlineLarge" style={Styles.header}>Add Workout</Text>
            <CategorySelection value={category} setValue={setCategory} values={categories} />

            <TextInput
                label={`Distance (${unit})`}
                style={Styles.textInput}
                value={distance}
                keyboardType='numeric'
                onChangeText={setDistance}
            />
            <TextInput
                label={'Duration (min)'}
                style={Styles.textInput}
                value={duration}
                keyboardType='numeric'
                onChangeText={setDuration}
            />
            <CustomDatePicker date={date} setDate={setDate} style={Styles.datePicker} />
            <Button mode="contained" style={Styles.button} onPress={addWorkout}>Add Workout</Button>
        </SafeAreaView>
    );
}

function CategorySelection({ value, setValue, values }) {
    const theme = useTheme();

    return (
        <View style={Styles.categories}>
            <ToggleButton.Group value={value} onValueChange={setValue}>
                {values.map(v =>
                    <ToggleButton
                        key={v}
                        value={v}
                        icon={v}
                        style={[Styles.toggleButtonInactive, value === v && Styles.toggleButtonActive]}
                    />
                )}
            </ToggleButton.Group>
        </View>
    );
}

function CustomDatePicker({ date, setDate }) {
    const [show, setShow] = useState(false);

    return (
        <View>
            <Button onPress={() => setShow(true)}>Select Date</Button>
            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate || date;
                        setShow(false);
                        setDate(currentDate);
                    }}
                />
            )}
        </View>
    );
}
