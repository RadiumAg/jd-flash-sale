import { Builder, Browser } from 'selenium-webdriver'
const driver = await new Builder().forBrowser(Browser.CHROME).build()

function initScript() {
  driver.get()
}

export { initScript }
