<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form
      autofocus
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-card-section class="q-pt-none">
        <modal-task-name
          ref="taskName"
          :name.sync="taskToSubmit.name"
        />
        <modal-due-date
          :dueDate.sync="taskToSubmit.dueDate"
        />
        <modal-due-time
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />
      </q-card-section>

      <modal-buttons />
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import mixAddEditTask from 'src/mixins/mixin-add-edit-task'

export default {
  mixins: [mixAddEditTask],
  data () {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitTask () {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  }
}
</script>

<style>
</style>
