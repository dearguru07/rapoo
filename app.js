let array = [];

function exicuteTask() {
  let input = document.getElementById("input").value;
  array.push(input);
  console.log(array);

  let itemscontainer = document.getElementById("itemsContainer");

  let todoListItems = document.createElement("div");
  let chechBox = document.createElement("input");
  chechBox.type = "checkbox";
  let para = document.createElement("p");
  para.innerHTML = input;
  document.getElementById("input").value=''
  todoListItems.classList.add("todo-flex");
  chechBox.classList.add("box");

  todoListItems.appendChild(chechBox);
  todoListItems.appendChild(para);
  itemscontainer.appendChild(todoListItems);
}
