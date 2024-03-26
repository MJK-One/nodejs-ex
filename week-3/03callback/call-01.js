function main(value) {
    value();
}

function sub() {
    console.log("SUB");
}
main(sub)