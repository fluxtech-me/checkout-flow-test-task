import cartItemImg from '../assets/images/cart-item-img.png';
import cartItemImg2 from '../assets/images/cat-carpet-img.png'
import _filter from 'lodash/filter'
import _findIndex from 'lodash/findIndex'
import _map from 'lodash/map'
import { nanoid } from 'nanoid';
import { getRandomNumber } from '../utils/getRandomNumber';
class DB {
    products = [
        {
            id: 1,
            name: 'Bouclé Bungalow “Creme” Cover Bouclé Bungalow “Creme” Cover',
            price: 239.00,
            count: 1,
            totalPrice: 239.00,
            image: cartItemImg2,
        },
        {
            id: 2,
            name: 'Replacement Cover in "Catnip"',
            price: 129.00,
            count: 1,
            totalPrice: 129.00,
            image: cartItemImg,
        },
    ];
    applaiedCoupons = []
    shippingData = [
        { label: 'Free Shipping', value: 'free', price: 0.00, selected: true},
        { label: 'Standard Shipping', value: 'standard', price: 10.00, selected: false},
        { label: 'Express Shipping', value: 'express', price: 30.00, selected: false},
    ]
    checkoutData = {}

    getProducts() {
        return this.products
    }
    updateProductCount(productId, newCount) {
        const updateableProductIndex = _findIndex(this.products, product => product.id === productId)
        const updateableProduct = this.products[updateableProductIndex]
        const updatedProduct = {
            ...updateableProduct,
            count: newCount,
            totalPrice: updateableProduct.price * newCount
        }
        const updatedProsuctsList = [...this.products]
        updatedProsuctsList[updateableProductIndex] = updatedProduct
        this.products = updatedProsuctsList
    }
    deleteProduct(id) {
        this.products = [... _filter(this.products, product => product.id !== id)]
    }
    getApplaiedCoupons() {
        return this.applaiedCoupons
    }
    addCoupon(couponCode) {
        const newCoupon = {
            code: couponCode,
            id: nanoid(),
            sale: getRandomNumber(0, 50)
        }
        const newApplaiedCoupons = [...this.applaiedCoupons, newCoupon]
        this.applaiedCoupons = newApplaiedCoupons
    }
    deleteCoupon(id) {
        this.applaiedCoupons = [..._filter(this.applaiedCoupons, applaiedCoupon => applaiedCoupon.id !== id) ]
    }
    getCountriesList() {
        return this.countriesList
    }
    getShippingData() {
        return this.shippingData
    }
    selectShippingData(value) {
        const updatedShippingData = _map(this.shippingData,
            shipping => (
                {...shipping, selected: value === shipping.value ? true : false}
            )
        )
        this.shippingData = updatedShippingData
    }
    getCheckoutData() {
        return this.checkoutData
    }
    updatedCheckoutData(newData) {
        this.checkoutData = newData
        return this.checkoutData
    }
}

export default new DB()