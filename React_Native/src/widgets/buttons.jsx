import { useState } from "react";
import { View, Button, Alert, Switch } from "react-native";
import { styles } from "../assets";

export const _Button = () => {
	const showAlert = () => Alert.alert("Alert Title", "Alert Description", ["one", "two"]);

	return (
		<View style={styles.sectionContainer}>
			<View style={styles.separetor}>
				<Button title="Button" />
			</View>
			<View style={styles.separetor}>
				<Button title="Use Color" color="#333" />
			</View>
			<View style={styles.separetor}>
				<Button title="Disabled" disabled />
			</View>
			<View style={{ ...styles.flexBetween, ...styles.separetor }}>
				<Button title="Left Button" color="#123" />
				<Button title="Right Button" color="#456" />
			</View>
			<View style={styles.separetor}>
				<Button title="Alert" color="#007AFF" onPress={showAlert} />
			</View>
		</View>
	);
};

export const _Switch = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((isEnabled) => !isEnabled);

	return (
		<View style={{ ...styles.flexCenter, height: 700 }}>
			<Switch trackColor={{ false: "red", true: "green" }} thumbColor={isEnabled ? "lime" : "darkred"} ios_backgroundColor="#3e3e3e" onValueChange={toggleSwitch} value={isEnabled} />
		</View>
	);
};
