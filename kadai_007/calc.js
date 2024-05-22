// 1から100までの値
let num = Math.floor(Math.random() * 100) +1;

// 3の倍数と5の倍数
if ( num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
    //３の倍数
} else  if ( num % 3 == 0) {
    console.log("3の倍数です");
    //5の倍数
} else if ( num % 5 == 0) {
    console.log("5の倍数です");
}
