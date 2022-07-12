const api_url="https://api.covid19api.com/summary";


function getApiData(URL){
    fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((data) => DisplayData(data));
    .catch((error) => console.log(error.message));
     

}
  
function DisplayData(ApiData){
    console.log(APIDATA);
    for(let i of APIDATA)
    {
        let tr=document.createElement('tr');

        let td1=document.createElement('td1');
        let td2=document.createElement('td2');
        let td3=document.createElement('td3');
        let td4=document.createElement('td4');

        td1.innerText='${if.id}';
        
        td1.innerText='${if.name}';
        td1.innerText='${if.email}';
        td1.innerText='${if.phone}';

        tr.appendchild(td1);
        tr.appendchild(td2);
        tr.appendchild(td3);
        tr.appendchild(td4);

        document.getElementById("my table").appendChild(tr);

    }
}
getApiData=(api_url);