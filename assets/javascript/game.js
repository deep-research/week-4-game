$(document).ready(function() {

	// Refresh Button
	$("#refresh-btn").click(function() {
		location.reload();
	});

	// Random Function
	function randInt(min,max) {
	    var number = Math.floor(Math.random()*(max-min+1)+min);
	    return number;
	}

	// Variables
	var targetNum;
	var counterNum;
	var winCount = 0;
	$("#wins").html(winCount);
	var lossCount = 0;
	$("#losses").html(lossCount);

	// Button Values
	var btn1 = {
		value: null,
		newNum: function() {
			this.value = randInt(1, 12);
		}
	};
	var btn2 = {
		value: null,
		newNum: function() {
			this.value = randInt(1, 12);
		}
	};
	var btn3 = {
		value: null,
		newNum: function() {
			this.value = randInt(1, 12);
		}
	};
	var btn4 = {
		value: null,
		newNum: function() {
			this.value = randInt(1, 12);
		}
	};
	objList = [btn1, btn2, btn3, btn4];

	// Button Click
	$("#crystal-1").on("click", function() {
		counterNum += btn1.value;
		$("#counter").html(counterNum);
	});
	$("#crystal-2").on("click", function() {
		counterNum += btn2.value;
		$("#counter").html(counterNum);
	});
	$("#crystal-3").on("click", function() {
		counterNum += btn3.value;
		$("#counter").html(counterNum);
	});
	$("#crystal-4").on("click", function() {
		counterNum += btn4.value
		$("#counter").html(counterNum)
	});

	var gameReset = function() {
		counterNum = 0;
		$("#counter").html(counterNum);
		targetNum = randInt(19, 120);
		$("#target").html(targetNum);

		objList.forEach( function(btn) {
			btn.newNum();
		});
	};

	// Game Logic
	gameReset()
	$(".crystal-btn").on("click", function() {
		// Win
		if (counterNum === targetNum) {
			winCount++;
			$("#wins").html(winCount);
			gameReset();

			alert("You win!");
		}
		// Loose
		else if (counterNum > targetNum) {
			lossCount++;
			$("#losses").html(lossCount);
			gameReset();
			alert("You loose!");
		};
	});
});