import * as instance from "axios";

const axios = instance.create({
    baseUrl: "http://localhost:8080/api"
});


const requestHandler = (request) =>{
    request.headers["Accept"] = "application/json";
    request.headers["Content-Type"] = "application/json";
    const session = JSON.parse(localStorage.getItem("user")) || null;
    if(session){
        request.headers["Authorization"] = `Bearer ${session.token}`;
    }
    return request;
}

const errorResponseHandler = (response) =>{
    return new Promise().reject({...response});// a un objeto o a una lista va a tomar todos sus atributos y los va pasar a un nuevo objetos, spred
};

const succesResponseHandler = (response) =>{
    return response.data;
};

axios.intesceptors.request.use((request)=>requestHandler(request));

axios.intesceptors.use(
    (response) => succesResponseHandler(response),
    (error) => errorResponseHandler(error)
);

export default axios;