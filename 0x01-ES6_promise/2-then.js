function res() {
    return {
        status: 200,
        body: "success",
    };
}

function err() {
    return new Error();
}

function always() {
    console.log("Got a response from the API");
}

export default function handleResponseFromAPI(promise) {
    return promise.then(res).catch(err).finally(always);
}
