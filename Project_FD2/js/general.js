const goToCart = (id, className) => {
    localStorage.setItem('globalGoodsId', id)
    location.href = 'box.html'
};
