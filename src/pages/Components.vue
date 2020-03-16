<template>
  <q-page padding>
    <ul>
      <task
        v-for="task in tasks" :key="task.id"
        :task="task"
        :index="task.id"
      ></task>
    </ul>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to dentist',
          dueDate: '2019/05/12',
          dueTime: '18:30'
        },
        {
          id: 2,
          name: 'Go shopping',
          dueDate: '2019/05/13',
          dueTime: '14:00'
        },
        {
          id: 3,
          name: 'Go to the cinema',
          dueDate: '2019/05/14',
          dueTime: '14:30'
        }
      ]
    }
  },
  methods: {
    deleteTask (index) {
      this.tasks.splice(index, 1)
    }
  },
  components: {
    task: require('components/Task.vue').default
  }
}
</script>

<style>
</style>
