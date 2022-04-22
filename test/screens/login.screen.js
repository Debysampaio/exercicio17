class LoginScreen{

    get #label(){
        return $('id:label')
    }

    get #input(){
        return $('id:input')
    }

    get #continueButton(){
        return $('id:bottom_button')
    }

    get #loginSiteCreds(){
        return $('id:login_site_creds')
    }

    get #username(){
        return $('android=new UiSelector().text("Username")')
    }

    get #password(){
        return $('android=new UiSelector().text("Password")')
    }

    get #loginEnterPassordButton(){
        return $('id:login_enter_password')
    }

    async getLabelText(){
        return await this.#label.getText()
    }

    async getInputText(){
        return await this.#input.getText()
    }

    async enterSiteAddress(input) { 
        await this.#input.setValue(input)
        await this.#continueButton.click()
    }

    async enterAccessCredencials(userName, password){
        await this.#loginSiteCreds.click()
        await this.#username.setValue(userName)
        await this.#password.setValue(password)
        await this.#continueButton.click()
    }

    async reenterPassword(password){
        await this.#loginEnterPassordButton.click()
        await this.#password.setValue(password)
        await this.#continueButton.click()
    }
}

module.exports = new LoginScreen()