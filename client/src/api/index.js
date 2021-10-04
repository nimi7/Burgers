const axios = require("axios");
function generateFullUrl() {
  const domain =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_DOMAIN
      : "localhost:5000";
  const http = process.env.NODE_ENV === "production" ? "https" : "http";

  console.log('domain',domain)
  return `${http}://${domain}`;
}

const api = axios.create({
  baseURL: generateFullUrl() + "/api",
});
console.log('generateFullUrl',generateFullUrl())


export const GetAllBurgers = api.get("/Burgers").then(res => {
    console.log('res.data',res.data)
  
    return res.data
  
}).catch(err => {
  console.log(err);
});

export const BurgersID = (id) => api.get(`Burgers/:${id}`).then(res =>{
    console.log('res',res);
    return res
  });


  const apis = { GetAllBurgers, BurgersID };

  export default apis;