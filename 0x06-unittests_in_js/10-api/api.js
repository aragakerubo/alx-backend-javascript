// 10. Deep equality & Post integration testing

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to the payment system");
});

app.get("/cart/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.status(404).send(
            `<!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>Error</title>
                </head>
                <body>
                    <pre>Cannot GET /cart/hello</pre>
                </body>
            </html>`
        );
    } else {
        res.send(`Payment methods for cart ${req.params.id}`);
    }
});

app.get("/available_payments", (req, res) => {
    res.send({
        payment_methods: {
            credit_cards: true,
            paypal: false,
        },
    });
});

app.post("/login", express.json(), (req, res) => {
    const userName = req.body.userName;

    if (!userName) {
        return res.status(400).send("Missing userName");
    }

    res.status(200).send(`Welcome ${userName}`);
});

app.listen(7865, () => {
    console.log("API available on localhost port 7865");
});
