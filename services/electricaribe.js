
const fetch = require('node-fetch');

/**
 * 
 * @param { Poliza Inicial ejemplo : 107760 } startPoliza 
 * @param { Numero maximo de iteraciones ejemplo: 100 } end 
 */
function getData(startPoliza, end) {
    let promises = [];
    let poliza = startPoliza;
    for (let i = 0; i < end; i++) {
        promises.push(poliza);
        poliza ++;
    }

    let arrayPro = [];
    promises.forEach((item) => {
        arrayPro.push(
            fetch(`https://pagoselectricaribe.facture.co/DesktopModules/Gateway.Commons/API/Documento/getDocumentoPago?cdPoliza=${item}`)
                .then((resp) => resp.json())
                .then(data => {
                    if (data[0].amt_Valor) {
                        return ({
                            valor: data[0].amt_Valor,
                            estado: data[0].Codigo_EstadoPagoDocumento,
                            numero_documento: data[0].cd_NumeroDocumento,
                            poliza: data[0].cd_Poliza,
                            vencimiento: data[0].dt_Vencimiento
                        });
                    }
                 })
        );
    });

    return Promise.all(arrayPro)
    .then((resul) => {
        return resul.filter((item) => {
            return item != undefined;
        });
    });
}

module.exports = {
 getData  
}