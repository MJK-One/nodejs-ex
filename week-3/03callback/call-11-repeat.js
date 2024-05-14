// function repeat(count) {
//     for(let idx=1; idx<=count; idx++) {
//         console.log(idx);
//     }
// }

// repeat(5);

var repeat = (count, callback) => {
    for(let idx=1; idx<=count; idx++)
        callback(idx);
}

repeat(5, (idx) => {
        console.log(idx);
});