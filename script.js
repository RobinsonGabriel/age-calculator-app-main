var regex = /^[a-zA-Z_!@#$%^&*()\s]*$/; //Regex for invalid chars
const months_30 = ["4", "6", "9", "11"];
const months_31 = ["1", "3", "5", "7", "8", "10", "12"];

$(document).ready(function () {
	var year = 0;
	var month = 0;
	var day = 0;
	//Below is a naive pass, will update after basic scaffolding is done
	//TODO: refactor validation into single funciton (get each element with a focus event?)
	//TODO: write case for empty input (NaN? whitespace??)
	$("#year").keyup(() => {
		year = Number($("#year").val());
		if ($("#year").val().match(regex) || year < 1900) {
			console.log(year);
			$("#valid__year").css("visibility", "visible");
		} else {
			$("#valid__year").css("visibility", "hidden");
			calc_diff(year, month, day);
		}
	});
	$("#month").keyup(() => {
		month = Number($("#month").val());
		if ($("#month").val().match(regex) || month > 12 || month < 1) {
			$("#valid__month").css("visibility", "visible");
		} else {
			$("#valid__month").css("visibility", "hidden");
			calc_diff(year, month, day);
		}
	});
	$("#day").keyup(() => {
		day = Number($("#day").val()); //TODO: catch edgecase for leap years, can I make this not this horrible? Which edge cases could I theoretically avoid using?
		if (
			$("#day").val().match(regex) ||
			day > 31 ||
			day < 1 ||
			(day > 30 && months_30.includes(month)) ||
			(month === "2" && day > 29) //Gabe needs to read more about how short circuting works :(
		) {
			$("#valid__day").css("visibility", "visible");
		} else {
			$("#valid__day").css("visibility", "hidden");
			calc_diff(year, month, day);
		}
	});
});

function year_validate() {}
function month_validate() {}
function day_validate() {}

function calc_diff(year = 0, month = 0, day = 0) {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let currentMonth = currentDate.getMonth() + 1;
	let currentDay = currentDate.getDate();

	let yearResult = currentYear - year;
	var monthResult = currentMonth - month;
	let dayResult = currentDay - day;

	//Handeling negative cases
	if (monthResult < 0) {
		monthResult = monthResult + 12;
	}

	if (day > currentDay) {
		dayResult = currentDay;
	}

	if (dayResult < 0) {
		dayResult = Math.abs(dayResult);
	}

	//Case 2: dayresult is negative
	/*switch (dayResult > 0) {
		case months_30.includes(month):
			dayResult = dayResult + 30;
			break;
		case months_31.includes(month):
			dayResult = dayResult + 31;
			break;
		case month === "2":
			dayResult = dayResult + 28;
			break;
	}*/
	$("#result__year").text(yearResult);
	$("#result__month").text(monthResult);
	$("#result__day").text(dayResult);
}
