import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View } from "react-native";
import { Colors, DebugInstructions } from "react-native/Libraries/NewAppScreen";
import { Header, LearnMoreLinks, ReloadInstructions } from "react-native/Libraries/NewAppScreen";
import { styles } from "../assets";

function Section({ children, title }) {
	const isDarkMode = useColorScheme() === "dark";
	return (
		<View style={styles.sectionContainer}>
			<Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}>{title}</Text>
			<Text style={[styles.sectionDescription, { color: isDarkMode ? Colors.light : Colors.dark }]}>{children}</Text>
		</View>
	);
}

export const Intro = () => {
	const isDarkMode = useColorScheme() === "dark";
	const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter };

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={backgroundStyle.backgroundColor} />
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
				<Header />
				<View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
					<Section title="Step One">
						Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to see your edits.
					</Section>
					<Section title="See Your Changes">
						<ReloadInstructions />
					</Section>
					<Section title="Debug">
						<DebugInstructions />
					</Section>
					<Section title="Learn More">Read the docs to discover what to do next:</Section>
					<LearnMoreLinks />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
