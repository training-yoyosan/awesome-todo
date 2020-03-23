function tasksTodo (state) {
  const tasks = {}

  Object.keys(state.tasks).forEach(function (key) {
    const task = state.tasks[key]
    if (!task.completed) {
      tasks[key] = task
    }
  })

  return tasks
}

function tasksCompleted (state) {
  const tasks = {}

  Object.keys(state.tasks).forEach(function (key) {
    const task = state.tasks[key]
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
  tasksTodo,
  tasksCompleted,
  addTaskModal,
  editTaskModal
}
