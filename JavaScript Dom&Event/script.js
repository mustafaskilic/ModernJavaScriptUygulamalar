//UI variables

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let items;

loadItems();

eventListeners();

function eventListeners() {
  //submit event
  form.addEventListener("submit", addNewItem);

  //delete an item
  taskList.addEventListener("click", deleteItem);

  //delete all items
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

//#region Delete All Items

function deleteAllItems(e) {
  if (confirm("are you sure?")) {
    //  taskList.innerHTML("");
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
  }
  e.preventDefault();
}
//#endregion

//#region Delete An Item

function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("are you sure")) {
      e.target.parentElement.parentElement.remove();

      //delete item from local storage
      deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
  }
  e.preventDefault();
}
//#endregion

//#region

function deleteItemFromLS(text) {
  items = getItemsFromLS();
  items.forEach(function (item, index) {
    if (item === text) {
      items.splice(index, 1);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
}
//#endregion

//#region  Add New Item
function addNewItem(e) {
  if (input.value === "") {
    alert("add new item");
    return;
  }
  createItem(input.value);

  //save to local storage
  setItemToLS(input.value);

  input.value = "";
  //   taskList.innerHTML += `<li class="list-group-item list-group-item-secondary">${input.value}<a href="#" class="delete-item float-right><i class="fas fa-times"></i> </a></li>`;

  e.preventDefault();
}
//#endregion

function createItem(text) {
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';
  li.appendChild(a);
  //li.textContent = input.value;
  taskList.appendChild(li);
}

function loadItems() {
  items = getItemsFromLS();
  items.forEach(function (item) {
    createItem(item);
  });
}

//#region Get items from local storage
function getItemsFromLS() {
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}
//#endregion

//#region Set item to Local storage
function setItemToLS(text) {
  items = getItemsFromLS();
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
}
//#endregion
