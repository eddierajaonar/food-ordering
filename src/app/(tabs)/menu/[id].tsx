import {StyleSheet} from "react-native";
import {Text, View} from "@/src/components/Themed";
import {useLocalSearchParams} from "expo-router";



const productDetailsScreen = () => {
    const {id} = useLocalSearchParams<{ id: string }>();
    return (
        <View style={styles.container}>
            <Text>productDetailsScreen for id: {id}</Text>
        </View>
    );
};

export default productDetailsScreen;


const styles = StyleSheet.create({
    container: {
        fontSize: 16
    },
});
