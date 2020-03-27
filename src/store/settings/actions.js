import { LocalStorage } from 'quasar'

function setShow12HourTimeFormat ({ commit, dispatch }, value) {
  commit('setShow12HourTimeFormat', value)
  dispatch('storeSettings')
}

function setShowTasksInOneList ({ commit, dispatch }, value) {
  commit('setShowTasksInOneList', value)
  dispatch('storeSettings')
}

function storeSettings ({ state }) {
  LocalStorage.set('settings', state.settings)
}

function getSettings ({ commit }) {
  const settings = LocalStorage.getItem('settings')

  if (settings) {
    commit('setSettings', settings)
  }
}

export {
  setShow12HourTimeFormat,
  setShowTasksInOneList,
  storeSettings,
  getSettings
}
