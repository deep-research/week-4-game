// Refresh button
$(document).ready(function() {

	// Refresh Button
	$("#refresh-btn").click(function() {
		location.reload();
	});

	// Random Function
	function randInt(min,max) {
	    var number = Math.floor(Math.random()*(max-min+1)+min);
	    return number
	}

	// Target Number
	var targetNum = randInt(19, 120);
	$("#target").html(targetNum)

	// Counter Number
	var counterNum = 0;
	$("#counter").html(counterNum)

	// Wins
	var winCount = 0;
	$("#wins").html(winCount)

	// Losses
	var lossCount = 0;
	$("#losses").html(lossCount)

	// Button Value
	var btn1 = {
		value: randInt(1, 12),
		newNum: function() {
			this.value = randInt(1, 12)
		}
	}
	var btn2 = {
		value: randInt(1, 12),
		newNum: function() {
			this.value = randInt(1, 12)
		}
	}
	var btn3 = {
		value: randInt(1, 12),
		newNum: function() {
			this.value = randInt(1, 12)
		}
	}
	var btn4 = {
		value: randInt(1, 12),
		newNum: function() {
			this.value = randInt(1, 12)
		}
	}

	// Button Click
	$("#crystal-1").on("click", function() {
		counterNum += btn1.value
		$("#counter").html(counterNum)
	});
	$("#crystal-2").on("click", function() {
		counterNum += btn2.value
		$("#counter").html(counterNum)
	});
	$("#crystal-3").on("click", function() {
		counterNum += btn3.value
		$("#counter").html(counterNum)
	});
	$("#crystal-4").on("click", function() {
		counterNum += btn4.value
		$("#counter").html(counterNum)
	});

	// Game Logic
	$(".crystal-btn").on("click", function() {
		// Winning
		if (counterNum === targetNum) {
			winCount++
			$("#wins").html(winCount)

			counterNum = 0;
			$("#counter").html(counterNum)
			targetNum = randInt(19, 120);
			$("#target").html(targetNum)

			btn1.newNum()
			btn2.newNum()
			btn3.newNum()
			btn4.newNum()

			alert("You won!")
		}
		else if (counterNum > targetNum) {
			lossCount++
			$("#losses").html(lossCount)

			counterNum = 0;
			$("#counter").html(counterNum)
			targetNum = randInt(19, 120);
			$("#target").html(targetNum)

			btn1.newNum()
			btn2.newNum()
			btn3.newNum()
			btn4.newNum()
			
			alert("You loose!")
		}
	});
});