import { configure } from 'quasar/wrappers';

export default configure(function (ctx) {
  return {
    boot: [
      'firebase',
      'router-auth'
    ],

    css: [
      'app.sass'
    ],

    extras: [
      'fontawesome-v5',
      'roboto-font',
      'material-icons'
    ],

    framework: {
      iconSet: 'material-icons',
      lang: 'en-US',
      plugins: [
        'Dialog',
        'LocalStorage',
        'Loading'
      ]
    },

    build: {
      vueRouterMode: 'hash'
    },

    devServer: {
      https: false,
      port: 8080,
      open: false
    },

    animations: [
      'zoomIn',
      'zoomOut'
    ]
  };
});
