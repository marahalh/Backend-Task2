const request = require("request")


const forecast = (latitude , longtitude , callback) => {

    const url = "https://api.weatherapi.com/v1/current.json?key=6841cbaf9eda40fab5254926242107&q=" + latitude + "," + longtitude
    
    request ({url , json : true  } , (error , response) => {
    
        if (error) {
            callback ( "Site not found" , undefined )
        } 
        else if (response.body.error)
          {
             callback (response.body.error.message , undefined )
        }
        else 
        {
    
          callback (undefined , response.body.location.name + ", it is now : " + response.body.current.condition.text 
            + "\n and temp is : "  + response.body.current.temp_c )
        }
    })
      }

    module.exports = forecast

