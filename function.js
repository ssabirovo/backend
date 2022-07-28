const mainInput = document.getElementById("container__input");
const addTodo = document.getElementById("addTodo");
const editTodocha = document.getElementById("editTodocha");
const todos = document.querySelector(".todos");

let user = {
  name: "",
  password: "",
  todosBase: [],
};
let idcha = 0;

function remove(id) {
  let inputId = document.getElementById(`${id}`);
  inputId.remove();
}

addTodo.addEventListener("click", () => {
  let todo = document.createElement("div");
  todo.id = idcha;
  todo.className = "todo";
  todo.innerHTML = `<div  id='todo${idcha}' type="text" >${
    mainInput.value
  } </div>
  <button onclick=remove(${idcha})>remove</button>
  <button onclick=edit(${idcha++})>edit</button>`;
  user.todosBase.push({
    id: user
  });
  console.log(user);
  todos.appendChild(todo);
  mainInput.value = "";
});

function edit(idx) {
  mainInput.value = user.todosBase[idx];
  const todo = document.getElementById(`todo${idx}`);

  editTodocha.addEventListener("click", () => {
    console.log(mainInput.value, "Main");
    todo.innerText = mainInput.value;
    user.todosBase[idx] = mainInput.value;
  });
}

