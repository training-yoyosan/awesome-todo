<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          class="absolute-right"
          label="Login"/>

        <q-btn
          v-else
          @click="logoutUser"
          flat
          icon-right="account_circle"
          class="absolute-right"
          label="Logout"/>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs
        indicator-color="gray-5"
        class="bg-primary text-white shadow-3"
      >
        <q-route-tab
          v-for="link in essentialLinks"
          :key="link.title"
          :to="link.link"
          exact
          :icon="link.icon"
          :label="link.title"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      :width="250"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MainLayout',

  computed: {
    ...mapState('auth', ['loggedIn'])
  },

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Todo',
          caption: 'Add tasks.',
          icon: 'list',
          link: '/'
        },
        {
          title: 'Settings',
          caption: 'Settings for the Todo app.',
          icon: 'settings',
          link: '/settings'
        }
      ]
    }
  },

  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>

<style>
  @media screen and (min-width: 1023px) {
    .q-footer {
      display: none;
    }
  }
</style>
