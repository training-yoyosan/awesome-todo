import { app, BrowserWindow, nativeTheme, Menu, ipcMain } from 'electron'
import { menuTemplate } from './electron-main-menu-template'

try {
  if (process.platform === 'win32' && nativeTheme.shouldUseDarkColors === true) {
    require('fs').unlinkSync(require('path').join(app.getPath('userData'), 'DevTools Extensions'))
  }
} catch (_) {
}

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = require('path').join(__dirname, 'statics').replace(/\\/g, '\\\\')
}

export let mainWindow
const menu = Menu.buildFromTemplate(menuTemplate)

/**
 * app events
 */
app.on('ready', () => {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1025,
    height: 600,
    minWidth: 800,
    minHeight: 500,
    center: true,
    autoHideMenuBar: true,
    useContentSize: true,
    webPreferences: {
      devTools: false,
      // Change from /quasar.conf.js > electron > nodeIntegration;
      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: QUASAR_NODE_INTEGRATION,

      // More info: /quasar-cli/developing-electron-apps/electron-preload-script
      // preload: path.resolve(__dirname, 'electron-preload.js')
    }
  })

  mainWindow.loadURL(process.env.APP_URL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  Menu.setApplicationMenu(menu)
})

app.on('window-all-closed', () => {
  app.quit()
})

/**
 * ipc events
 */
ipcMain.on('quit-app', () => {
  app.quit()
})
