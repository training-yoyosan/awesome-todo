function tasksSorted (state) {
  const tasksSorted = {},
    keysOrdered = Object.keys(state.tasks)

  keysOrdered.sort((a, b) => {
    const taskAProp = state.tasks[a][state.sort].toLowerCase(),
      taskBProp = state.tasks[b][state.sort].toLowerCase()

    if (taskAProp > taskBProp) {
      return 1
    } else if (taskAProp < taskBProp) {
      return -1
    } else {
      return 0
    }
  })

  keysOrdered.forEach((key) => {
    tasksSorted[key] = state.tasks[key]
  })

  return tasksSorted
}

function tasksFiltered (state, getters) {
  const tasks = {},
    tasksOrdered = getters.tasksSorted

  if (state.search) {
    Object.keys(tasksOrdered).forEach(function (key) {
      const task = tasksOrdered[key]

      if (task.name.toLowerCase().includes(state.search.toLowerCase())) {
        tasks[key] = task
      }
    })

    return tasks
  }

  return tasksOrdered
}

function tasksTodo (state, getters) {
  const tasks = {},
    tasksFiltered = getters.tasksFiltered

  Object.keys(tasksFiltered).forEach(function (key) {
    const task = tasksFiltered[key]
    if (!task.completed) {
      tasks[key] = task
    }
  })

  return tasks
}

function tasksCompleted (state, getters) {
  const tasks = {},
    tasksFiltered = getters.tasksFiltered

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
  tasksSorted,
  tasksFiltered,
  tasksTodo,
  tasksCompleted,
  addTaskModal,
  editTaskModal
}
