<template>
  <q-page class="q-pa-lg">

    <div class="row q-mb-md">
      <search />
      <sort />
    </div>

    <no-tasks
      v-if="!Object.keys(tasksTodo).length && !search"
    ></no-tasks>

    <p v-if="search && !Object.keys(tasksCompleted).length && !Object.keys(tasksTodo).length">
      No search results.
    </p>

    <tasks
      :tasks="tasksTodo"
      bgColor="bg-orange-4"
      v-if="Object.keys(tasksTodo).length"
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
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted', 'addTaskModal']),
    ...mapState('tasks', ['search'])
  },
  methods: {
    ...mapActions('tasks', ['showAddTaskModal'])
  },
  components: {
    'add-task': require('components/Modals/AddTask.vue').default,
    tasks: require('components/Tasks.vue').default,
    'no-tasks': require('components/Tasks/NoTasks.vue').default,
    search: require('components/Tasks/Tools/Search.vue').default,
    sort: require('components/Tasks/Tools/Sort.vue').default
  }
}
</script>

<style>
</style>
