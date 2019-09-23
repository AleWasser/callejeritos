// import mercadopago from 'mercadopago';

// mercadopago.configure({
//     access_token: 'TEST-8771755164387177-092318-a9db6d7625dea127eec55163b6348817-214223563'
// });

// // Crea un objeto de preferencia
// let preference = {
//     items: [{
//         title: 'Mi producto',
//         unit_price: 100,
//         quantity: 1,
//     }]
// };

// mercadopago.preferences.create(preference)
//     .then(function (response) {
//         // Este valor reemplazará el string "$$init_point$$" en tu HTML
//         global.init_point = response.body.init_point;
//     }).catch(function (error) {
//         console.log(error);
//     });

// export {
//     mercadopago
// };