let toDoListArrays = [];

let toDoListHTML = '';


function generateHTML(){
for(let i = 0; i < toDoListArrays.length; i++){
  const toDoObject = toDoListArrays[i];
  const name = toDoObject.name;
  const dueDate = toDoObject.dueDate;
  const html = `<p class="paragraph-JS"> <div>${name}</div><div>${dueDate} </div>
   
  <button onclick="toDoListArrays.splice(${i}, 1); deleteToDoItem()">Delete</button>
  </p>`;
  console.log(html);
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
  console.log(toDoListArrays);
  toDoItemElement.value = '';
  dateSelectorElement.value = '';
  generateHTML();
}}

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