let count = 0;
const todos = [];

todo = {
  task: '',
  status: '作業中',
};

const showTodo = (element) => {
  const target = document.getElementById('table');
  target.appendChild(element);
};

const createStatusButton = () => {
  const targetStatusButton = document.getElementById('table');
  let statusNow = document.createElement('button');
  statusNow.textContent = todo.status;
  targetStatusButton.appendChild(statusNow);
};

const createDeleteButton = () => {
  const targetDeleteButton = document.getElementById('table');
  let deleteRow = document.createElement('button');
  deleteRow.textContent = '削除';
  targetDeleteButton.appendChild(deleteRow);
};

document.getElementById('add').onclick = function () {
  todo.task = document.getElementById('text').value;

  document.getElementById('text').value = '';

  const task = document.createElement('tr');
  showTodo(task);

  const elementCount = document.createElement('td');
  elementCount.textContent = count;
  showTodo(elementCount);

  const elementTask = document.createElement('td');
  elementTask.textContent = todo.task;
  showTodo(elementTask);

  const elementStatus = document.createElement('td');
  createStatusButton();
  showTodo(elementStatus);

  const elementDelete = document.createElement('td');
  createDeleteButton();
  showTodo(elementDelete);

  todos.push(todo);
  count++;
};
