import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import NgoHomepage from "./NgoHomepage";

const NGORegistration = () => {
  const [darpanId, setDarpanId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [services, setServices] = useState("");
  const [experience, setExperience] = useState("");
  const [Name, setName] = useState("");

  const handleSignUp = () => {
    // Check if the password matches the confirmed password
    // if (password !== confirmPassword) {
    //   Alert.alert("Error", "Password and Confirm Password do not match");
    //   return;
    // }
    // axios
    //   .get("http://192.168.61.242:3001/ngoProfile")
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log("error", err));
    // axios
    //   .post("http://192.168.61.242:3001/ngoProfile", {
    //     name: Name,
    //     darpanId: darpanId,
    //     email: email,
    //     password: password,
    //     confirmPassword: confirmPassword,
    //     contactNumber: contactNumber,
    //     location: location,
    //     services: services,
    //     yearsOfExperience: experience,
    //   })
    //   .then(() => {
    //     alert("Sucessful signup!");
    //     navigation.navigate("NgoHomepage");
    //   })
    //   .catch((err) => console.log("Error", err));

    // Implement your sign-up logic here
    // Validate inputs, make API calls, etc.
    navigation.navigate("NgoHomepage");
  };

  const navigation = useNavigation();

  const handleLoginNavigation = () => {
    // Navigate back to the login page with the user type
    navigation.navigate("LoginPage", { userType: "NGOs" });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>NGO Registration</Text>

        {/* Unique Darpan ID Input */}
        <TextInput
          style={styles.input}
          placeholder="Name of Organization"
          value={Name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Unique Darpan ID no."
          value={darpanId}
          onChangeText={(text) => setDarpanId(text)}
        />
        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/* Set a Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Set a Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* Confirm Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        {/* Authorized Individual's Contact Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Authorized Individuals Contact No."
          value={contactNumber}
          onChangeText={(text) => setContactNumber(text)}
        />

        {/* Location Input */}
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />

        {/* Services Input */}
        <TextInput
          style={styles.input}
          placeholder="Services"
          value={services}
          onChangeText={(text) => setServices(text)}
        />

        {/* Years of Experience Input */}
        <TextInput
          style={styles.input}
          placeholder="Years of Experience"
          value={experience}
          onChangeText={(text) => setExperience(text)}
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0CCFF",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1A3567",
    marginTop: 40,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#1A3567",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  alreadytext: {
    color: "#1A3567",
    marginBottom: 40,
  },
  login: {
    color: "#1A3567",
  },
});

export default NGORegistration;
