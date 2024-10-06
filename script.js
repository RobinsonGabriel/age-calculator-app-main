var regex = /^[a-zA-Z_!@#$%^&*()\s][^$]*$/;

$(document).ready(function () {
	let year;
	let month;
	let day;
	$("#year").keypress(() => {
		year = $("#year").val();
		if (year.match(regex)) {
			$("#valid__year").css("visibility", "visible");
		} else {
			$("#valid__year").css("visibility", "hidden");
		}
	});
	$("#month").keypress(() => {
		month = $("#month").val();
		if (month.match(regex)) {
			$("#valid__month").css("visibility", "visible");
		} else {
			$("#valid__month").css("visibility", "hidden");
		}
	});
	$("#day").keypress(() => {
		day = $("#day").val();
		if (day.match(regex)) {
			$("#valid__day").css("visibility", "visible");
		} else {
			$("#valid__day").css("visibility", "hidden");
		}
	});
});

function year_validate() {}
function month_validate() {}
function day_validate() {}
