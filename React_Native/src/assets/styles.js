import { StyleSheet } from "react-native";

let flex = { display: "flex", flexDirection: "row", alignItems: "center" };

export const styles = StyleSheet.create({
	sectionContainer: { marginTop: 10, paddingHorizontal: 12 },
	sectionTitle: { fontSize: 24, fontWeight: "600" },
	sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: "400" },
	highlight: { color: "white", fontWeight: "700", backgroundColor: "#333", padding: 20, borderRadius: 10 },

	separetor: { marginBottom: 10 },

	flex,
	flexStart: { ...flex, justifyContent: "flex-start" },
	flexEnd: { ...flex, justifyContent: "flex-end" },
	flexCenter: { ...flex, justifyContent: "center" },
	flexBetween: { ...flex, justifyContent: "space-between" },
	flexAround: { ...flex, justifyContent: "space-around" },

	text: { color: "black", fontSize: 25, fontWeight: "bold" },
	input: { color: "black", marginBottom: 12, fontSize: 25, fontWeight: "bold", borderWidth: 1 },
});
