export const gets = () => {
	/* 
	- now() -> Get Milliseconds From 1970 To Now
	- getTime() -> Get Milliseconds From 1970 To Now
	- getDate() -> Get The Current Day
	- getFullYear() -> Get The Current Year
	- getDay() -> Get The Index Of The Day [sat, sun, mon, tue, wed, thu, fri]
	- getMonth() -> Get The Index Of The Month [jan, feb, mar, abr, ...]
	- getHours() -> Get The Current Hour
	- getMinutes() -> Get The Current Minute
	- getSeconds() -> Get The Current Second
	*/

	let date = new Date();
	let dateNow = Date.now();

	console.table({
		milliseconds: dateNow,
		seconds: dateNow / 1000,
		minutes: dateNow / 1000 / 60,
		hours: dateNow / 1000 / 60 / 60,
		days: dateNow / 1000 / 60 / 60 / 24,
		years: dateNow / 1000 / 60 / 60 / 24 / 365,
	});

	console.table({
		date: date,
		getTime: date.getTime(),
		getDate: date.getDate(),
		getFullYear: date.getFullYear(),
		getDay: date.getDay(),
		getMonth: date.getMonth(),
		getHours: date.getHours(),
		getMinutes: date.getMinutes(),
		getSeconds: date.getSeconds(),
	});
};

export const formats = () => {
	/* 
	- UTC(year) -> Get The Milliseconds From 1970 To Year
	*/
	let utc = Date.UTC("1972") / 1000 / 60 / 60 / 24 / 365;
	let date = new Date();

	console.table({
		utc,
		timeStamps: new Date(0), // Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)
		date1: new Date("2000 10 aug"), // Sun Oct 08 2000 00:00:00 GMT+0200 (Eastern European Standard Time)
		date2: new Date("2000-8-10"), // Sun Oct 08 2000 00:00:00 GMT+0200 (Eastern European Standard Time)
		local: date.toLocaleString(),
		localDate: date.toLocaleDateString(),
		localTime: date.toLocaleTimeString(),
	});
};
