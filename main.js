const stringSaverForm = document.querySelector("#string-saver");
const stringSaverInput = document.querySelector("#string-saver-input");
const savedString = document.querySelector("#saved-string");
const savedStringValue = localStorage.getItem('savedStringValue');

if(savedStringValue === null) {
    savedString.innerText = 'Local storage is empty!';
} else {
    savedString.innerText = savedStringValue;
}

stringSaverForm.addEventListener('submit', e => {

    e.preventDefault()
    localStorage.setItem('savedStringValue', stringSaverInput.value);

});


const pageCounterForm = document.querySelector("#page-counter");
const counter = document.querySelector("#counter");


let savedCount = localStorage.getItem('savedCount');

if(savedCount === null) {
    savedCount = 0
    counter.innerHTML = savedCount;
} else {
    counter.innerHTML = savedCount;
}

savedCount++
localStorage.setItem('savedCount', savedCount++);


const listBuilderForm = document.querySelector("#list-builder-form");
const listBuilderInput = document.querySelector("#list-builder-input");
const orderedList = document.querySelector("#ordered-list");

orderedList.innerText = "Your list is empty.";

listBuilderForm.addEventListener('submit', e => {

    e.preventDefault()

    const newItem = listBuilderInput.value;

    
    let items = localStorage.getItem('items');
    if(items === null) {
        orderedList.innerText = "";
        items = [newItem]
        localStorage.setItem('items', JSON.stringify(items));
        const li = document.createElement("li");
        li.innerText = items
        orderedList.appendChild(li);
    } else {
        items = JSON.parse(items);
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
        const li = document.createElement("li");
        li.innerText = items[items.length - 1]
        orderedList.appendChild(li);
    }

});