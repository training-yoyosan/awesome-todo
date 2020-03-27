<template>
  <div>
    <q-banner
      dense
      inline-actions
      :class="bgColor"
      class="text-white text-center list-header"
      v-if="! settings.showTasksInOneList"
    >
        <span class="text-bold text-subtitle1">
          <slot></slot>
        </span>
    </q-banner>
    <q-list
      separator
      bordered>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TasksTodo',
  props: ['tasks', 'bgColor'],
  computed: {
    ...mapGetters('settings', ['settings'])
  },
  components: {
    task: require('components/Tasks/Task.vue').default
  }
}
</script>

<style scoped>
  .list-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
