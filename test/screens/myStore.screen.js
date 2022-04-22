class MyStoreScreen{

    get #myStoreTitle(){
        return $('id:toolbar_subtitle')
    }

    get #products(){
        return $('id:products')
    }

    async getStoreName(){
        await this.#myStoreTitle.waitForExist({ timeout: 30000 })
        return await this.#myStoreTitle.getText()
    }

    async enterProductsPage(){
        return await this.#products.click()
    }
}

module.exports = new MyStoreScreen()