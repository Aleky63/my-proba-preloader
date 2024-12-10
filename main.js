const btnEl = document.querySelector("button");

btnEl.addEventListener("click", (event) => {
  console.log(event);
});

const todoItemEls = document.querySelectorAll(".todo__item");

todoItemEls.forEach((todoItemEl) => {
  todoItemEl.addEventListener("click", () => {
    todoItemEl.classList.add("is-color");
  });
});
const onTodoItemClick = (todoItemEl) => {
  todoItemEl.classList.add("is-color");
};

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("todo__item"))
    if (event.target.closest(".todo__item")) {
      onTodoItemClick(event.target.closest(".todo__item"));
    }
});

const addTodoItem = () => {
  const todoListEl = document.querySelector(".todo__list");
  const newTodoItemEl = `<li class="todo__item"><span>OOOOOO</span></li>`;
  todoListEl.insertAdjacentHTML("beforeend", newTodoItemEl);
};

addTodoItem();
addTodoItem();

const sectionElements = document.querySelectorAll(".section");

const animateSections = () => {
  sectionElements.forEach((sectionElement) => {
    sectionElement.classList.add("is-visible");
  });
};

const preloaderElement = document.querySelector(".preloader");
preloaderElement.addEventListener("animationend", (event) => {
  if (event.animationName === "fade-out") {
    animateSections();
  }
});
