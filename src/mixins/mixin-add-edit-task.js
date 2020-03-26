export default {
  methods: {
    onSubmit () {
      if (!this.$refs.taskName.$refs.name.hasError) {
        this.submitTask()
      }
    }
  },
  components: {
    'modal-header': require('components/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Modals/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Modals/Shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/Modals/Shared/ModalDueTime.vue').default,
    'modal-buttons': require('components/Modals/Shared/ModalButtons.vue').default
  }
}
