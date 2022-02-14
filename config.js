require("dotenv").config();

module.exports = {

  token: process.env.TOKEN,  
  channel: process.env.CHANNEL, 
  nodes: [

    {
      host: process.env.NODE_HOST, 
      password: process.env.NODE_PASSWORD,
      port: parseInt(process.env.NODE_PORT), 
      identifier: process.env.NODE_ID, 
    }, 

    {
      host: process.env.NODE2_HOST, 
      password: process.env.NODE2_PASSWORD, 
      port: parseInt(process.env.NODE2_PORT), 
      identifier: process.env.NODE2_ID, 
    },

    {
      host: process.env.NODE3_HOST, 
      password: process.env.NODE3_PASSWORD,
      port: parseInt(process.env.NODE3_PORT),
      identifier: process.env.NODE3_ID,
    }
  
  ],
}