let button = document.getElementById("btn");
let inputBox;
let listItems;
let list;
let index;
let para;
var icons;

var listContainer = document.getElementById("list");

button.addEventListener("click", () => {
  inputBox = document.querySelector(".text-box").value;
  listItems = Array.from(listContainer.querySelectorAll("li"));
  if (inputBox === "") {
    document.querySelector(".error-msg").style.visibility = "visible";
  } else if (document.querySelector("#btn").innerText === "Update") {
    document.querySelector(".error-msg").style.visibility = "hidden";
    let tasks = document.querySelectorAll(".task");
    tasks[index].innerText = inputBox;
    document.querySelector(".text-box").value = "";
    document.querySelector("#btn").innerText = "Add Task";
  } else {
    document.querySelector(".error-msg").style.visibility = "hidden";
    list = document.createElement("li");
    createTaskUI();
    listContainer.appendChild(list);
  }
});
function createTaskUI() {
  createTask();
  document.querySelector(".text-box").value = "";
}

function createTask() {
  para = document.createElement("p");
  para.innerText = inputBox;
  para.classList.add("task");
  createEditDeleteIcon();
}
function createEditDeleteIcon() {
  icons = document.createElement("div");
  let deleteImg = document.createElement("img");
  let editImg = document.createElement("img");
  let uncheckImg = document.createElement("img");
  let checkImg = document.createElement("img");
  addClassEditDeleteIcon(deleteImg, editImg, uncheckImg, checkImg, icons);
}
function addClassEditDeleteIcon(
  deleteImg,
  editImg,
  uncheckImg,
  checkImg,
  icons
) {
  deleteImg.classList.add("deleteIcon");
  editImg.classList.add("editIcon");
  uncheckImg.classList.add("checkBoxIcon");
  checkImg.classList.add("CheckMarkIcon");
  icons.classList.add("icons");
  addIcons(deleteImg, editImg, uncheckImg, checkImg);
}
function addIcons(deleteImg, editImg, uncheckImg, checkImg) {
  deleteImg.src = "./image/delete.png";
  editImg.src = "./image/edit.png";
  uncheckImg.src = "./image/checkbox.png";
  checkImg.src = "./image/check-mark.png";
  addEventListeners(deleteImg, editImg, uncheckImg, checkImg);
}

function addEventListeners(deleteImg, editImg, uncheckImg, checkImg) {
  editImg.addEventListener("click", onEditClick);
  deleteImg.addEventListener("click", onDeleteClick);
  uncheckImg.addEventListener("click", onCheckBoxClick);
  checkImg.addEventListener("click", onCheckMarkClick);
  checkImg.style.visibility = "hidden";
  appendIcons(deleteImg, editImg, uncheckImg, checkImg);
}

function appendIcons(deleteImg, editImg, uncheckImg, checkImg) {
  list.appendChild(uncheckImg);
  list.appendChild(checkImg);
  list.appendChild(para);
  list.appendChild(icons);
  icons.appendChild(deleteImg);
  icons.appendChild(editImg);
}

function onCheckBoxClick(e) {
  listItems = Array.from(listContainer.querySelectorAll("li"));
  var clickedItem = e.target;
  let elements = Array.from(listContainer.querySelectorAll(".checkBoxIcon"));
  let icons = Array.from(listContainer.querySelectorAll(".icons"));
  index = elements.indexOf(clickedItem);
  let checkMark = document.querySelectorAll(".CheckMarkIcon")[index];

  checkMark.style.visibility = "visible";
  listItems[index].style.textDecoration = "line-through";
  icons[index].style.pointerEvents = "none";
  listItems[index].style.opacity = 0.6;
}
function onCheckMarkClick(e) {
  console.log(e.traget);
  var clickedItem = event.target;
  let elements = Array.from(listContainer.querySelectorAll(".CheckMarkIcon"));
  let icons = Array.from(listContainer.querySelectorAll(".icons"));
  index = elements.indexOf(clickedItem);
  console.log(index);

  elements[index].style.visibility = "hidden";
  listItems[index].style.textDecoration = "none";
  icons[index].style.pointerEvents = "auto";
  listItems[index].style.opacity = 1;
}
function onEditClick(e) {
  document.querySelector("#btn").innerText = "Update";
  var clickedItem = event.target;
  let listItems = Array.from(listContainer.querySelectorAll(".editIcon"));
  index = listItems.indexOf(clickedItem);
  document.querySelector(".text-box").value =
    document.getElementsByTagName("li")[index].textContent;
}
function onDeleteClick() {
  var clickedItem = event.target;
  let listItems = Array.from(listContainer.querySelectorAll(".deleteIcon"));
  index = listItems.indexOf(clickedItem);
  listContainer.removeChild(listContainer.children[index]);
}
