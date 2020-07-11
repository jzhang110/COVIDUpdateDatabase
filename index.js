const xlsxFile = require('read-excel-file/node');
const CovidData = require('./models/Coviddata.js');
const connectDB = require('./config/db.js');
require('dotenv').config();

connectDB()




xlsxFile('./CaseCountData.xlsx').then((rows) => {

    for(var i=0;i<rows.length;i++){
        if(rows[i][1] != null && typeof(rows[i][1]) != 'string' ){
            const county = rows[i][0];
            const cases = rows[i][1];
            const fatalities = rows[i][2];
        
            CovidData.findOneAndUpdate(
                {county:county},
                {$set:{cases: cases, fatalities: fatalities}},
                {new: true}
            ).then(()=>{})
        }
    }
    
}).catch(err =>{
    console.log(err);
})
