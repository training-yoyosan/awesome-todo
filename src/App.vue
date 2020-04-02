<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('settings', ['getSettings']),
    ...mapActions('tasks', ['getTasks']),
    ...mapActions('auth', ['handleAuthStateChange'])
  },
  mounted () {
    // check platform
    if (this.$q.platform.is.electron) {
      require('electron').ipcRenderer.on('show-settings', () => {
        this.$router.push('/settings')
      })
    }

    this.getSettings()
    // this.getTasks()
    this.handleAuthStateChange()
  }
}
</script>
