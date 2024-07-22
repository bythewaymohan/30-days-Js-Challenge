
//Task 1: Select an HTML element by its ID and change its text content.
document.getElementById('text').innerHTML = `hello, its me  i change your inner content`



//Task 2: Select an HTML element by its class and change its background color.
var color = document.querySelector('.Change-color');
color.style.backgroundColor = "red";




//Task 3: Create a new div element with some text content and append it to the body.

const div = document.createElement('div')
div.className = "main"
div.setAttribute("title", "ScriptedDiv")
const addText = document.createTextNode("This is the scripted Div Message")
div.appendChild(addText)
// div.innerText="This is Scriptede "
div.style.backgroundColor = "green"
div.style.padding = "13px"
document.body.append(div)




//Task 4: Create a new li element and add it to an existing ul list.
const newList = document.createElement('li')
const listName = document.createTextNode("List 4")
newList.appendChild(listName);
const mynweList = document.querySelector('.myul')
mynweList.appendChild(newList)




//Task 5: Select an HTML element and remove it from the DOM.

let removeEle = document.querySelector('.removeHeading');
removeEle.remove()


//Task 6: Remove the last child of a specific HTML element.
let removeLstChild = document.querySelector('.myChild');
removeLstChild.lastElementChild.remove()




//Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
let changeImg = document.querySelector('.changeImg');
changeImg.setAttribute("src", "https://cdn.pixabay.com/photo/2017/07/31/17/12/water-2559064_1280.jpg")



//Task 8: Add and remove a CSS class to/from an HTML element.
let addCssClass = document.querySelector('#addCssClass');
addCssClass.setAttribute('class', 'addCss')
console.log(addCssClass);

let removeCss = document.querySelector(".removeCssClass")
removeCss.removeAttribute("class");
console.log(removeCss);



// Task 9: Add a click event listener to a button that changes the text content of a paragraph.


var button = document.getElementById('changeTextButton');
var paragraph = document.getElementById('myParagraph');

button.addEventListener('click', function () {
    paragraph.textContent = 'This is the new text!';
});



///Task 10: Add a mouseover event listener to an element that changes its border color.

let borderChange = document.querySelector('.changeBorder');
borderChange.addEventListener('mouseover', function () {
    borderChange.style.borderColor = "red"
})
borderChange.addEventListener('mouseout', function () {
    borderChange.style.borderColor = "black"
})
