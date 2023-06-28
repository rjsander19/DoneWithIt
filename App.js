import { StatusBar } from 'expo-status-bar';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { StyleSheet, 
          Text, 
          TouchableWithoutFeedback,
          TouchableOpacity,
          TouchableHighlight,
          View, 
          Image,
          // StatusBar,
          Alert,
          Button,
          Dimensions,
          SafeAreaView, 
          Platform} from 'react-native';

export default function App() {

  const { landscape } = useDeviceOrientation();

  // console.log(useDimensions());

  const handlePress = () => console.log("Text pressed");



  return (

    <SafeAreaView style={styles.container}>

      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? "100%" : "30%",
      }}>
      </View>

      <Button
        color="orange" 
        title="Click me!" 
        onPress={() => Alert.alert("My Title", "My message", [
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "No", onPress: () => console.log("No")}
        ])}>
      </Button>

      <Button 
        title="For a prompt, click me"
        onPress={() => Alert.prompt("My title", "My message", text => console.log(text) )} > 
      </Button>


      <Text onPress={handlePress}>Hello World! </Text>
        <TouchableHighlight onPress={() => console.log("Image tapped")}>
          <Image source={{ 
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300" }}></Image>
        </TouchableHighlight>
        <StatusBar style="auto" />
         
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});

