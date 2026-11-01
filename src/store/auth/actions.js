import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { firebaseAuth } from "../../boot/firebase";
import { Loading, LocalStorage } from "quasar";
import { showErrorMessage } from "../../functions/function-show-error-message";

function registerUser ({ commit }, payload) {
  createUserWithEmailAndPassword(
    firebaseAuth, payload.email, payload.password
  )
    .then(response => {
      console.log("response: ", response);
    })
    .catch(error => {
      showErrorMessage(error.message);
    });
}

function loginUser ({ commit }, payload) {
  Loading.show();

  signInWithEmailAndPassword(
    firebaseAuth, payload.email, payload.password
  )
    .then(response => {
      console.log("response: ", response);
    })
    .catch(error => {
      showErrorMessage(error.message);
    });
}

function logoutUser () {
  signOut(firebaseAuth);
}

function handleAuthStateChange ({ commit, dispatch }) {
  onAuthStateChanged(firebaseAuth, user => {
    if (user) {
      Loading.show({
        message: "Retrieving tasks ..."
      });

      commit("setLoggedIn", true);
      LocalStorage.set("loggedIn", true);

      this.$router.push("/");

      dispatch(
        "tasks/fbReadData",
        null,
        { root: true } // allows to trigger an action which is in a different module
      );
    } else {
      commit("setLoggedIn", false);
      commit("tasks/clearTasks", null, { root: true });
      LocalStorage.set("loggedIn", false);
      this.$router.replace("/auth");
    }
  });
}

export {
  registerUser,
  loginUser,
  handleAuthStateChange,
  logoutUser
}
