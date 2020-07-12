export const localhost = "http://localhost:8081/api/v1/" 
export const production = ""
//header 
export const AppJSON = {"headers" : {"Content-Type" : "application/json"}}
export function Authorization (token) {
   return {"headers" : {"Authorization" : token}}
}