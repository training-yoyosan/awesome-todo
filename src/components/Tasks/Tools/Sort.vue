<template>
  <q-select
    filled
    v-model="sortBy"
    :options="options"
    label="Sort by"
    class="col q-ml-sm"
    stack-label
    emit-value
    map-options
    @input="sortSelect"
  />
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Sort',
  data () {
    return {
      options: [
        {
          label: 'Name',
          value: 'name'
        },
        {
          label: 'Date',
          value: 'dueDate'
        }
      ]
    }
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get () {
        return this.sort
      },
      set (value) {
        this.setSortBy(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSortBy'])
  }
}
</script>

<style scoped>
.q-select {
  flex: 0 0 122px;
}
</style>
