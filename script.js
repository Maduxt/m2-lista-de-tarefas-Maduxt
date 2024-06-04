const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];


function renderElements(tasks) {
  const taskList = document.querySelector('.tasks__list');
  taskList.innerHTML = '';

  for (let i = 0; i < tasks.length; i++) {
    const taskItem = createTaskItem(tasks[i]);
    taskList.appendChild(taskItem);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderElements(tasks)

  const form = document.querySelector('.form__container')
  const inputTitle = document.getElementById('input_title')
  const inputPriority = document.querySelector('.form__input--priority')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const title = inputTitle.value.trim()
    const priority = inputPriority.value

    if (title && priority) {
      const newTask = {title, type: priority}
      tasks.push(newTask)
      renderElements(tasks)

      inputTitle.value = ''
      inputPriority.value = ''
    }
  })
})

function createTaskItem (task) {


 const taskItem  = document.createElement('li')
 taskItem.classList.add('task__item')

 const taskInfo = document.createElement('div')
  taskInfo.classList.add('task-info__container')

 const taskType = document.createElement('span')
  taskType.classList.add('task-type') 

  if (task.type.toLowerCase() === 'urgente') {
    taskType.classList.add('span-urgent')
  } else if (task.type.toLowerCase()  === 'importante') {
    taskType.classList.add('span-important')
  } else if (task.type.toLowerCase()  === 'normal') {
    taskType.classList.add('span-normal')
  }

  const taskTitle = document.createElement('p')
  taskTitle.textContent = task.title

  const removeButton = document.createElement('button');
  removeButton.classList.add('task__button--remove-task');
  removeButton.addEventListener('click', () => removeTask(task));

  taskInfo.appendChild(taskType);
  taskInfo.appendChild(taskTitle);
  taskItem.appendChild(taskInfo);
  taskItem.appendChild(removeButton);

  return taskItem
}

function removeTask(taskToRemove) {
  const taskIndex = tasks.indexOf(taskToRemove);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
  }
  renderElements(tasks);
}
