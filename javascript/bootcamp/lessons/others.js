export const imageURL = () => {
	let file = document.querySelector(".others #file");
	file.addEventListener("change", (event) => {
		// Get The Image Data From The File Input
		let [image] = event.target.files;

		// Convert The Image To A String Like react-base64
		let reader = new FileReader();
		reader.readAsDataURL(image);

		// Convert The Image To URL
		reader.onload = (event) => {
			// The Current Img URL
			let imageURL = event.target.result; // The Old Image URL Size -> 1.6Mb
			let img = document.createElement("img");
			img.setAttribute("src", imageURL);

			// Now, We Can Resize The Image To Make It's Size Is Smaller By Canvase
			img.onload = (event) => {
				let width = 300;
				let canvas = document.createElement("canvas");
				let ratio = width / event.target.width; // Get The Ratio Between The Width & Height
				canvas.width = width;
				canvas.height = event.target.height * ratio; // Set The Canvas Height By The Width Ratio
				let context = canvas.getContext("2d");
				context.drawImage(img, 0, 0, canvas.width, canvas.height);

				let newImgURL = context.canvas.toDataURL("image/jpeg", 90); // The New Image URL Size -> 126Kb

				// Append The New Image To The Wrapper
				let wrapper = document.querySelector(".others .wrapper");
				let newImg = document.createElement("img");
				newImg.setAttribute("src", newImgURL);
				wrapper.append(newImg);
				console.log(imageURL, "#".repeat(30), newImgURL);
			};
		};
	});
};
