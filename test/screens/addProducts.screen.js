class ProductsScreen{

    get #newProductTitle(){
        return $('android=new UiSelector().className("android.widget.TextView").text("New Product")')
    }

    get #navigateUp(){
        return $('android=new UiSelector().className("android.widget.ImageButton").description("Navigate up")')
    }
    
    get #addProductImage(){
        return $('id:addImageContainer')
    }

    get #wordPressMediaLibrary(){
        return $('id:textWPMediaLibrary')
    }

    get #recycler(){
        return $('id:recycler')
    }

    get #productImage01(){
        return $('id:recycler')
                .$('android=new UiSelector().className("android.view.ViewGroup").index(11)')
    }

    get #productImage02(){
        return $('id:recycler')
                .$('android=new UiSelector().className("android.view.ViewGroup").index(12)')
    }

    get #productImage03(){
        return $('id:recycler')
                .$('android=new UiSelector().className("android.view.ViewGroup").index(13)')
    }

    get #productImage04(){
        return $('id:recycler')
                .$('android=new UiSelector().className("android.view.ViewGroup").index(14)')
    }

    get #confirmButton(){
        return $('id:mnu_confirm_selection')
    }

    get #productTitle(){
        return $('id:cardsRecyclerView')
                .$('android=new UiSelector().className("androidx.cardview.widget.CardView").index(0)')
                .$('id:cardContainerView')
                .$('id:propertiesRecyclerView')
                .$('android=new UiSelector().className("android.view.ViewGroup").index(0)')
                .$('id:editText')
    }

    get #addProductPrices(){
        return $('android=new UiSelector().className("android.widget.TextView").text("Add price")')
    }

    get #publishButton(){
        return $('id:menu_publish')
    }

    get #screenTitle(){
        return $('id:toolbar')
                .$('android=new UiSelector().className("android.widget.TextView").index(1)')
    }

    get #productPrices(){
        return $('android=new UiSelector().className("androidx.cardview.widget.CardView").index(1)')
                .$('id:cardContainerView')
                .$('id:propertiesRecyclerView')
                .$('android=new UiSelector().className("android.view.ViewGroup").index(0)')
                .$('android=new UiSelector().className("android.view.ViewGroup").index(0)')
                .$('id:textPropertyValue')
    }

    get #backButton(){
        return $('android=new UiSelector().description("Navigate up")')
    }

    async newProductTitleIsExisting(){
        await this.#newProductTitle.waitForExist({ timeout: 30000 })
        return await this.#newProductTitle.isExisting()
    }

    async addProductImages(){
        await this.#addProductImage.click()
        await this.#wordPressMediaLibrary.click()
        await this.#recycler.waitForExist({ timeout: 30000 })
        await this.#productImage01.click()
        await this.#productImage02.click()
        await this.#productImage03.click()
        await this.#productImage04.click()
        await this.#confirmButton.click()
        await this.#navigateUp.click()
    }

    async setProductTitle(productTitle){
        await this.#productTitle.setValue(productTitle)        
    }

    async enterProductPricesPage(){
        await this.#addProductPrices.click()
    }

    async publishNewProduct(){
        await this.#publishButton.click()
    }

    async getScreenTitle(){
        return await this.#screenTitle.getText()
    }

    async getProductPrices(){
        return await this.#productPrices.getText()
    }

    async backToProductsScreen(){
        await this.#backButton.click()
    }
}

module.exports = new ProductsScreen()