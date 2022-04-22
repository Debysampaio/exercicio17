require('dotenv').config()

const homeScreen = require('../screens/home.screen')
const loginScreen = require('../screens/login.screen')
const myStoreScreen = require('../screens/myStore.screen')
const productsScreen = require('../screens/products.screen')
const addProductsScreen = require('../screens/addProducts.screen')
const addProductsPriceScreen = require('../screens/addProductPrice.screen')

describe('Change Forms Components', () => {

    it('Should enter on site address input', async () =>{
        await homeScreen.goToLogin()        
        expect(await loginScreen.getLabelText()).toEqual("Enter the address of the WooCommerce store you'd like to connect.")
    })

    it('Should request e-mail to login', async () =>{
        await loginScreen.enterSiteAddress(process.env.EBAC_STORE_URL)
        expect(await loginScreen.getInputText()).toEqual('Email address')
    })

    it('Should login with valid credencials', async () =>{
        await loginScreen.enterAccessCredencials(process.env.EBAC_STORE_MANAGER_USERNAME, process.env.EBAC_STORE_MANAGER_PASS)
        expect(await loginScreen.getLabelText()).toEqual('Almost there! We just need to verify your Jetpack connected email address lojaebacqe@gmail.com')
    })

    it('Should confirm the password and access manager panel', async () =>{
        await loginScreen.reenterPassword(process.env.EBAC_STORE_MANAGER_PASS)
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    })

    it('Should enter on add new products page', async () =>{
        await myStoreScreen.enterProductsPage()
        await productsScreen.addProduct()
        await productsScreen.addPhysicalProduct()
        expect(await addProductsScreen.newProductTitleIsExisting()).toBeTruthy()
    })

    it('Should set product title', async () =>{
        await addProductsScreen.addProductImages()
        await addProductsScreen.setProductTitle("Camisa Feminina Branca")
        expect(await addProductsScreen.getScreenTitle()).toEqual("Camisa Feminina Branca")
    })

    it('Should set product prices', async () =>{
        await addProductsScreen.enterProductPricesPage()
        await addProductsPriceScreen.setProductRegularPrice(56.12)
        await addProductsPriceScreen.setProductSalesPrice(47.89)
        await addProductsPriceScreen.backToAddProductScreen()
        expect(await addProductsScreen.getProductPrices()).toContain("Regular price: R$56,12")
        expect(await addProductsScreen.getProductPrices()).toContain("Sale price: R$47,89")
    })

    it('Should publish new product', async () =>{        
        await addProductsScreen.publishNewProduct()
        await addProductsScreen.backToProductsScreen()
        await productsScreen.findPublishedProduct("Camisa Feminina Branca")
        expect(await productsScreen.getProductName()).toEqual("Camisa Feminina Branca")
    })
})