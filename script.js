//let num=0
    //   num=document.querySelector("input").value;
  
// num=prompt("enter sensense no:")

async function getData(){
    
    response=await fetch('test.csv');
    const data =await response.text();
    //console.log(data);
    

    const rows =data.split('\n').slice(0,document.querySelector("input").value);
    rows.forEach(elt =>{
        const row=elt.split(',');
        
        document.getElementById('StanD').innerHTML =row[0];
        
    })
}

async function getData2(){

    // let num=document.getElementById("#NUM").value;
    const response=await fetch('test.csv');
    const data =await response.text();
    //console.log(data);
    

    const rows =data.split('\n').slice(0,document.querySelector("input").value);
    rows.forEach(elt =>{
        const row=elt.split(',');
        
        document.getElementById('Para').innerHTML =row[1];
        
    })
}

function storeData(){
    var form = document.getElementById('sheetdb-form');
                
            form.addEventListener("submit", e => {
              e.preventDefault();
              fetch(form.action, {
                  method : "POST",
                  body: new FormData(document.getElementById("sheetdb-form")),
              }).then(
                  response => response.json()
              ).then((html) => {
                window.open('page2.html', '_blank');
    
              });
            });
}
document.querySelector("input").addEventListener('input',getData);
document.querySelector("input").addEventListener('input',getData2);