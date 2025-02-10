var mobile={
    company : "vivo",
    series : "v27",
    price :33000,
    color:"blue"
};
console.log(mobile.company)

console.log(mobile["price"])
// prints the index and values in table
console.table(mobile)




// output
vivo
33000
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ company │ 'vivo' │
│ series  │ 'v27'  │
│ price   │ 33000  │
│ color   │ 'blue' │
└─────────┴────────┘
