const axios = require('axios')
const moment = require("moment")
const createCsvWriter = require('csv-writer').createObjectCsvWriter

axios.get("https://reqres.in/api/users").then((response) => {
    const data = response.data.data;
    const date = moment().format('DDMMYYYY-HHmmss_SSS')
    const csvWriter = createCsvWriter({
        path: "csv/" + date + '.csv',
        header: [
            {id: 'id', title: 'id'},
            {id: 'email', title: 'email'},
            {id: 'first_name', title: 'first_name'},
            {id: 'last_name', title: 'last_name'},
        ]
    });
    csvWriter.writeRecords(data)
        .then(() => console.log('The CSV file was written successfully'));
}).catch((error) => console.error(error));



