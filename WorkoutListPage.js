import { FlatList, SafeAreaView } from "react-native";
import { Avatar, Card, Text, useTheme } from "react-native-paper";
import WorkoutContext from "./WorkoutContext";
import { useContext } from "react";
import Styles from "../styles/Styles";

export default function WorkoutListPage() {
    const theme = useTheme();
    const { workouts, unit } = useContext(WorkoutContext); 

    const totalDistances = workouts.reduce((acc, workout) => {
        const category = workout.category.toLowerCase(); 
        const distance = Number(workout.distance); 


        const distanceInKm = unit === 'km' ? distance : distance * 1.60934;

        if (!acc[category]) {
            acc[category] = 0;
        }
        acc[category] += distanceInKm;
        return acc;
    }, {});

    const totalDistanceEntries = Object.entries(totalDistances).map(([category, distance]) => ({
        category,
        distance,
    }));

    return (
        <SafeAreaView style={Styles.container}>
            <Text variant="headlineLarge" style={Styles.header}>List of Workouts</Text>
            {/* Display total distances */}
            <Card style={Styles.card}>
                <Card.Content>
                    <Text style={Styles.totalDistanceHeader}>Total Distances</Text>
                    {totalDistanceEntries.map((entry, index) => (
                        <Text style={Styles.text} key={index}>
                            {`${entry.category}: ${entry.distance.toFixed(2)} ${unit}`} {/* Display the correct unit */}
                        </Text>
                    ))}
                </Card.Content>
            </Card>
            <FlatList
                data={workouts}
                renderItem={Item}
                keyExtractor={(item, index) => `${item.date}:${item.distance}:${index}`}

            />
        </SafeAreaView>
    );
}

function Item({ item }) {
    return (
        <Card style={Styles.card}>
            <Card.Title
                titleVariant="titleMedium"
                title={`${item.category} - ${item.distance} ${item.unit} ${item.date}`}
                left={(props) => <Avatar.Icon icon={item.category} size={40} />}
            />
            <Card.Content>
                <Text>{`Duration: ${item.duration} min`}</Text>
            </Card.Content>
        </Card>
    );
}