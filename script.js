let toDoListArrays = [];

let toDoListHTML = '';


function generateHTML(){
toDoListHTML = '';
for(let i = 0; i < toDoListArrays.length; i++){
  const toDoObject = toDoListArrays[i];
  const name = toDoObject.name;
  const dueDate = toDoObject.dueDate;
  const html = `<div><p class="paragraph-js"> ${name}${dueDate} 
  <button class="deleteButton" onclick="toDoListArrays.splice(${i}, 1); deleteToDoItem()">X</button>
  </p></div>`;
  
  toDoListHTML += html;
  }
  document.querySelector('.paragraphDiv').innerHTML = toDoListHTML;
}

function addToDoItem(){
  let toDoItemElement = document.getElementById('toDoItem');
  let dateSelectorElement = document.querySelector('.js-date-input');
  const dueDate = dateSelectorElement.value;
  const listItems = toDoItemElement.value.trim();
  if (listItems && dueDate) {
    toDoListArrays.push({
      name: listItems,
      dueDate: dueDate
    });
  toDoItemElement.value = '';
  dateSelectorElement.value = '';
  generateHTML();
}else {
  alert('Please enter both a task and a due date!');
}
}

function deleteToDoItem(index) {
  toDoListArrays.splice(index, 1);
  generateHTML();
}
const addButtonElement = document.querySelector('.addButton');
addButtonElement.addEventListener('click', addToDoItem());
const toDoItemElement = document.getElementById('toDoItem');
toDoItemElement.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addToDoItem();
  }
});

generateHTML();