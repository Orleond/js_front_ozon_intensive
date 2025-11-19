const counterGoods = () => {    
    const counter = document.querySelector('.counter')    
    const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : [];

    counter.textContent = cart.length
}

export default counterGoods