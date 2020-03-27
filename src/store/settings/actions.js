function setShow12HourTimeFormat ({ commit }, value) {
  commit('setShow12HourTimeFormat', value)
}

function setShowTasksInOneList ({ commit }, value) {
  commit('setShowTasksInOneList', value)
}

export {
  setShow12HourTimeFormat,
  setShowTasksInOneList
}
