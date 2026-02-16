console.log("A")
setTimeout(() => {
    console.log("B")
}, 0);
Promise.resolve().then(() => {
    console.log("C")
    setTimeout(() => {
        console.log("D")
    }, 0);
}).then(() => {
    console.log("E")
});
queueMicrotask(() => {
    console.log("F")
});
console.log("G")
