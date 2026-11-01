import { uid, LocalStorage, Loading } from "quasar";
import {
  get,
  onChildAdded,
  onChildChanged,
  onChildRemoved,
  ref as dbRef,
  remove,
  set,
  update
} from "firebase/database";
import { firebaseDb, firebaseAuth } from "boot/firebase";
import { showErrorMessage } from "../../functions/function-show-error-message";

function updateTask ({ dispatch }, payload) {
  dispatch("fbUpdateTask", payload);
}

function deleteTask ({ dispatch }, id) {
  dispatch("fbDeleteTask", id);
}

function addTask ({ dispatch }, task) {
  const payload = {
    id: uid(),
    task
  };

  dispatch("fbAddTask", payload);
}

function storeTasks ({ state }) {
  LocalStorage.set("tasks", state.tasks);
}

function getTasks ({ commit }) {
  const tasks = LocalStorage.getItem("tasks");

  if (tasks) {
    commit("setTasks", tasks);
  }
}

function toggleAddTaskModal ({ commit }, flag) {
  commit("toggleAddTaskModal", flag);
}

function showEditTaskModal ({ commit }, flag) {
  commit("showEditTaskModal", flag);
}

function setSearch ({ commit }, value) {
  commit("setSearch", value);
}

function setSortBy ({ commit }, value) {
  commit("setSortBy", value);
}

function fbReadData ({ commit }) {
  const uid = firebaseAuth.currentUser.uid;
  const userTasks = dbRef(firebaseDb, "tasks/" + uid);

  get(userTasks).then(() => {
    Loading.hide();
  }).catch(error => {
    showErrorMessage(error.message);
    this.$router.replace("/auth");
  });

  // listen on new tasks being added
  onChildAdded(userTasks, snapshot => {
    const task = snapshot.val();
    const payload = {
      id: snapshot.key,
      task
    };

    commit("addTask", payload);
  });

  // listen on tasks being changed
  onChildChanged(userTasks, snapshot => {
    const task = snapshot.val();
    const payload = {
      id: snapshot.key,
      updates: task
    };

    commit("updateTask", payload);
  });

  // listen on tasks being deleted
  onChildRemoved(userTasks, snapshot => {
    const id = snapshot.key;
    commit("deleteTask", id);
  });
}

function fbAddTask ({ commit }, payload) {
  const uid = firebaseAuth.currentUser.uid;
  const taskRef = dbRef(firebaseDb, "tasks/" + uid + "/" + payload.id);

  set(taskRef, payload.task).catch(error => {
    showErrorMessage(error.message);
  });
}

function fbUpdateTask ({ commit }, payload) {
  const uid = firebaseAuth.currentUser.uid;
  const taskRef = dbRef(firebaseDb, "tasks/" + uid + "/" + payload.id);

  update(taskRef, payload.updates).catch(error => {
    showErrorMessage(error.message);
  });
}

function fbDeleteTask ({ commit }, taskId) {
  const uid = firebaseAuth.currentUser.uid;
  const taskRef = dbRef(firebaseDb, "tasks/" + uid + "/" + taskId);

  remove(taskRef).catch(error => {
    showErrorMessage(error.message);
  });
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
