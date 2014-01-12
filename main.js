$(document).ready(function() {

	$("#target").submit(function(event) {
		var transaction = $('#transaction').val();
		var amount = $('#amount').val();

		if (transaction!=null && amount!=null) {
			alert("Fill out all details");
		}

		else {
			var now = new Date();
			var month = now.getMonth();
			var date = now.getDate();
			var year = now.getFullYear();

			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

			$(".transactions table tbody").append("<tr><td>" + monthNames[month] + " " + date + ", " + year + "</td>" + "<td>" 
			+ transaction + "</td>" + "<td>$" + amount + "</td></tr>");
		}

		event.preventDefault();
	});





});