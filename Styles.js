import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 20,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: 'white',
    },
    categories: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 20,
    },
    header: {
        fontFamily: 'sans-serif-condensed',
        textAlign: "center",
        color: '#FF69B4',
        marginBottom: 20,
        padding: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    textInput: {
        margin: 10,
        borderColor: '#FF69B4',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    text: {
        fontFamily: 'sans-serif-condensed',
        color: '#FF69B4',
        fontSize: 15,
        fontWeight: 'bold',
    },
    multiline: {
        flex: 0.7,
    },
    button: {
        margin: 10,
        backgroundColor: '#FF69B4',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    card: {
        borderWidth: 1,
        margin: 30,
        elevation: 2,
        borderRadius: 8,
        padding: 10,
        borderColor: '#FF69B4',
    },
    cardTitleText: {
        fontFamily: 'sans-serif-condensed',
        color: '#FF69B4',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    toggleButtonActive: {
        backgroundColor: '#ffb6db',
    },
    toggleButtonInactive: {
        backgroundColor: 'transparent',
    },
    totalDistanceHeader: {
        fontFamily: 'sans-serif-condensed',
        color: '#FF69B4',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    datePicker: {
        mode: 'outlined',
        backgroundColor: '#FF69B4',
    }



});
