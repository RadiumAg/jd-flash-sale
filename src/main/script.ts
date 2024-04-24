import { ipcMain } from 'electron'
import { Builder, Browser } from 'selenium-webdriver'
const driver = await new Builder().forBrowser(Browser.CHROME).build()

function initScript() {
  ipcMain.on('start', (event, title) => {})
}

export { initScript }
