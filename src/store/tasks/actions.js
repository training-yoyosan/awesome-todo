import { uid, LocalStorage } from 'quasar'

function updateTask ({ commit, dispatch }, payload) {
  commit('updateTask', payload)
  dispatch('storeTasks')
}

function deleteTask ({ commit, dispatch }, id) {
  commit('deleteTask', id)
  dispatch('storeTasks')
}

function addTask ({ commit, dispatch }, task) {
  const payload = {
    id: uid(),
    task
  }
  commit('addTask', payload)
  dispatch('storeTasks')
}

function storeTasks ({ state }) {
  console.log('storeTasks')
  LocalStorage.set('tasks', state.tasks)
}

function getTasks ({ commit }) {
  const tasks = LocalStorage.getItem('tasks')

  console.log(tasks)

  if (tasks) {
    commit('setTasks', tasks)
  }
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
  setSortBy,
  getTasks,
  storeTasks
}
