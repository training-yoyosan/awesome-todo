<template>
  <q-page class="q-pa-lg">

    <no-tasks
      v-if="!Object.keys(tasksTodo).length"
    ></no-tasks>

    <tasks
      :tasks="tasksTodo"
      bgColor="bg-orange-4"
      v-else
    >
      Todo
    </tasks>

    <tasks
      :tasks="tasksCompleted"
      bgColor="bg-green-4"
      class="q-mt-lg"
      v-if="Object.keys(tasksCompleted).length"
    >
      Completed
    </tasks>

    <div class="absolute-bottom text-center">
      <q-btn
        @click="showAddTaskModal(true)"
        size="24px"
        round
        color="primary"
        icon="add"
        class="q-mb-lg"
      />
    </div>

    <q-dialog v-model="addTaskModal">
      <add-task @close="showAddTaskModal(false)"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted', 'addTaskModal'])
  },
  methods: {
    ...mapActions('tasks', ['showAddTaskModal'])
  },
  components: {
    'add-task': require('components/Modals/AddTask.vue').default,
    tasks: require('components/Tasks.vue').default,
    'no-tasks': require('components/Tasks/NoTasks.vue').default
  }
}
</script>

<style>
</style>
