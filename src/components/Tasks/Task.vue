<template>
  <q-item
    tag="label"
    :class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    v-touch-hold:1000.mouse="showTaskModal"
    v-ripple>
    <q-item-section side top>
      <q-checkbox
        :value="task.completed"
        class="no-pointer-events"
      />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strike': task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)"
      >
      </q-item-label>
    </q-item-section>

    <q-item-section
      v-if="task.dueDate"
      side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-sm" />
        </div>
        <div class="column">
          <q-item-label
            class="row justify-end"
            caption>
            {{ task.dueDate | niceDate }}
          </q-item-label>
          <q-item-label
            class="row justify-end"
            caption>
            <small>{{ task.dueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showTaskModal"
          flat
          round
          color="primary"
          dense
          icon="edit" />
        <q-btn
          @click.stop="promptDelete(id)"
          flat
          round
          color="red"
          dense
          icon="delete" />
      </div>
    </q-item-section>

    <q-dialog v-model="showModal">
      <edit-task
        :task="task"
        :id="id"
        @close="showModal = false"
      />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { date } from 'quasar'
const { formatDate } = date

export default {
  props: ['task', 'id'],
  data () {
    return {
      showModal: false,
      selectedId: ''
    }
  },
  computed: {
    ...mapGetters('tasks', ['editTaskModal']),
    ...mapState('tasks', ['search'])
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask', 'showEditTaskModal']),
    showTaskModal () {
      this.showModal = true
    },
    promptDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: {
          push: true,
          color: 'negative'
        },
        ok: {
          push: true,
          color: 'primary'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  filters: {
    niceDate (value) {
      return formatDate(value, 'MMM D')
    },
    searchHighlight (value, search) {
      if (search) {
        const searchRegex = new RegExp(search, 'ig')
        return value.replace(searchRegex, (match) => {
          return '<span class="bg-yellow-6">' + match + '</span>'
        })
      }

      return value
    }
  },
  components: {
    'edit-task': require('components/Modals/EditTask.vue').default
  }
}
</script>

<style>

</style>
