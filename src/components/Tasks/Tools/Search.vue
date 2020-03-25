<template>
  <q-input
    outlined
    v-model="searchField"
    label="Search"
    class="col"
    v-select-all
  >
    <template v-slot:append>
      <q-icon
        v-if="searchField !== ''"
        name="close"
        @click="searchField = ''"
        class="cursor-pointer"/>
      <q-icon name="search"/>
    </template>
  </q-input>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { selectAll } from 'src/directives/directive-select-all'

export default {
  name: 'Search',
  computed: {
    ...mapState('tasks', ['search']),
    searchField: {
      get () {
        return this.search
      },
      set (val) {
        this.setSearch(val)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSearch'])
  },
  directives: {
    selectAll
  }
}
</script>

<style scoped>

</style>
