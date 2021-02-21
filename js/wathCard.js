import windowNoCard from "./windowNoCard.js"

let clientSecret = localStorage.getItem('token');
export default function wathCards() {
    
    fetch(`https://ajax.test-danit.com/api/cards`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${clientSecret}`
        }
    })
        .then(response => response.json()).then((data) => {
            console.log(data);
            if (data.length === 1) {
                windowNoCard()
            }
        });

}