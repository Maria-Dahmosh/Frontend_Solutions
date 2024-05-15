//2
const myLi = document.querySelector("li.start-here");
console.log(myLi);

//3
myLi.textContent = "main title";

//4
const myLiNextSibling = myLi.nextElementSibling;
console.log(myLiNextSibling);
const myUl = myLiNextSibling.firstElementChild;
console.log(myUl);
const newSubTitle = document.createElement("li");
console.log(newSubTitle);
const subTitleText = document.createTextNode("sub title 4");
console.log(subTitleText);

newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle); //Append the new <li> element with the text "sub title 4" to the nested <ul>

//5
const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();
console.log(myLiParent);

//6
const head = document.head;
const title = head.lastElementChild; //document.head.querySelector('title')
title.textContent = "DOM Master";
//7
const div = myLiParent.nextElementSibling;
const p = div.firstElementChild;
p.textContent = "Now I Know How to traverse the DOM :D";
