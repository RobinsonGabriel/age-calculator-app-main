var regex = /^[a-zA-Z_!@#$%^&*()\s]*$/; //Regex for invalid chars
const months_30 = ["4", "6", "9", "11"];
const months_31 = ["1", "3", "5", "7", "8", "10", "12"];

$(document).ready(function () {
	let year;
	let month;
	let day;

	//Below is a naive pass, will update after basic scaffolding is done
	//TODO: refactor validation into single funciton (get each element with a focus event?)
	//TODO: write case for empty input (NaN? whitespace??)
	$("#year").keyup(() => {
		year = $("#year").val();
		if (!year.match(regex) || (Number(year) < 1900 && year.length === 4)) {
			console.log(year);
			$("#valid__year").css("visibility", "visible");
		} else {
			$("#valid__year").css("visibility", "hidden");
		}
	});
	$("#month").keyup(() => {
		month = $("#month").val();
		if (month.match(regex) || Number(month) > 12 || Number(month) < 1) {
			$("#valid__month").css("visibility", "visible");
		} else {
			$("#valid__month").css("visibility", "hidden");
		}
	});
	$("#day").keyup(() => {
		day = $("#day").val(); //TODO: catch edgecase for leap years, can I make this not this horrible? Which edge cases could I theoretically avoid using?
		if (
			(day.match(regex) || Number(day) > 31 || Number(day) < 1) &&
			((!(month in months_30) && Number(day) >= 31) ||
				(month === "2" && day >= 29))
		) {
			$("#valid__day").css("visibility", "visible");
		} else {
			$("#valid__day").css("visibility", "hidden");
		}
	});
});

function year_validate() {}
function month_validate() {}
function day_validate() {}

function calc_diff() {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let currentMonth = currentDate.getMonth() + 1;
	let currentDay = currentDate.getDate();
}
