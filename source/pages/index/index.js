
import "./normalize.css";
import "./index.scss";
'use strict';

let fillCircle = function() {
	let someNumber = 0;
	return function() {
		someNumber += 0.1;
		if (someNumber <= Math.PI * 2) {
			return someNumber;
		}
	}
};



window.onload = function () {
	let canv = document.querySelector('#canvas'),
		ctx = canv.getContext('2d');

	canv.width = window.innerWidth;
	canv.height = window.innerHeight;

	let centerX = window.innerWidth / 2,
		centerY = window.innerHeight;

	let square = function(num) {
		return num * num;
	};

	let drawParabola = function() {
		let drawSide = function(num = 1) {
			ctx.beginPath();
			ctx.moveTo(centerX, centerY);
			if (num == 1) {
				for (var i = 0; i < 100; i += 0.1) {
					ctx.lineTo(centerX - i, centerY - square(-i / 6));
				}
			} else {
				for (var i = 0; i < 100; i += 0.1) {
					ctx.lineTo(centerX + i, centerY - square(i / 6));
				}
			}
			ctx.stroke();
			ctx.closePath();
		}

		drawSide (1);
		drawSide (0);
	};

	drawParabola();

	/*let fillCirc =  fillCircle();
	let radius = 300;
	setInterval(function() {
		ctx.fillStyle = '#fff';
		ctx.fillRect(0, 0, canv.width, canv.height);

		ctx.fillStyle = 'Magenta';
		radius -= 4;
		ctx.arc(canv.width / 2, canv.height / 2, radius, 0, fillCirc());
		ctx.fill();
	}, 10);*/
};