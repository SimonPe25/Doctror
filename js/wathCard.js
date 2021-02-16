export default function wathCards() {
    const del = document.getElementById("alertDiv")
    fetch(`https://ajax.test-danit.com/api/v2/cards`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer e8679ad1-6da6-4f79-a795-c6e8bd9ffdb5`
        }
    })
        .then(response => response.json()).then((data) => {
            console.log(data.length);
            if (data.length === 1) {
                del.classList.remove("d-none")
            }else if(data.length !== 1){
                del.classList.add("d-none");
            }
        });

}