var images = ["bison.jpg", "cat.jpg", "dog.jpg", "dolphin.jpg", "harambe.jpg", "horse.jpg", "kangaroo.jpg", "penguin.jpg", "sloth.jpg", "toucan.jpg", "bison.jpg", "cat.jpg", "dog.jpg", "dolphin.jpg", "harambe.jpg", "horse.jpg", "kangaroo.jpg", "penguin.jpg", "sloth.jpg", "toucan.jpg"];

		var isMatch = [];
		var counter = 0;
		var matches = 0;
		var alreadyMatched = [];
		var scores = {};

		// Knuth shuffle http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
		function shuffle (array) {
			var currentIndex = array.length, temporaryValue, randomIndex;
			// While there remain elements to shuffle...
			while (0 !== currentIndex) {
				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		};

		function refresh(){
			var shuffled = shuffle(images);
			for (var i = 0; i < images.length ; i++){
				var id = ""+i;
				var element = document.getElementById(id);
				element.src = "images/"+shuffled[i];
			}
			matches=0;
			counter=0;
			console.log("New Game");
		}

		$(document).ready(function(){
			event.preventDefault();
			refresh();
			$('img').animate({opacity: 0});
		});

		$('.new-game').click(function(event){
			event.preventDefault();
			$('img').animate({opacity: 50});
			refresh();
			$('img').animate({opacity: 0});
		});


		$('img').click(function(){

			counter++; 
			console.log(counter);
			isMatch.push(this); 
			console.log(isMatch);

			$(this).animate({opacity: 100});

			if(isMatch.length%2 === 0 && isMatch.length>0) {
				var check1 = isMatch[counter-1];
				var check2 = isMatch[counter-2];
				if (check1 == check2) {
					$('#'+check1.id).animate({opacity: 0});
					$('#'+check2.id).animate({opacity: 0});
				} else if ( check1.src == check2.src && check1 != check2 
					&& alreadyMatched.indexOf(check1) == -1 
					&& alreadyMatched.indexOf(check2) == -1) {
					matches++;
					alreadyMatched.push(check1);
					alreadyMatched.push(check1);
					console.log("Match! "+ (10-matches)+" left!");

					if(alreadyMatched.indexOf(check1) && alreadyMatched.indexOf(check2) && check1 != check2){
						$('#'+check1.id).animate({opacity: 100});
						$('#'+check2.id).animate({opacity: 100});
					}

					if (matches == 10){
						var score = {};
						score.score = 100-counter+20;
						$('#input').css("display","inline-flex");
						alert("Hooray! Enter your name below to save your score: " + score.score);
						console.log(score);

						matches = 0;
						counter = 0;
					}
				} else if (check1.src != check2.src) {
					$('#'+check1.id).animate({opacity: 0});
					$('#'+check2.id).animate({opacity: 0});
				}
			}
		})