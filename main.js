$(document).ready(function() {

	$("#target").submit(function(event) {
		var transaction = $('#transaction').val();
		var amount = $('#amount').val();

		// Check if there's input 
		if (transaction=='' && amount=='') {
			alert("Fill out all details");
		}

		// Compute transaction
		else {
			var now = new Date();
			var month = now.getMonth();
			var date = now.getDate();
			var year = now.getFullYear();

			var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			// Add row to transaction table
			$(".transactions table tbody").append("<tr><td>" + monthNames[month] + " " + date + ", " + year + "</td>" + "<td>" 
			+ transaction + "</td>" + "<td>$" + amount + "</td></tr>");

			// Update total amount
			total = $('#total').html();
			new_total = parseFloat(total) + parseFloat(amount);
			$('#total').html(new_total);
		}

		event.preventDefault();
	});


});