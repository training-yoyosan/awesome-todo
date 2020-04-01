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
    this.getSettings()
    this.getTasks()
    this.handleAuthStateChange()
  }
}
</script>
