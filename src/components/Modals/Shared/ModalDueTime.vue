<template>
  <div class="row q-mb-sm">
    <q-input
      outlined
      :value="dueTime"
      @input="$emit('update:dueTime', $event)"
      label="Due time"
      clearable
      class="col"
    >
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy
            ref="qTimeProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-time
              :value="dueTime"
              @input="handleDueTime"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: 'ModalDueTime',
  props: ['dueTime'],
  methods: {
    handleDueTime (val) {
      this.$refs.qTimeProxy.hide()
      this.$emit('update:dueTime', val)
    }
  }
}
</script>

<style scoped>

</style>
