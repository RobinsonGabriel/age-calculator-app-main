var regex = /^[a-zA-Z_!@#$%^&*()\s]*$/; //Regex for invalid chars
const months_30 = ["4", "6", "9", "11"];
const months_31 = ["1", "3", "5", "7", "8", "10", "12"];

$(document).ready(function () {
	var year = 0;
	var month = 0;
	var day = 0;

	var year_flag = false;
	var month_flag = false;
	var day_flag = false;

	$("#year").keyup(() => {
		({ year_flag, year } = year_validate(year));
		if (year_flag === true && month_flag === true && day_flag === true) {
			console.log(year);
			calc_diff(year, month, day);
		}
	});
	$("#month").keyup(() => {
		({ month_flag, month } = month_validate(month));
		if (year_flag === true && month_flag === true && day_flag === true) {
			calc_diff(year, month, day);
		}
	});
	$("#day").keyup(() => {
		({ day_flag, day } = day_validate(day)); //Flags used to remove NaN result and to improve the way results are rendered
		if (year_flag === true && month_flag === true && day_flag === true) {
			calc_diff(year, month, day);
		}
	});
});

function year_validate(year) {
	year = Number($("#year").val());
	if ($("#year").val().match(regex) || year < 1900) {
		$("#valid__year").css("visibility", "visible");
		return false;
	} else {
		$("#valid__year").css("visibility", "hidden");
		return { year_flag: true, year: year };
	}
}

function month_validate(month) {
	month = Number($("#month").val());
	if ($("#month").val().match(regex) || month > 12 || month < 1) {
		$("#valid__month").css("visibility", "visible");
		return false;
	} else {
		$("#valid__month").css("visibility", "hidden");
		return { month_flag: true, month: month };
	}
}

function day_validate(day) {
	day = Number($("#day").val()); //TODO: catch edgecase for leap years, can I make this not this horrible? Which edge cases could I theoretically avoid using?
	if (
		$("#day").val().match(regex) ||
		day > 31 ||
		day < 1 ||
		(day > 30 && months_30.includes(month)) ||
		(month === "2" && day > 29) //Gabe needs to read more about how short circuting works :(
	) {
		$("#valid__day").css("visibility", "visible");
		return false;
	} else {
		$("#valid__day").css("visibility", "hidden");
		return { day_flag: true, day: day };
	}
}

function calc_diff(year, month, day) {
	let currentDate = new Date();
	let currentYear = currentDate.getFullYear();
	let currentMonth = currentDate.getMonth() + 1;
	let currentDay = currentDate.getDate();

	let yearResult = currentYear - year;
	let monthResult = currentMonth - month;
	let dayResult = 0;

	if (monthResult < 0) {
		monthResult = monthResult + 12;
	}

	day > currentDay ? (dayResult = currentDay - day) : (dayResult = day); //Attempting to promote readability

	if (dayResult < 0) {
		dayResult = Math.abs(dayResult);
	}

	if (dayResult === 1) {
		$("#result__day").next().text("day");
	}
	if (monthResult === 1) {
		$("#result__month").next().text("month");
	}

	$("#result__year").text(yearResult);
	$("#result__month").text(monthResult);
	$("#result__day").text(dayResult);
}
