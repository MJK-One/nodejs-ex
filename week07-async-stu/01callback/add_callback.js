// ./concept/add_callback.js
function add(a, b, callback) {
    var result = a + b;
    callback(result);
};

add(3, 7, function(result) {
    console.log('더하기 결과(콜백함수): ', result);
});
