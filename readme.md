# isLambdaWarm 

A simple module that'll tell you if your lambda is warm, by checking for the existence of `/tmp/isLambdaWarm', which is the most reliable way to check (as the /tmp/ folder is shared across invocations). 

If it's not, it writes Date.now() when this module was invoked to `/tmp/isLambdaWarm'). That should give you an approximate time when the Lambda container was first booted.

## Usage 

```
const lambdaWarm = require('./index');

lambdaWarm(function (err, warm, date){
    console.log(err); // any errors
    console.log(warm); // boolean
    console.log(date); // Date object with when this module was first ran in a lambda
});
``` 