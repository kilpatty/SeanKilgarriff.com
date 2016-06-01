var btns = document.getElementById('keypad');
var inputs = [];
var hold = [];
var socket = io();
var equation;
var shownEquations = [];


function getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement;
}

   $(window).keypress( function(e) {
	   // Get the screen and button values
	   var screen = document.querySelector('.screen');
	   var screenVal = screen.innerHTML;
	   var d = document.getElementsByClassName("active");

       var key = e.which;

	var calculate = screenVal;

	if (screenVal === '0' && key != '46') {
		screen.innerHTML = '';
	}

   	// If clear is pressed
   	if (key == '99') {
   		screen.innerHTML = '0';
   		inputs = [];
   	}

  	// If x is pressed
  	else if (key == '120') {
  		if (calculate !== '0') {
  			inputs.push(calculate);
  			if (calculate === '' && inputs[3] === undefined) {
  				inputs[1] = '*';
  			} else {
  				inputs.push('*');
  			}
  			screen.innerHTML = '';
  		} else {
  			inputs[1] = '*';
  		}

  		while (d[0]) {
  			d[0].className = 'symbol';
  		}

  		target.className = 'symbol active';

  	}
  	// If / pressed
  	else if (key == '47') {

  		if (calculate != '0') {
  			inputs.push(calculate);
  			if (calculate === '' && inputs[3] === undefined) {
  				inputs[1] = '/';
  			} else {

  				inputs.push('/');
  			}
  			screen.innerHTML = '';
  		} else {
  			inputs[1] = '/';
  		}

  		while (d[0]) {
  			d[0].className = 'symbol';
  		}

  		target.className = 'symbol active';

  	}
  	// If - is pressed
  	else if (key == '45') {

  		if (calculate == '0') {

  			screen.innerHTML = '-';

  		} else {
  			inputs.push(calculate);
  			if (calculate === '' && inputs[3] === undefined) {
  				inputs[1] = '-';
  			} else {

  				inputs.push('-');
  			}
  			screen.innerHTML = '';

  		}

  		while (d[0]) {
  			d[0].className = 'symbol';
  		}

  		target.className = 'symbol active';
  	}
  	// If + is pressed
  	else if (key == '43') {

  		if (calculate != '0') {

  			inputs.push(calculate);
  			if (calculate === '' && inputs[3] === undefined) {
  				inputs[1] = '+';
  			} else {

  				inputs.push('+');
  			}

  			screen.innerHTML = '';

  		} else {
  			inputs[1] = '+';
  		}

  		while (d[0]) {
  			d[0].className = 'symbol';
  		}

  		target.className = 'symbol active';

  	}
  	// If = is pressed calculate the answer
  	else if (key == '13' || key == '61') {

  		while (d[0]) {
  			d[0].className = 'symbol'
  		}


  		inputs.push(calculate);
  		calculate = inputs.toString();


  		var lastChar = calculate[calculate.length - 1];

  		// Replace x with * and , width ''.
  		calculate = calculate.replace(/x/g, '*').replace(/,/g, '');


      //remove . if it is the last character
  		if (lastChar == '.') {
  			calculate = calculate.replace(/./, '');
  		}
      //calculate percent
  		if (lastChar == '%') {
  			var getNum = inputs[0].toString();
  			var getSy = inputs[1].toString();
  			var getPar = inputs[2].toString();
  			getPar = getPar.replace(/%/g, '');

  			var calculatePar = getPar / "100" * getNum;
  			calculate = getNum + getSy + calculatePar;

  		}
      //clear inputs for next calculation
  		inputs = [];

  		if (calculate) {
  			var answer = eval(calculate);
        equation = calculate;
        equation += "=";

  			if (answer.toFixed(2) === answer + ".00") {
  				screen.innerHTML = answer;
          equation += answer;
  			} else {
  				screen.innerHTML = answer.toFixed(2);
          equation += answer.toFixed(2);
  			}
  		}
      socket.emit('calculation', equation);
  	}
  	// if any other key is pressed
  	else {

		if(key == '49'){
			screen.innerHTML += 1;
 	    }
		if(key == '50'){
			screen.innerHTML += 2;
 	    }
		if(key == '51'){
			screen.innerHTML += 3;
 	    }
		if(key == '52'){
			screen.innerHTML += 4;
 	    }
		if(key == '53'){
			screen.innerHTML += 5;
 	    }
		if(key == '54'){
			screen.innerHTML += 6;
 	    }
		if(key == '55'){
			screen.innerHTML += 7;
 	    }
		if(key == '56'){
			screen.innerHTML += 8;
 	    }
		if(key == '57'){
			screen.innerHTML += 9;
 	    }
		if(key == '48'){
			screen.innerHTML += '0';
 	    }
		if(key == '46'){
			screen.innerHTML += '.';
		}
		if(key == '37'){
			screen.innerHTML += '%';
		}


  	}

   });

