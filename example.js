const lambdaWarm = require('./index');

lambdaWarm(function (err, warm, date){
    console.log(err); // any errors
    console.log(warm); // boolean
    console.log(date); // Date object with when this module was first ran in a lambda
});
