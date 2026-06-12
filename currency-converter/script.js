let inpAmount = document.querySelector("#input_amount");
let convert = document.querySelector("#button");

let ipNum = document.querySelector("#input_number");
let ipCurr = document.querySelector("#input_currency");
let opNum = document.querySelector("#output_number");
let opCurr = document.querySelector("#output_currency");

let inpCurrency = document.querySelector("#select1");
let outCurrency = document.querySelector("#select2");

let lol;

// 1 USD = 83.49 INR
// 1 USD = 0.92 EUR
// 1 USD = 155.94 JPY
// 1 USD = 89.89 RUB

convert.addEventListener("click", () => {

    let var1 = inpAmount.value;

    if(inpAmount.value > 0){
        ipNum.innerText = inpAmount.value;
    }

    ipCurr.innerText = inpCurrency.value;
    opCurr.innerText = outCurrency.value;

    if(inpCurrency.value == "USD"){
        if(outCurrency.value == "INR"){
            lol = var1 * 83.53;
        }
        if(outCurrency.value == "USD"){
            lol = var1;
        }
        if(outCurrency.value == "JPY"){
            lol = var1 * 155.94;
        }
        if(outCurrency.value == "RUB"){
            lol = var1 * 89.89;
        }
    }

    if(inpCurrency.value == "INR"){
        if(outCurrency.value == "INR"){
            lol = var1;
        }
        if(outCurrency.value == "USD"){
            lol = var1 / 83.53;
        }
        if(outCurrency.value == "JPY"){
            lol = var1 * 1.86;
        }
        if(outCurrency.value == "RUB"){
            lol = 1.07 * var1;
        }
    }

    if(inpCurrency.value == "JPY"){
        if(outCurrency.value == "INR"){
            lol = var1 / 1.88;
        }
        if(outCurrency.value == "USD"){
            lol = var1 / 157.09;
        }
        if(outCurrency.value == "JPY"){
            lol = var1;
        }
        if(outCurrency.value == "RUB"){
            lol = var1 / 1.77;
        }
    }

    if(inpCurrency.value == "RUB"){
        if(outCurrency.value == "INR"){
            lol = var1 / 1.07;
        }
        if(outCurrency.value == "USD"){
            lol = var1 / 89;
        }
        if(outCurrency.value == "JPY"){
            lol = var1 * 1.77;
        }
        if(outCurrency.value == "RUB"){
            lol = var1;
        }
    }

    opNum.innerText = lol;

});

