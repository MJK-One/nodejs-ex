function orderCoffee(coffee, time) {
    setTimeout(() => {
        console.log(coffee + ' 제조 완료')
    }, time);
}

orderCoffee('아메리카노', 4000);
orderCoffee('레몬티', 2000);
orderCoffee('아이스커피', 3000);