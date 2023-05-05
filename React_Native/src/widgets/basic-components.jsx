import { useState } from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { styles } from "../assets";

/** @forward View => Like [Div] Tag, And Make The Nested Text Element With Display Block  */
export const _View = () => {
	return (
		<View>
			<Text style={styles.text}>Text In View Has A Block Display</Text>
			<Text style={{ fontSize: 22 }}>Text 1</Text>
			<Text style={{ fontSize: 22 }}>Text 2</Text>
		</View>
	);
};

/** @forward Text => Like [p] Tag, Make The Nested Text Element With Display Inline */
export const _Text = () => {
	const [text, setText] = useState("Initial Text");

	return (
		<Text style={{ fontSize: 22, fontWeight: "bold" }}>
			<Text style={styles.text}>{text}</Text>
			{"\n \n"}
			<Text onPress={() => setText("Initial Text")}>Initial Text</Text>
			{"\n"}
			<Text onLongPress={() => setText("DefaultText")}>Default Text</Text>
		</Text>
	);
};

/** @forward Image => Like [img] Tag, Must Set The Width, Height, And The RedizeMode Properties */
export const _Image = () => {
	return (
		<View style={{ alignItems: "center" }}>
			<Image
				style={{ width: 100, height: 200, resizeMode: "contain" }}
				source={{
					uri: "https://reactnative.dev/img/tiny_logo.png",
				}}
			/>
		</View>
	);
};

/** @forward TextInput => Like [input] Tag */
export const _TextInput = () => {
	const [value, setValue] = useState("Initial Value");
	const [placeholder, setPlaceHolder] = useState("");

	return (
		<ScrollView style={{ margin: 12 }}>
			<View>
				<Text style={styles.text}>Initial Value</Text>
				<TextInput style={styles.input} value={value} onChange={({ target }) => setValue(target.value)} />
			</View>
			<View>
				<Text style={styles.text}>Placeholder</Text>
				<TextInput style={styles.input} value={placeholder} onChange={({ target }) => setPlaceHolder(target.value)} placeholderTextColor="green" placeholder="Initial Placeholder" />
			</View>
			<View>
				<Text style={styles.text}>Text Area</Text>
				<TextInput style={styles.input} multiline value={placeholder} onChange={({ target }) => setPlaceHolder(target.value)} placeholder="Initial Placeholder" />
				<Text />
			</View>
			<View>
				<Text style={styles.text}>Input Type</Text>
				<TextInput style={styles.input} inputMode="numeric" value={placeholder} onChange={({ target }) => setPlaceHolder(target.value)} placeholder="Initial Placeholder" />
				<Text />
			</View>
			<View>
				<Text style={styles.text}>Enter Key Label</Text>
				<TextInput style={styles.input} returnKeyType="send" value={placeholder} onChange={({ target }) => setPlaceHolder(target.value)} placeholder="Initial Placeholder" />
				<Text />
			</View>
			<View>
				<Text style={styles.text}>Inline Image Left</Text>
				<TextInput style={styles.input} inlineImageLeft="search_icon" value={placeholder} onChange={({ target }) => setPlaceHolder(target.value)} placeholder="Initial Placeholder" />
				<Text />
			</View>
		</ScrollView>
	);
};

/** @forward ScrollView => Like [overflow: auto] prop, It Allow The Page To Scrollable */
export const _ScrollView = () => {
	return (
		<ScrollView>
			<View style={{ marginBottom: 10 }}>
				<Text style={{ ...styles.text, fontSize: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur nihil praesentium dolor maxime laudantium, veritatis similique aperiam consequatur facilis enim molestias cupiditate numquam veniam vel porro vero accusantium optio.</Text>
			</View>
			<View style={{ marginBottom: 10 }}>
				<Text style={{ ...styles.text, fontSize: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur nihil praesentium dolor maxime laudantium, veritatis similique aperiam consequatur facilis enim molestias cupiditate numquam veniam vel porro vero accusantium optio.</Text>
			</View>
			<View style={{ marginBottom: 10 }}>
				<Text style={{ ...styles.text, fontSize: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur nihil praesentium dolor maxime laudantium, veritatis similique aperiam consequatur facilis enim molestias cupiditate numquam veniam vel porro vero accusantium optio.</Text>
			</View>
			<View style={{ marginBottom: 10 }}>
				<Text style={{ ...styles.text, fontSize: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur nihil praesentium dolor maxime laudantium, veritatis similique aperiam consequatur facilis enim molestias cupiditate numquam veniam vel porro vero accusantium optio.</Text>
			</View>
			<View style={{ marginBottom: 10 }}>
				<Text style={{ ...styles.text, fontSize: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur nihil praesentium dolor maxime laudantium, veritatis similique aperiam consequatur facilis enim molestias cupiditate numquam veniam vel porro vero accusantium optio.</Text>
			</View>
			<View style={{ marginBottom: 10 }}>
				<Text style={{ ...styles.text, fontSize: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur nihil praesentium dolor maxime laudantium, veritatis similique aperiam consequatur facilis enim molestias cupiditate numquam veniam vel porro vero accusantium optio.</Text>
			</View>
			<View style={{ marginBottom: 10 }}>
				<Text style={{ ...styles.text, fontSize: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur nihil praesentium dolor maxime laudantium, veritatis similique aperiam consequatur facilis enim molestias cupiditate numquam veniam vel porro vero accusantium optio.</Text>
			</View>
			<View style={{ marginBottom: 10 }}>
				<Text style={{ ...styles.text, fontSize: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur nihil praesentium dolor maxime laudantium, veritatis similique aperiam consequatur facilis enim molestias cupiditate numquam veniam vel porro vero accusantium optio.</Text>
			</View>
			<View style={{ marginBottom: 10 }}>
				<Text style={{ ...styles.text, fontSize: 22 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur nihil praesentium dolor maxime laudantium, veritatis similique aperiam consequatur facilis enim molestias cupiditate numquam veniam vel porro vero accusantium optio.</Text>
			</View>
		</ScrollView>
	);
};
