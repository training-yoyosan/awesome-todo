<template>
  <q-form @submit="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon
            name="account_circle"
            color="primary"
          />
        </template>
        {{ tab | capitalize }} in order to access your Todos everywhere!
      </q-banner>
    </div>

    <div class="row q-mb-md">
      <q-input
        filled
        v-model="formData.email"
        label="Email"
        stack-label
        class="col"
        :rules="[
          val => isValidEmail(val) || 'Please use a valid email address.',
        ]"
        lazy-rules
      />
    </div>

    <div class="row q-mb-md">
      <q-input
        filled
        v-model="formData.password"
        label="Password"
        type="password"
        stack-label
        class="col"
        :rules="[
          val => val.length >= 6 || 'Please use at least 6 characters.',
        ]"
        lazy-rules
      />
    </div>

    <div class="row">
      <q-space />
      <q-btn
        type="submit"
        color="primary"
        :label="tab | capitalize"
      />
    </div>

  </q-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['tab'],
  data () {
    return {
      formData: {
        email: 'gigi@test.com',
        password: 'parola123'
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    isValidEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      return re.test(String(email).toLowerCase())
    },
    submitForm () {
      switch (this.tab) {
        case 'login':
          this.loginUser(this.formData)
          break
        case 'register':
          this.registerUser(this.formData)
          break
      }
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style scoped>
</style>
