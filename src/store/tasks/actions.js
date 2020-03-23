import { uid } from 'quasar'

function updateTask ({ commit }, payload) {
  commit('updateTask', payload)
}

function deleteTask ({ commit }, id) {
  commit('deleteTask', id)
}

function addTask ({ commit }, task) {
  const payload = {
    id: uid(),
    task
  }
  commit('addTask', payload)
}

function showAddTaskModal ({ commit }, flag) {
  commit('showAddTaskModal', flag)
}

function showEditTaskModal ({ commit }, flag) {
  commit('showEditTaskModal', flag)
}

export {
  updateTask,
  deleteTask,
  addTask,
  showAddTaskModal,
  showEditTaskModal
}
