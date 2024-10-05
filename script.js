$(document).ready(function () {
	$("#year").keypress(() => {
		const year = Number($("#year").val());
		console.log(typeof year);
	});
	$("#month").keypress(() => {
		const month = Number($("#month").val());
		console.log(typeof month);
	});
	$("#day").keypress(() => {
		const day = Number($("#day").val());
		console.log(typeof day);
	});
});

function validate() {}
