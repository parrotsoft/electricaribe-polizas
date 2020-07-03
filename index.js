const electricaribe = require('./services/electricaribe');

console.log('Electricaribe Hack');

electricaribe.getData(2060790, 100).then((resp) => {
    console.log(resp);
});