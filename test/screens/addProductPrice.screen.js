class ProductsScreen{

    get #regularPrice(){
        return $('id:product_regular_price')
                .$('android=new UiSelector().className("android.widget.FrameLayout")')
                .$('id:edit_text')
    }

    get #salePrice(){
        return $('id:product_sale_price')
                .$('android=new UiSelector().className("android.widget.FrameLayout")')
                .$('id:edit_text')
    }

    get #backButton(){
        return $('android=new UiSelector().description("Navigate up")')
    }

    async setProductRegularPrice(price){
        await this.#regularPrice.setValue(price)
    }

    async setProductSalesPrice(price){
        await this.#salePrice.setValue(price)
    }

    async backToAddProductScreen(){
        await this.#backButton.click()
    }
}

module.exports = new ProductsScreen()