import {filterObj} from "./filterObj.js"

export function filter(searchInput,btn,select1,select2,URI){
    btn.addEventListener("click",search1)

    function search1(){
        return fetch(URI,{
            headers:{
                Authorization: "Bearer 52770517-a12b-4007-9006-ae99ad6c4788",
            },
            method:"GET",
        }).then((response) => {
            console.log(response);
            return response.json();
        }).catch((error) => {
            console.log(error)
        }).then((data) => {
            console.log(data)
            filterObj(searchInput,data,select2,select1)
        }).catch((error) => console.log(error));
    }
};