btns.onclick = function(event) {
	//Get Target
	var target = getEventTarget(event);

  // Get the screen and button values
	var screen = document.querySelector('.screen');
	var screenVal = screen.innerHTML;
	var btnVal = target.innerHTML;
	var d = document.getElementsByClassName("active");


	if (screenVal === '0' && btnVal != '.') {

		screen.innerHTML = '';
	}


	var calculate = screenVal;

	// If clear is pressed
	if (btnVal == 'C') {
		screen.innerHTML = '0';
		inputs = [];
	}
  // If +/- is pressed (make value negative or positive)
  else if (btnVal == '+/-') {

		if (hold[0] === undefined) {
			screen.innerHTML = '-' + calculate;
			hold.push('-' + calculate);
		} else {
			calculate = calculate.replace(/-/g, '');
			screen.innerHTML = calculate;
			hold = [];
		}

	}
	// If x is pressed
	else if (btnVal == 'x') {
		if (calculate !== '0') {
			inputs.push(calculate);
			if (calculate === '' && inputs[3] === undefined) {
				inputs[1] = '*';
			} else {

				inputs.push('*');
			}
			screen.innerHTML = '';
		} else {
			inputs[1] = '*';
		}

		while (d[0]) {
			d[0].className = 'symbol';
		}

		target.className = 'symbol active';

	}
	// If / pressed
	else if (btnVal == '/') {

		if (calculate != '0') {
			inputs.push(calculate);
			if (calculate === '' && inputs[3] === undefined) {
				inputs[1] = '/';
			} else {

				inputs.push('/');
			}
			screen.innerHTML = '';
		} else {
			inputs[1] = '/';
		}

		while (d[0]) {
			d[0].className = 'symbol';
		}

		target.className = 'symbol active';

	}
	// If - is pressed
	else if (btnVal == '-') {

		if (calculate == '0') {

			screen.innerHTML = '-';

		} else {
			inputs.push(calculate);
			if (calculate === '' && inputs[3] === undefined) {
				inputs[1] = '-';
			} else {

				inputs.push('-');
			}
			screen.innerHTML = '';

		}

		while (d[0]) {
			d[0].className = 'symbol';
		}

		target.className = 'symbol active';
	}
	// If + is pressed
	else if (btnVal == '+') {

		if (calculate != '0') {

			inputs.push(calculate);
			if (calculate === '' && inputs[3] === undefined) {
				inputs[1] = '+';
			} else {

				inputs.push('+');
			}

			screen.innerHTML = '';

		} else {
			inputs[1] = '+';
		}

		while (d[0]) {
			d[0].className = 'symbol';
		}

		target.className = 'symbol active';

	}
	// If = is pressed calculate the answer
	else if (btnVal == '=') {

		while (d[0]) {
			d[0].className = 'symbol'
		}


		inputs.push(calculate);
		calculate = inputs.toString();


		var lastChar = calculate[calculate.length - 1];

		// Replace x with * and , width ''.
		calculate = calculate.replace(/x/g, '*').replace(/,/g, '');


    //remove . if it is the last character
		if (lastChar == '.') {
			calculate = calculate.replace(/./, '');
		}
    //calculate percent
		if (lastChar == '%') {
			var getNum = inputs[0].toString();
			var getSy = inputs[1].toString();
			var getPar = inputs[2].toString();
			getPar = getPar.replace(/%/g, '');

			var calculatePar = getPar / "100" * getNum;
			calculate = getNum + getSy + calculatePar;

		}
    //clear inputs for next calculation
		inputs = [];

		if (calculate) {
			var answer = eval(calculate);
      equation = calculate;
      equation += "=";

			if (answer.toFixed(2) === answer + ".00") {
				screen.innerHTML = answer;
        equation += answer;
			} else {
				screen.innerHTML = answer.toFixed(2);
        equation += answer.toFixed(2);
			}
		}
    socket.emit('calculation', equation);
	}
	// if any other key is pressed
	else {
		screen.innerHTML += btnVal;

	}

	event.preventDefault();

};

socket.on('history', function(msg){
  for (x in msg) {
    var line = $('<li><h4>' + msg[x] + '</h4></li>');
    shownEquations.push(line);
  }
  for (x in shownEquations) {
    $('#messages').prepend(shownEquations[x]);
  }
});

socket.on('calculation', function(msg){
  var line = $('<li><h4>' + msg + '</h4></li>');
  shownEquations.push(line);
  if ((shownEquations.length) > 10) {
    shownEquations[0].remove()
    shownEquations.splice(0,1);
    $('#messages').prepend(shownEquations[9]);
  }
  else {
    var x = shownEquations.length - 1
    $('#messages').prepend(shownEquations[x]);
  }
});
