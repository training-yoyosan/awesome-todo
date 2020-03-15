<template>
  <q-page padding>
    <label>
      <input
        type="text"
        v-model="message"
        @keydown.esc="clearMessage"
        @keydown.enter="alertMessage"
        v-autofocus
        v-bind:class="errorClass"
      />
      <button @click="clearMessage">Clear</button>
      <div>{{ message.length }}</div>
    </label>

    <h3 v-show="message.length > 4">{{ message }}</h3>

    <p>Uppercase message: {{ messageUpperCase }}</p>
    <p>Lowercase message: {{ message | lowerCase }}</p>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      message: 'I love Vue.js!',
      toggleMessage: false
    }
  },
  computed: {
    messageUpperCase () {
      return this.message.toUpperCase()
    },
    errorClass () {
      return this.message.length > 22 ? 'error' : ''
    }
  },
  methods: {
    clearMessage () {
      this.message = ''
    },
    alertMessage () {
      alert(this.message)
    }
  },
  filters: {
    lowerCase (value) {
      return value.toLowerCase()
    }
  },
  directives: {
    autofocus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<style>
  input, button {
    font-size: 2em;
  }

  .error {
    color: red;
    background: pink;
  }

</style>
