import axios from 'axios'

 export const commonAPI = async (httpMethod,url,reqBody) =>{
    let reqConfig = {
        
            method: httpMethod,
            url: url,//if key has the same name as value we can use the key only
            data: reqBody,
            Headers:{
                'Content-Type': 'application/json'
            }
          }
    return await axios (reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })

}