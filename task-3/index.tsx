import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInputProps,
} from "react-native";

const CustomButton = ({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Input: React.FC<TextInputProps> = (props) => <Text {...props} />;

const Screen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [name, setName] = useState("");

  const submitName = () => navigation.navigate("AnotherScreen", { name });
  const reset = () => setName("");

  return (
    <View style={styles.container}>
      <Input value={name} onChangeText={setName} />
      <CustomButton onPress={submitName} title="DONE" />
      <CustomButton onPress={reset} title="RESET" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonText: {
    fontSize: 20,
    color: "red",
  },
});

export default Screen;
