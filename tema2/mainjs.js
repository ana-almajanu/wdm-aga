var first, second
var tds = document.querySelectorAll("td");
var position = document.querySelectorAll("td")
var contor = 0
var winner = 0

function showfirst (){
	first= document.getElementById("first").value;
	console.log("Primul player este:", first);
}

function showsecond (){
	second = document.getElementById("second").value;
	console.log("Al doilea player este:", second);
}

function clear(elem) {
	elem.textContent = "";
}

document.querySelector("#start").addEventListener("click", function () {
	document.getElementById('start').setAttribute('disabled', 'true')
	for (var i = 0; i < tds.length; ++i) {
		clear(tds[i]);
	}
})

document.querySelector("#reset").addEventListener("click", function () {
	document.getElementById('start').removeAttribute('disabled')
	for (var i = 0; i < tds.length; ++i) {
		clear(tds[i]);
		winner = 0;
	}
})


for ( var i = 0; i < tds.length ; ++i){
	
	tds[i].addEventListener("click", function () {
			if (contor % 2 === 0 && winner === 0) {
				if (event.target.textContent == "") {
					event.target.textContent = "X";
					win();
					contor++;}
				}
				if (contor % 2 === 1 && winner === 0){
					if (event.target.textContent == "") {
					event.target.textContent = "O";
					contor++;
					win()
				}}
			})
				
		}



function win() {
	if (
    tds[0].textContent === tds[1].textContent
    && tds[1].textContent === tds[2].textContent
    && (tds[0].textContent === 'X')
  ) {
    console.log(document.getElementById('first').value, ' a castigat')
	winner++
  } else if (tds[0].textContent === tds[1].textContent
    && tds[1].textContent === tds[2].textContent
    && tds[0].textContent === 'O'){
  	console.log(document.getElementById('second').value, ' a castigat')
	winner++
  } else if (
    tds[3].textContent === tds[4].textContent
    && tds[4].textContent === tds[5].textContent
    && (tds[3].textContent === 'X' )
  ) {
    console.log(document.getElementById('first').value, ' a castigat')
    winner++
  } else if (
    tds[3].textContent === tds[4].textContent
    && tds[4].textContent === tds[5].textContent
    && (tds[3].textContent === 'O')
  ) {
    console.log(document.getElementById('second').value, ' a castigat')
    winner++
  } else if (
    tds[6].textContent === tds[7].textContent
    && tds[7].textContent === tds[8].textContent
    && (tds[6].textContent === 'X' )
  ) {
    console.log(document.getElementById('first').value, ' a castigat')
    winner++
  } else if (
    tds[6].textContent === tds[7].textContent
    && tds[7].textContent === tds[8].textContent
    && (tds[6].textContent === 'O')
  ) {
    console.log(document.getElementById('second').value, ' a castigat')
    winner++
  } else if (
    tds[0].textContent === tds[3].textContent
    && tds[3].textContent === tds[6].textContent
    && (tds[0].textContent === 'X')
  ) {
    console.log(document.getElementById('first').value, ' a castigat')
    winner++
  } else if (
    tds[0].textContent === tds[3].textContent
    && tds[3].textContent === tds[6].textContent
    && (tds[0].textContent === 'O')
  ) {
    console.log(document.getElementById('second').value, ' a castigat')
    winner++
  } else if (
    tds[1].textContent === tds[4].textContent
    && tds[4].textContent === tds[7].textContent
    && (tds[1].textContent === 'X' )
  ) {
    console.log(document.getElementById('first').value, ' a castigat')
    winner++
  } else if (
    tds[1].textContent === tds[4].textContent
    && tds[4].textContent === tds[7].textContent
    && (tds[1].textContent === 'O')
  ) {
    console.log(document.getElementById('second').value, ' a castigat')
    winner++
  } else if (
    tds[2].textContent === tds[5].textContent
    && tds[5].textContent === tds[8].textContent
    && (tds[2].textContent === 'X' )
  ) {
    console.log(document.getElementById('first').value, ' a castigat')
    winner++
  } else if (
    tds[2].textContent === tds[5].textContent
    && tds[5].textContent === tds[8].textContent
    && (tds[2].textContent === 'O' )
  ) {
    console.log(document.getElementById('second').value, ' a castigat')
    winner++
  } else if (
    tds[0].textContent === tds[4].textContent
    && tds[4].textContent === tds[8].textContent
    && ( tds[0].textContent === 'X')
  ) {
    console.log(document.getElementById('first').value, ' a castigat')
    winner++
  } else if (
    tds[0].textContent === tds[4].textContent
    && tds[4].textContent === tds[8].textContent
    && ( tds[0].textContent === 'O')
  ) {
    console.log(document.getElementById('second').value, ' a castigat')
    winner++
  } else if (
    tds[2].textContent === tds[4].textContent
    && tds[4].textContent === tds[6].textContent
    && (tds[2].textContent === 'X')
  ) {
    console.log(document.getElementById('first').value, ' a castigat')
    winner++
  } else if (
    tds[2].textContent === tds[4].textContent
    && tds[4].textContent === tds[6].textContent
    && (tds[2].textContent === 'O')
  ) {
    console.log(document.getElementById('second').value, ' a castigat')
    winner++
  }
}

	
		