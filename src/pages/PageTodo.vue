<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">
      <div class="row q-mb-md">
        <search />
        <sort />
      </div>

      <q-scroll-area class="q-scroll-area-tasks">
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut absolute-top"
        >
          <no-tasks
            v-if="!Object.keys(tasksTodo).length && !search"
          ></no-tasks>
        </transition>

        <p v-if="search && !Object.keys(tasksCompleted).length && !Object.keys(tasksTodo).length">
          No search results.
        </p>

        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut absolute-top"
        >
          <tasks
            :tasks="tasksTodo"
            bgColor="bg-orange-4"
            v-if="Object.keys(tasksTodo).length"
          >
            Todo
          </tasks>
        </transition>

        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated zoomOut"
        >
          <tasks
            :tasks="tasksCompleted"
            bgColor="bg-green-4"
            class="q-mt-lg q-mb-xl"
            v-if="Object.keys(tasksCompleted).length"
          >
            Completed
          </tasks>
        </transition>
      </q-scroll-area>

      <div class="absolute-bottom text-center no-pointer-events">
        <q-btn
          @click="toggleAddTaskModal(true)"
          size="24px"
          round
          color="primary"
          icon="add"
          class="q-mb-lg all-pointer-events"
        />
      </div>
    </div>

    <q-dialog v-model="addTaskModal">
      <add-task @close="toggleAddTaskModal(false)"/>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapState('tasks', ['search', 'showAddTaskModal']),
    addTaskModal: {
      get () {
        return this.showAddTaskModal
      },
      set (value) {
        this.toggleAddTaskModal(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['toggleAddTaskModal'])
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
.q-scroll-area-tasks {
  display: flex;
  flex-grow: 1;
}
</style>
