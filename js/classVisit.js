class Visit {
    constructor(options){
        this.visitPurpose = options.visitPurpose;/*цель визита*/
        this.shortDescription = options.shortDescription;/*краткое описание*/
        this.urgency = options.urgency;/*срочность визитика*/
        this.fullName = options.fullName;/*ФИО*/
        this.done = options.done;
    }
}

class Cardiologist extends Visit{
    constructor(options){
        super(options);
        this.normalPressure = options.normalPressure;/*обычное давление*/
        this.bodyMassIndex = options.bodyMassIndex;/*индекс массы тела*/ 
        this.pastDiseases = options.pastDiseases;/*перенесенные заболевания сердечно-сосудистой системы*/
        this.age = options.age;/*возраст*/
    }
}

class Dentist extends Visit{
    constructor(options){
        super(options);
        this.lastVisit = options.lastVisit;/*дата последнего посещения*/
    }
}

class Therapist extends Visit{
    constructor(options){
        super(options);
        this.age = options.age;/*возраст*/
    }
}

//-----------------------------------------------------------------------
pushVisit();
function pushVisit(){
    const URI = "https://ajax.test-danit.com/api/cards";
    const one = new Dentist({
        visitPurpose:"Цель",
        urgency:"High",
        shortDescription:"",
        done:"Open",
    });
    const two = new Dentist({
        visitPurpose:"Цель",
        urgency:"Low",
        shortDescription:"",
        done:"Done",
    });
    const three = new Therapist({
        visitPurpose:"Цель",
        urgency:"High",
        shortDescription:"",
        done:"Open",
    });
    const hour = new Cardiologist({
        visitPurpose:"Цель",
        urgency:"Low",
        shortDescription:"",
        done:"Open",
    });
    const fife = new Therapist({
        visitPurpose:"Цель",
        urgency:"Normal",
        shortDescription:"",
        done:"Open",
    });

    // console.log(JSON.stringify(one));
    // return fetch(URI,{
    //     headers:{
    //         Authorization: "Bearer 52770517-a12b-4007-9006-ae99ad6c4788",
    //         'Content-Type': 'application/json;charset=utf-8',
    //     },
    //     method:"POST",
    //     body: JSON.stringify(two)
    // }).then((response) => {
    //     console.log(response);
    //     return response.json();
    // }).catch((error) => {
    //     console.log(error)
    // }).then((data) => {
    //     console.log(data)
    // }).catch((error) => console.log(error));

};