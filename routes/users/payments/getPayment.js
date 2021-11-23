function getPayment(req, res, next) {
    res.status(200).json([
        {
            id: "001",
            paymentMode: "credit card",
        },
        {
            id: "002",
            paymentMode: "debit card",
        },
        {
            id: "003",
            paymentMode: "UPI",
        }
    ])
}

function getPaymentById(req, res, next) {

}

module.exports = {
    getPayment,
    getPaymentById
}
