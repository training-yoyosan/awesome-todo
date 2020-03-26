<template>
  <q-card-section class="row">
    <div class="text-h6">
      <slot></slot>
    </div>
    <q-space />
    <q-btn
      dense
      flat
      round
      icon="close"
      @click="closeModal"
      v-close-popup
    ></q-btn>
  </q-card-section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ModalHeader',
  methods: {
    ...mapActions('tasks', ['toggleAddTaskModal', 'showEditTaskModal']),
    closeModal () {
      this.toggleAddTaskModal(false)
      this.showEditTaskModal(false)
    }
  }
}
</script>

<style scoped>

</style>
