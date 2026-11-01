import { createStore } from "vuex";

import tasks from "./tasks";
import settings from "./settings";
import auth from "./auth";

export default function () {
  const Store = createStore({
    modules: {
      tasks,
      settings,
      auth
    },

    strict: process.env.DEBUGGING
  });

  return Store;
}
