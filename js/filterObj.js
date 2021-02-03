export function filterObj(searchInput,data,select2,select1){
    data.forEach(element => {
        if(select1.value !== "All" && select2.value !== "All" && searchInput.value !== ""){ /*По срочности и по выполнению и по заголовку*/
            if(element.content.done === select1.value && element.content.urgency === select2.value && element.content.visitPurpose.toUpperCase().includes(searchInput.value.toUpperCase())){
                console.log(element);
            }
        }else if(select1.value !== "All" && select2.value === "All" && searchInput.value !== ""){/*По выполнению и по заголовку*/
            if(element.content.done === select1.value && element.content.visitPurpose.toUpperCase().includes(searchInput.value.toUpperCase())){
                console.log(element);
            }

        }else if(select1.value === "All" && select2.value !== "All" && searchInput.value !== ""){/*По срочности и по заголовку*/
            if(element.content.urgency === select2.value && element.content.visitPurpose.toUpperCase().includes(searchInput.value.toUpperCase())){
                console.log(element);
            }

        }else if(select1.value !== "All" && select2.value === "All" && searchInput.value === ""){/*По выполнению*/
            if(element.content.done === select1.value){
                console.log(element);
            }

        }else if(select1.value === "All" && select2.value !== "All" && searchInput.value === ""){/*По срочности*/
            if(element.content.urgency === select2.value){
                console.log(element);
            }

        }else if(select1.value !== "All" && select2.value !== "All" && searchInput.value === ""){/*По срочности и по выполнению*/
            if(element.content.done === select1.value && element.content.urgency === select2.value ){
                console.log(element);
            }

        }else if(select1.value === "All" && select2.value === "All" && searchInput.value !== ""){
            if(element.content.visitPurpose.toUpperCase().includes(searchInput.value.toUpperCase())){
                console.log(element);
            }
        }else if(select1.value === "All" && select2.value === "All" && searchInput.value === ""){
            console.log(element);
        }
    });
}