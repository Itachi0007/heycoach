function play() {
	console.log(dummy);
}

const bankAccount = {
	firstName: "John",
	lastName: "Doe",
	watches: ["Rolex", "Casio"],
	balance: 5566,
	add: function (amount) {
		return (this.balance += amount);
	},
};

var alto = {
	age: 14,
	number: 9912134,
};

let dom = document.getElementById("heading");
// console.log(dom);




// Create a new <li> element:
const element = document.createElement("li");

// Create a new text node:
const textNode = document.createTextNode("Water");

// Append the text node to the <li> element:
element.appendChild(textNode);

// Get the <ul> element with id="myList":

// Replace the first child node with the new <li> element:

// function change() {
// 	// dom.replaceChild(h4, h1)
// 	// const heading = document.getElementById("heading");
// 	element.style.color = "red";
// 	dom.replaceChild(element, dom.childNodes[0]);
// }
const x = document.querySelectorAll("head1");
console.log(x);

document.getElementById("btn").onclick = function(){
	element.style.color = "red";
	dom.replaceChild(element, dom.childNodes[0]);
	
	let ele = document.getElementsByTagName("h1");
	console.log(ele);
	ele[0].textContent = "ABC";
}
