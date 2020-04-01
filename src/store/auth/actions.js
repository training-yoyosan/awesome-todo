import { firebaseAuth } from '../../boot/firebase'
import { LocalStorage } from 'quasar'
import { showErrorMessage } from '../../functions/function-show-error-message'

function registerUser ({ commit }, payload) {
  firebaseAuth.createUserWithEmailAndPassword(
    payload.email, payload.password
  )
    .then(response => {
      console.log('response: ', response)
    })
    .catch(error => {
      showErrorMessage(error.message)
    })
}

function loginUser ({ commit }, payload) {
  firebaseAuth.signInWithEmailAndPassword(
    payload.email, payload.password
  )
    .then(response => {
      console.log('response: ', response)
    })
    .catch(error => {
      showErrorMessage(error.message)
    })
}

function logoutUser () {
  firebaseAuth.signOut()
}

function handleAuthStateChange ({ commit }) {
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      commit('setLoggedIn', true)
      LocalStorage.set('loggedIn', true)
      this.$router.push('/')
    } else {
      commit('setLoggedIn', false)
      LocalStorage.set('loggedIn', false)
      this.$router.replace('/auth')
    }
  })
}

export {
  registerUser,
  loginUser,
  handleAuthStateChange,
  logoutUser
}
