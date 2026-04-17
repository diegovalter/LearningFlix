import  { Given, When, Then }  from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { usuarios } from '../data/usuarios.js'
import { HomePage } from '../pages/HomePage.js'
import { AdminPage } from '../pages/AdminPage.js'

Given('que estou logado como {string}', async function (usuario) {
    const dadosUsuario = usuarios[usuario]
    this.loginPage = new LoginPage(this.page)
    await this.loginPage.navigate()
    await this.loginPage.login(
        dadosUsuario.username,
        dadosUsuario.password
    )
    await this.loginPage.btnlogin()
})

When('acesso o Gerenciamento de Temas', async function () {
    this.homePage = new HomePage(this.page)
    await this.homePage.admsite()
})

When('clico em Editar na variante desejada', async function () {
    this.adminPage = new AdminPage(this.page)
    await this.adminPage.temas()
})

When('localizo o campo Logo', async function () {

})

When('faço upload do arquivo .jpeg', async function () {

})

When('clico em Salvar', async function () {

})

Then('o logo é salvo com sucesso', async function () {

   
})