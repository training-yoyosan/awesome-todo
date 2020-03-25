<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      label="Task name"
      class="col"
      ref="name"
      :rules="[val => !!val || 'Field is required']"
      clearable
      v-select-all
    />
  </div>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all'

export default {
  name: 'ModalTaskName',
  props: ['name'],
  directives: {
    selectAll
  }
}
</script>

<style scoped>

</style>
