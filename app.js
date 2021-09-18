var baseUrl ="https://api.coinranking.com/v2/coins"
var proxyUrl ="https://corscrypto.herokuapp.com/"
var apiKey ="coinranking205d89e6615953e6ed5037eb23f2173680d588773ab5b469"
var data=document.getElementById("data")

fetch(`${proxyUrl}${baseUrl}`, {
    
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response)=>{
    // setHeader("Access-Control-Allow-Origin", "*")
    if(response.ok){
        response.json().then((json)=>{
            console.log(json.data.coins)

            let coinsData = json.data.coins

            if(coinsData.length > 0){
                var cryptoCoins = ""
            }

            coinsData.forEach((coin)=> {
              cryptoCoins += "<tr>" 
              cryptoCoins += `<td>  ${coin.uuid} </td>`;
              cryptoCoins += `<td>  ${coin.btcPrice} </td>`;
              cryptoCoins += `<td>  ${coin.rank} </td>`;
              cryptoCoins += `<td>  ${coin.tier} </td>`;
              cryptoCoins += `<td>  ${coin.name} </td>`;
              cryptoCoins += `<td>$${Math.round(coin.price)} Billon</td>`;
              cryptoCoins += `<td>  ${coin.iconUrl} </td>`;"<tr>";
            })
            data.innerHTML = cryptoCoins
        })
    }
}).catch((error)=>{
    console.log(error)
})
function searchFun(){
    var input, thread, table, tr,i, txtValue,filter;
    input = document.getElementById("formControl");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[4];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }   
}
