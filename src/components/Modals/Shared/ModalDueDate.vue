<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
      label="Due date"
      clearable
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date
              today-btn
              :value="dueDate"
              @input="handleDueDate"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'ModalDueDate',
  props: ['dueDate'],
  methods: {
    handleDueDate (val) {
      this.$refs.qDateProxy.hide()
      this.$emit('update:dueDate', val)
    }
  }
}
</script>

<style scoped>

</style>
