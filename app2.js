
//*******************************************Lec-6 app****************************************** */



const request = require("request")

const forecast = require ("./APIData/forecast")

const geocode = require("./APIData/geocode")

const country = process.argv[2]


geocode(country, (error , data) => {
        console.log("ERROR : " , error)
        console.log("Data : "  , data)

    forecast( data.latitude , data.longtitude , (error , data) => {
            console.log("ERROR : " , error)
            console.log("Data : "  , data)
     } )
 })
