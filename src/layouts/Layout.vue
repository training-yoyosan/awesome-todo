<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-banner
        inline-actions
        class="text-white bg-red text-center"
        v-if="!dismissBanner"
      >
        <span class="text-subtitle1">This is a public demo application so don't use any sensitive data!</span>
        <template v-slot:action>
          <q-btn
            type="a"
            icon="fab fa-github-alt"
            href="https://github.com/training-yoyosan/awesome-todo"
            target="_blank"
            color="red"
            label="Fork me"/>
          <q-btn
            icon="close"
            class="q-ml-sm"
            @click="dismissBanner = true"/>
        </template>
      </q-banner>
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

        <q-item
          v-if="$q.platform.is.electron"
          clickable
          @click="quitApp"
          class="text-grey-5 absolute-bottom"
        >
          <q-item-section
            avatar
          >
            <q-icon name="power_settings_new" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Quit</q-item-label>
          </q-item-section>
        </q-item>
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
      dismissBanner: false,
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
    ...mapActions('auth', ['logoutUser']),
    quitApp () {
      if (this.$q.platform.is.electron) {
        this.$q.dialog({
          title: 'Confirm',
          message: 'Would you like to quit the application?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          require('electron').ipcRenderer.send('quit-app')
        })
      }
    }
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
