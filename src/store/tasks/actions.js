import { uid, LocalStorage, Loading } from 'quasar'
import { firebaseDb, firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from '../../functions/function-show-error-message'

function updateTask ({ dispatch }, payload) {
  dispatch('fbUpdateTask', payload)
}

function deleteTask ({ dispatch }, id) {
  dispatch('fbDeleteTask', id)
}

function addTask ({ dispatch }, task) {
  const payload = {
    id: uid(),
    task
  }

  dispatch('fbAddTask', payload)
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

  userTasks.once('value', () => {
    Loading.hide()
  }, error => {
    if (error) {
      showErrorMessage(error.message)
      this.$router.replace('/auth')
    }
  })

  // listen on new tasks being added
  userTasks.on('child_added', snapshot => {
    const task = snapshot.val(),
      payload = {
        id: snapshot.key,
        task
      }

    commit('addTask', payload)
  }, error => {
    if (error) {
      showErrorMessage(error.message)
    }
  })

  // listen on tasks being changed
  userTasks.on('child_changed', snapshot => {
    const task = snapshot.val(),
      payload = {
        id: snapshot.key,
        updates: task
      }

    commit('updateTask', payload)
  }, error => {
    if (error) {
      showErrorMessage(error.message)
    }
  })

  // listen on tasks being deleted
  userTasks.on('child_removed', snapshot => {
    const id = snapshot.key
    commit('deleteTask', id)
  }, error => {
    if (error) {
      showErrorMessage(error.message)
    }
  })
}

function fbAddTask ({ commit }, payload) {
  const uid = firebaseAuth.currentUser.uid,
    taskRef = firebaseDb.ref('tasks/' + uid + '/' + payload.id)

  taskRef.set(payload.task, error => {
    if (error) {
      showErrorMessage(error.message)
    }
  })
}

function fbUpdateTask ({ commit }, payload) {
  const uid = firebaseAuth.currentUser.uid,
    taskRef = firebaseDb.ref('tasks/' + uid + '/' + payload.id)

  taskRef.update(payload.updates, error => {
    if (error) {
      showErrorMessage(error.message)
    }
  })
}

function fbDeleteTask ({ commit }, taskId) {
  const uid = firebaseAuth.currentUser.uid,
    taskRef = firebaseDb.ref('tasks/' + uid + '/' + taskId)

  taskRef.remove(error => {
    if (error) {
      showErrorMessage(error.message)
    }
  })
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
  fbReadData,
  fbAddTask,
  fbUpdateTask,
  fbDeleteTask
}
