import { boot } from "quasar/wrappers";
import { LocalStorage } from "quasar";
import createStore from "../store";

export default boot(({ router, app }) => {
  const store = typeof createStore === "function" ? createStore() : createStore;

  // install vuex (app-webpack 4 no longer auto-installs src/store)
  app.use(store);

  // restore the quasar v1 behavior of exposing the router on the store,
  // vuex actions in this app call this.$router
  store.$router = router;

  router.beforeEach((to) => {
    const loggedIn = LocalStorage.getItem("loggedIn");

    if (!loggedIn && to.path !== "/auth") {
      return "/auth";
    }
  });
});
