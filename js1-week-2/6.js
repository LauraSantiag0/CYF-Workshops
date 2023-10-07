



function printTimesTables(n) {
    let i = 1;
    while(i <= 12) {
        const product = n * i;
        console.log(`${n} * ${i} = ${product}`);
        i++;
    }
}

console.log (printTimesTables(5))