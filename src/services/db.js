import cartItemImg from '../assets/images/cart-item-img.png';
import _filter from 'lodash/filter'
import _findIndex from 'lodash/findIndex'
import { nanoid } from 'nanoid';
import { getRandomNumber } from '../utils/getRandomNumber';

class DB {
    products = [
        {
            id: 1,
            name: 'Bouclé Bungalow “Creme” Cover Bouclé Bungalow “Creme” Cover',
            price: 200.00,
            count: 1,
            totalPrice: 200.00,
            image: cartItemImg,
        },
        {
            id: 2,
            name: 'Bouclé Bungalow “Creme” Cover Bouclé Bungalow “Creme” Cover',
            price: 129.00,
            count: 1,
            totalPrice: 129.00,
            image: cartItemImg,
        },
    ];
    applayedCoupons = []
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
    getApplayedCoupons() {
        return this.applayedCoupons
    }
    addCoupon(couponCode) {
        const newCoupon = {
            code: couponCode,
            id: nanoid(),
            sale: getRandomNumber(0, 50)
        }
        const newApplayedCoupons = [...this.applayedCoupons, newCoupon]
        this.applayedCoupons = newApplayedCoupons
    }
    deleteCoupon(id) {
        this.applayedCoupons = [..._filter(this.applayedCoupons, applayedCoupon => applayedCoupon.id !== id) ]
    }
}

export default new DB()