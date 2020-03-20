<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add task</div>
      <q-space />
      <q-btn
        dense
        flat
        round
        icon="close"
        v-close-popup
      ></q-btn>
    </q-card-section>

    <q-form
      autofocus
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToAdd.name"
            label="Task name"
            class="col"
            ref="name"
            :rules="[val => !!val || 'Field is required']"
            clearable
          />
        </div>

        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToAdd.dueDate"
            label="Due date"
            clearable
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="taskToAdd.dueDate" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToAdd.dueTime"
            label="Due time"
            v-if="taskToAdd.dueDate"
            clearable
            class="col"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToAdd.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          type="submit"
          label="Save"
          color="primary"/>
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      taskToAdd: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    onSubmit () {
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      this.addTask(this.taskToAdd)
      this.$emit('close')
    }
  }
}
</script>

<style>
</style>
