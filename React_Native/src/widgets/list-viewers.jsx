import { useState } from "react";
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, SectionList } from "react-native";
import { styles } from "../assets";

const flatListData = [
	{ id: 1, title: "First Item" },
	{ id: 2, title: "Second Item" },
	{ id: 3, title: "Third Item" },
];

const sectionListData = [
	{ title: "Main dishes", data: ["Pizza", "Burger", "Risotto"] },
	{ title: "Sides", data: ["French Fries", "Onion Rings", "Fried Shrimps"] },
	{ title: "Drinks", data: ["Water", "Coke", "Beer"] },
	{ title: "Desserts", data: ["Cheese Cake", "Ice Cream"] },
];

/** @forward FlatList => Make Map() On The Data  */
export const _FlatList = () => {
	const [selectedId, setSelectedId] = useState();

	const NormalItem = ({ title }) => (
		<View style={{ backgroundColor: "#efefef", marginBottom: 20, paddingVertical: 20, borderWidth: 1 }}>
			<Text style={{ ...styles.text, paddingHorizontal: 20 }}>{title}</Text>
		</View>
	);

	const TouchAbleItem = ({ item }) => {
		const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
		const color = item.id === selectedId ? "white" : "black";

		return (
			<TouchableOpacity
				onPress={() => setSelectedId(item.id)}
				style={[styles.text, { backgroundColor, padding: 10, marginBottom: 10 }]}>
				<Text style={[styles.text, { color }]}>{item.title}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView style={styles.sectionContainer}>
			<Text style={styles.text}>Static Items</Text>
			<FlatList
				data={flatListData}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <NormalItem title={item.title} />}
			/>

			<Text style={styles.text}>Touch Able Opacity Items</Text>
			<FlatList
				data={flatListData}
				renderItem={TouchAbleItem}
				keyExtractor={(item) => item.id}
				extraData={selectedId}
			/>
		</SafeAreaView>
	);
};

export const _SecionList = () => {
	return (
		<SafeAreaView style={styles.sectionContainer}>
			<SectionList
				sections={sectionListData}
				keyExtractor={(item, index) => item + index}
				renderSectionHeader={({ section: { title } }) => <Text style={styles.text}>{title}</Text>}
				renderItem={({ item }) => (
					<View style={{ backgroundColor: "#333", marginBottom: 10 }}>
						<Text style={[styles.text, { color: "white", paddingHorizontal: 10 }]}>{item}</Text>
					</View>
				)}
			/>
		</SafeAreaView>
	);
};
