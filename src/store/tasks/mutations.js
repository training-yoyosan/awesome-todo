function updateTask (state, payload) {
  state.tasks[payload.id] = Object.assign({}, state.tasks[payload.id], payload.updates)
}

function deleteTask (state, id) {
  delete state.tasks[id]
}

function addTask (state, payload) {
  state.tasks[payload.id] = payload.task
}

function clearTasks (state) {
  state.tasks = {}
}

function setTasks (state, tasks) {
  state.tasks = Object.assign({}, state.tasks, tasks)
}

function toggleAddTaskModal (state, flag) {
  state.showAddTaskModal = flag
}

function showEditTaskModal (state, flag) {
  state.showEditTaskModal = flag
}

function setSearch (state, value) {
  state.search = value
}

function setSortBy (state, value) {
  state.sort = value
}

export {
  updateTask,
  deleteTask,
  addTask,
  toggleAddTaskModal,
  showEditTaskModal,
  setSearch,
  setSortBy,
  setTasks,
  clearTasks
}
