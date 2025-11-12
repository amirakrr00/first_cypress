export class Login {

    login_username = 'input[name="username"]'
    login_password = 'input[name="password"]'
    login_click= 'button[type="submit"]'
    
    enterUsername(userName){
      cy.get(this.login_username).type(userName)

    }

    enterPassword(password){
      cy.get(this.login_password).type(password)

    }

    clickLogin(){
       cy.get(this.login_click).click()

    }
}