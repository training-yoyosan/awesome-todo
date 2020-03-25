import Vue from 'vue'

function updateTask (state, payload) {
  Object.assign(state.tasks[payload.id], payload.updates)
}

function deleteTask (state, id) {
  Vue.delete(state.tasks, id)
}

function addTask (state, payload) {
  Vue.set(state.tasks, payload.id, payload.task)
}

function showAddTaskModal (state, flag) {
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
  showAddTaskModal,
  showEditTaskModal,
  setSearch,
  setSortBy
}
