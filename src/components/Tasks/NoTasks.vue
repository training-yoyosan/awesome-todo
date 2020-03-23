<template>
  <q-banner
    rounded
    class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon
        name="check"
        color="primary" />
    </template>
    No tasks left today!
    <template v-slot:action>
      <q-btn
        flat
        color="primary"
        label="Add Task"
        @click="showAddTaskModal(true)"
      />
    </template>
  </q-banner>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'NoTasks',
  methods: {
    ...mapActions('tasks', ['showAddTaskModal'])
  }
}
</script>

<style scoped>

</style>
