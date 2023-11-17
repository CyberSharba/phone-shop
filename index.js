
const searcph = ()=>{
   const searchi = document.getElementById('searchi')
   const input = searchi.value;
   searchi.value=''
  
 //    console.log(input)
 const url = ` https://openapi.programming-hero.com/api/phones?search=${input}`
 console.log(url)
 fetch(url)
 .then(res => res.json())
 .then(data => display(data.data))
}

const display =(data)=>{
    console.log(data)
    const phonedata = document.getElementById('phones')
    phonedata.textContent='';
    // 
    

    if(data.length == 0){
        phonedata.innerHTML=`<h1>No sharch Found</h1>`
        phonedetails.innerHTML=''
    }
    else{
    
    for(const datas of data){
        console.log(datas)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        
       <br> <div class="card ll">
            <img src="${datas.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${datas.brand}</h5>
            <h5 class="card-title">${datas.phone_name}</h5><br>
            <button onclick="details('${datas.slug}')"  type="button" class="btn btn-primary">More Details</button>
            </div>
        </div>
     

        `
        phonedata.appendChild(div)
        phonedetails.innerHTML=''
    }}
   
} 



// /////////oporar box\\\\\\\\\\\\\\
const details = (detais)=>{
        console.log(detais)
        const url = ` https://openapi.programming-hero.com/api/phone/${detais}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => displays(data.data))
    }
    const displays = (input)=>{
        console.log(input)
        const phonedetails = document.getElementById('phonedetails')
        // phonedetails.textContent='';
        phonedetails.innerHTML='';


       

        const divv = document.createElement('div')
        divv.classList.add('row','lk')


        function date (){
          if(input.releaseDate==""){
            let gg = `<h5 class="card-text">ReleaseDate: No Releasase Date Found.</h5>`
            return gg
            
          }
          else{
            let kk = `<h5 class="card-text">ReleaseDate: ${input.releaseDate}.</h5>`
            return kk

          }
        }



        divv.innerHTML=`
        <div class="col-md-4 col-sm-12 p-4">
        <img src="${input.image}" class="img-fluid rounded-start dd" alt="...">
      </div>
      <div class="col-md-8 col-sm-12">
        <div class="card-body">
         <br> <h5 class="card-title">Feature of ${input.name}</h5><br>
          <p class="card-text">1.Storage: ${input.mainFeatures.storage}.</p>
          <p class="card-text">2.DisplaySize: ${input.mainFeatures.displaySize}.</p>
          <p class="card-text">3.ChipSet: ${input.mainFeatures.chipSet}.</p>
          <p class="card-text">4.Memory: ${input.mainFeatures.memory}.</p>
          <p class="card-text">5.Sensors: ${input.mainFeatures.sensors.map(num => num) }.</p>
          <h5 class="card-text"> ${date()}</h5><br>                   
        </div>
      </div>

        `
        
        phonedetails.appendChild(divv)
        const phonedet = document.getElementById('kk')
      

        

    }

