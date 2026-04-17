export class AdminPage {
    constructor(page) {
    this.page = page
    this.plugins = page.locator('[data-text="Plugins"]')
    this.aparencia = page.locator('[data-text="Aparência"]')

    }

    async temas(){
        await this.aparencia.click()
    }




}