import  { Given, When, Then }  from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { usuarios } from '../data/usuarios.js'
import { HomePage } from '../pages/HomePage.js'

Given('que estou logado e na pagina inicial', async function () {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()
    await this.loginPage.login(
        usuarios.admin.username,
        usuarios.admin.password
    )
    await this.loginPage.btnlogin()
})

When('clico em perfil e trocar tema', async function () {
    this.homePage = new HomePage(this.page)
    await this.homePage.trocartema()
})

When('seleciono um tema criado e clico em salvar', async function () {
    await this.homePage.escolhertema()
    await this.page.waitForTimeout(2000)
    await this.homePage.aplicartema()
})

Then('devo ver o novo tema', async function () {
    await this.page.waitForTimeout(5000)
    const logo = this.page.locator('header img.logo')
    await expect(logo).not.toHaveAttribute('src', /theme\/image\.php/)
   
})