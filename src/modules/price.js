import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter } from "./filters"

const price = () => {
    const inputPriceMin = document.querySelector('#min')
    const inputPriceMax = document.querySelector('#max')

    let minPrice = 0
    let maxPrice = Infinity

    inputPriceMin.addEventListener('input', (event) => {
        minPrice = event.target.value
               
        getData().then((data) => {
            renderGoods(priceFilter(data, minPrice, maxPrice))
        });
        
    })

    inputPriceMax.addEventListener('input', (event) => {
        maxPrice = event.target.value
               
        getData().then((data) => {
            renderGoods(priceFilter(data, minPrice, maxPrice))
        });
        
    })
}

export default price