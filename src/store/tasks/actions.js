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

function toggleAddTaskModal ({ commit }, flag) {
  commit('toggleAddTaskModal', flag)
}

function showEditTaskModal ({ commit }, flag) {
  commit('showEditTaskModal', flag)
}

function setSearch ({ commit }, value) {
  commit('setSearch', value)
}

function setSortBy ({ commit }, value) {
  commit('setSortBy', value)
}

export {
  updateTask,
  deleteTask,
  addTask,
  toggleAddTaskModal,
  showEditTaskModal,
  setSearch,
  setSortBy
}
