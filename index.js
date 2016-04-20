const app = require('express')();

app.get('/', function(req, res) {
    console.log("Never returning");
});

app.post('/service-checks', function(req, res) {
    console.log("Service checks kaput");
});

app.put('/service-checks/outage-phone-paula-telephony/diagnostics/outage-phone-paula-telephony', function(req, res) {
    console.log("Diagnostics kaput");
});

app.listen(4001, function() {
   console.log("Server running at http://localhost:4001");
});