import  { Given, When, Then }  from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { usuarios } from '../data/usuarios.js'

Given('que acesso a página de login', async function () {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()
})

When('preencho o username e password de administrador', async function () {
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.login(
        usuarios.admin.username,
        usuarios.admin.password
    )
})

When('clico no botão de login', async function () {
    await this.loginPage.btnlogin()
})

Then('devo ver a página inicial', async function () {
   await this.page.waitForLoadState('networkidle')
})