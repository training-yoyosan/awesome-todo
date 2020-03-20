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

export {
  updateTask,
  deleteTask,
  addTask
}
