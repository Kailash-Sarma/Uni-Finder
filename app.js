const btn = document.querySelector("#btn");
btn.addEventListener("click", async function () {
    let louda = await getUniSa();
    const input = document.querySelector("#input").value;
    show(louda,input);
    // console.log(louda);
})
async function getUniSa() {
  try {
    let url = "http://universities.hipolabs.com/search?country=India";
    let res = await axios.get(url);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
async function show(louda,input){
    document.querySelector("#list").innerHTML="";
    for(lund of louda){
        if((lund["state-province"])==(input)){
            console.log(lund.name);
            let li = document.createElement("li");
            li.innerText = lund.name;
            document.querySelector("#list").append(li);
        }
    }
}
