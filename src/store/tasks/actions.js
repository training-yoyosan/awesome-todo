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

export {
  updateTask,
  deleteTask,
  addTask
}
