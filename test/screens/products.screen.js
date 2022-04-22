class ProductsScreen{

    get #addProductButton(){
        return $('id:addProductButton')
    }

    get #simplePhysicalProduct(){
        return $('android=new UiSelector().className("android.view.ViewGroup").index(0)')
    }  
    
    get #search(){
        return $('id:menu_search')
    }

    get #searchProducts(){
        return $('id:search_src_text')
    }

    get #productName(){
        return $('id:productsRecycler')
                .$('android=new UiSelector().className("android.view.ViewGroup").index(0)')
                .$('id:productInfoContainer')
                .$('id:productName')
    }

    async addProduct(){
        await this.#addProductButton.click()
    }

    async addPhysicalProduct(){
        await this.#simplePhysicalProduct.click()
    }   
    
    async findPublishedProduct(productTitle){
        await this.#search.click()
        await this.#searchProducts.waitForExist({ timeout:30000 })
        await this.#searchProducts.setValue(productTitle)
    }

    async getProductName(){
        await this.#productName.waitForExist({ timeout:30000 })
        return await this.#productName.getText()
    }
}

module.exports = new ProductsScreen()