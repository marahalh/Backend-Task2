
//*******************************************Lec-5 app****************************************** */


const request = require("request")

const url = "https://api.weatherapi.com/v1/current.json?key=e1778465aaf54fc2b5c52707242007&q=syria"

  request ({url , json: true} , (error , response) => {

   if (error) {
      console.log("ERROR: Site not found")
  } 
  else if (response.body.error)
   {
      console.log(response.body.error.message)
  }else 
  {
      console.log(response.body.location.name)
      console.log(response.body.current.condition.text)
  }

       
  })