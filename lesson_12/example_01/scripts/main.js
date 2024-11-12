 
 
 
 const h1Element = document.querySelector('.header');

h1Element.textContent = 'Document Object Model';
h1Element.classList.add('red');
const linkToDeleteElement = document.querySelector('.link');
linkToDeleteElement.remove();
const newParagraphElement = document.createElement('p');
newParagraphElement.textContent = 'text in paragraph';
const bodyElement = document.querySelector('body')
bodyElement.append(newParagraphElement)

// Находим все элементы
const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('.result');
// модификация querySelectorAll чтобы найти множество элементов
const inputElements = document.querySelectorAll('input');
// inputElements[0];
// inputElements[1];

//
buttonElement.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {

    let summ = +s1 + +s2;
    resultElement.textContent = summ;
    
}
