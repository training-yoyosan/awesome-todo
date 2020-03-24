function tasksFiltered (state) {
  const tasks = {}

  if (state.search) {
    Object.keys(state.tasks).forEach(function (key) {
      const task = state.tasks[key]

      if (task.name.toLowerCase().includes(state.search.toLowerCase())) {
        tasks[key] = task
      }
    })
  } else {
    return state.tasks
  }

  return tasks
}

function tasksTodo (state, getters) {
  const tasks = {}
  const tasksFiltered = getters.tasksFiltered

  Object.keys(tasksFiltered).forEach(function (key) {
    const task = tasksFiltered[key]
    if (!task.completed) {
      tasks[key] = task
    }
  })

  return tasks
}

function tasksCompleted (state, getters) {
  const tasks = {}
  const tasksFiltered = getters.tasksFiltered

  Object.keys(tasksFiltered).forEach(function (key) {
    const task = tasksFiltered[key]
    if (task.completed) {
      tasks[key] = task
    }
  })

  return tasks
}

function addTaskModal (state) {
  return state.showAddTaskModal
}

function editTaskModal (state) {
  return state.showEditTaskModal
}

export {
  tasksFiltered,
  tasksTodo,
  tasksCompleted,
  addTaskModal,
  editTaskModal
}
