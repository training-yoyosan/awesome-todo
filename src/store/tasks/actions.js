import { uid, LocalStorage, Loading } from 'quasar'
import { firebaseDb, firebaseAuth } from 'boot/firebase'

function updateTask ({ commit, dispatch }, payload) {
  commit('updateTask', payload)
  // dispatch('storeTasks')
}

function deleteTask ({ commit, dispatch }, id) {
  commit('deleteTask', id)
  // dispatch('storeTasks')
}

function addTask ({ commit, dispatch }, task) {
  const payload = {
    id: uid(),
    task
  }
  commit('addTask', payload)
  // dispatch('storeTasks')
}

function storeTasks ({ state }) {
  LocalStorage.set('tasks', state.tasks)
}

function getTasks ({ commit }) {
  const tasks = LocalStorage.getItem('tasks')

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

function fbReadData ({ commit }) {
  const uid = firebaseAuth.currentUser.uid,
    userTasks = firebaseDb.ref('tasks/' + uid)

  userTasks.on('child_added', snapshot => {
    const task = snapshot.val(),
      payload = {
        id: snapshot.key,
        task
      }

    commit('addTask', payload)
  })

  userTasks.on('child_changed', snapshot => {
    const task = snapshot.val(),
      payload = {
        id: snapshot.key,
        updates: task
      }

    commit('updateTask', payload)
  })

  userTasks.on('child_removed', snapshot => {
    const id = snapshot.key
    commit('deleteTask', id)
  })

  Loading.hide()
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
  storeTasks,
  fbReadData
}
