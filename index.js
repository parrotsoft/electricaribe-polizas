const electricaribe = require('./services/electricaribe');

console.log('Electricaribe Hack');

electricaribe.getData(2060790, 10).then((resp) => {
    console.log(resp);
});