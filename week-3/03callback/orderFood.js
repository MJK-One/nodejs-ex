function orderFood(callback){
    setTimeout( () => {
        const food = '갈비탕';
        callback(food);
    }, 3000);
}

function cooldownedFood (food, callback){
    setTimeout( () => {
        const cooldownedFood = '식은' + food;
        callback(cooldownedFood);
    }, 3000);
};

function freezeFood (food, callback){
    setTimeout( () => {
        const freezeFood = '냉동' + food;
        callback(freezeFood);
    }, 5000);
};

orderFood( (food) => {
    console.log(food);
    cooldownedFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);
        freezeFood(cooldownedFood, (freezeFood) => {
            console.log(freezeFood);
        })
    })
})