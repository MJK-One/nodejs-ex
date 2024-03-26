const PI = 3.141592;
function getArea(radius) {
    return PI * radius * radius;
}


function getCircumferenceArea(radius) {
    return 2 * PI * radius;
}

export {PI, getArea, getCircumferenceArea};