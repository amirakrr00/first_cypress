/// <refrence types="cypress"/>
import { Login } from "../pages/login"
const login= new Login()
describe('all tests',function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(2000)
    })

    it.skip('POM example ', () => {
    
    login.enterUsername('Admin')

    login.enterPassword('admin123')

    login.clickLogin()
    })
})
