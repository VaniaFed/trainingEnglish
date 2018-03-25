
import "./normalize.css";
import "./index.scss";
'use strict';

/*
JSON.parse – читает объекты из строки в формате JSON.

var numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1

Or so:


var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

user = JSON.parse(user);

alert( user.friends[1] ); // 1


*/

var loadURL = function(url) {
    var oRequest = new XMLHttpRequest();
    oRequest.open('GET', url, false);
    oRequest.setRequestHeader("User-Agent", navigator.userAgent);
    oRequest.send(null);

    return oRequest.responseText;
};


window.onload = function () {
	var jsonLine = `{
		"elements": [
			{
				"question": "Hello",
				"answer": " ",
				"picture": "picture.jpg"
			},
			{
				"question": " ",
				"answer": " ",
				"picture": "picture.jpg"
			},
			{
				"question": " ",
				"answer": " ",
				"picture": "picture.jpg"
			},
			{
				"question": " ",
				"answer": " ",
				"picture": "picture.jpg"
			}
		]
	}`;
	var wordsAndPhrases = JSON.parse(jsonLine);

	console.log(wordsAndPhrases["elements"][0]["question"]);

};
