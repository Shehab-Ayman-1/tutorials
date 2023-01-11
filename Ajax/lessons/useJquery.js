export const loadElements = () => {
	"use strict";
	$(function () {
		$("#show-page").load("../html/demo.html");
		$("#show-demo-one").load("../html/demo-one.html .demo-one");
		$("#show-demo-two").load("../html/demo-two.html .demo-two");

		$(".btn").on("click", function () {
			$("#show-demo").load(`../html/${$(this).data("page")} .demo`, function (resTxt, stTxt, XHR) {
				if (stTxt === "success") {
					console.log(stTxt, "Data Loaded");
				}
			});
		});
	});
};

export const singleMethod = () => {
	"use strict";
	$(function () {
		$.get("../data/users.json?username=ahmed&password=1234", function (data, status, xhr) {
			console.log(data, status, xhr);
			$.each(data, (index, item) => {
				$("#show").append(`${item.age + index}- ${item.name} | `);
			});
		});
		$.post("../data/users.json", { username: "ahmed", password: "123" }, function (data, status, xhr) {
			console.log(data);
			console.log(status);
			console.log(xhr);
		});
	});
};

export const ajaxMethod = () => {
	$(function () {
		$.ajax({
			// cache: false, // [Optional] Store The Request In The Browser, Default Is True
			// async: false, // [Optional] Wait The Request Until Loaded Then Continue The Other Requests, Default Is True
			// timeout: 5000, // [Optional] Timeout For The Request
			// dataType: "html", // [Optional] Limit The Data Type Of The Server Response, Default Is Any
			// username: "ahmed", // [Optional] For Authontication
			// password: "123", // [Optional] For Authontication
			// contentType: "multipart/form-data", // [Optional] Default Is application/x-www-form-urlencoded
			// data: { username: "ahmed", password: "123" }, // [Optional] queries parameters
			method: "Get", // [get, post, delete, put]
			url: "../data/users.json", // url that recieve/send data from/to it
			beforeSend: function (xhr) {
				console.log("Before Send");
			},
			success: function (data, status, xhr) {
				// This Function Is Running If The Request Is Success
				console.log(status);
			},
			error: function (xhr, status, statusTxt) {
				// This Function Is Running If The Request Is Faild
				console.log(status);
			},
			complete: function (xhr, status) {
				// This Function Is Running If The Request Is Completed, After Success Or Error
				console.log("Complete");
			},
		});
	});
};
