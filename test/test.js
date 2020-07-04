const electricaribe = require('./../');

console.log('Electricaribe Hack');

electricaribe.getData(2060790, 4).then((resp) => {
    console.log(resp);
});