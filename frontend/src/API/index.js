export const BackendApi =()=>{
    return fetch ("http://localhost:8080/dashbord/get-dashbord").then((res)=> res.json());
}