function updateProductCase(product, isIncreasing, price) {
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1
    }
    productInput.value = productNumber
    //update case total
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price
    calculateTotal();
}
function getInputTotal(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}

function calculateTotal() {
    const phoneTotal = getInputTotal('phone') * 1219
    const caseTotal = getInputTotal('phone') * 59
    const subTotal = caseTotal + phoneTotal
    const tax = subTotal / 10
    const totalPrice = subTotal + tax
    //update on html
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax-amount').innerText = tax
    document.getElementById('total').innerText = totalPrice
}


//handle phone event 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductCase('phone', true, 1219)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductCase('phone', false, 1219)
})


//handle case event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductCase('case', true, 59)
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductCase('case', false, 59)
})