fetch(
    "https://api.currencyfreaks.com/latest?apikey=d4dd432f01664cea97048a9c06244cfe&format=json"
)
    .then((result) => {
        return result.json();
    })
    .then((res) => {
        console.log(res.rates);
        let eur = document.querySelector("#eur"),
            eurText = document.createTextNode(
                parseFloat(res.rates["EUR"]).toFixed(2)
            );
        eur.prepend(eurText);

        let egp = document.querySelector("#egp"),
            egpText = document.createTextNode(
                parseFloat(res.rates["EGP"]).toFixed(2)
            );
        egp.prepend(egpText);

        let sar = document.querySelector("#sar"),
            sarText = document.createTextNode(
                parseFloat(res.rates["SAR"]).toFixed(2)
            );
        sar.prepend(sarText);
    });
