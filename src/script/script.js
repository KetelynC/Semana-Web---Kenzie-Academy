const  urlSite = "https://kenzie-olimpiadas.herokuapp.com/paises" 
fetch(urlSite)
.then(response => response.json())
.then(data => dadosMedals(data))



let board = document.querySelector(".board-medals")

function createLine(position, country, flag_url, medal_gold, medal_silver, medal_bronze){

//creating board line    
    let line = document.createElement("div");
    line.classList.add("line")
    
    let columnR = cLineRank(`${position}°`)
    let columnC = cLineCountry(country,flag_url)
    let columnGM = cGoldMedal(medal_gold)
    let columnSM = cSilverMedal(medal_silver)
    let columnBM = cBronzeMedal(medal_bronze)
    let columnT = cTotal(medal_gold+medal_silver+medal_bronze);
    line.appendChild(columnR);
    line.appendChild(columnC);
    line.appendChild(columnGM);
    line.appendChild(columnSM);
    line.appendChild(columnBM);
    line.appendChild(columnT);

    board.appendChild(line);
}


/*-----*/
function dadosMedals(arrayCountries){
    let classifyCountries  =  classifyC(arrayCountries)
    for(let i = 0; i<classifyCountries.length; i++){
        let countrY  = classifyCountries[i]
   
        createLine(
            i+1,
            countrY.country,
            countrY.flag_url,
            countrY.medal_gold,
            countrY.medal_silver,
            countrY.medal_bronze
        )
    }
}

function classifyC(arrayCountries){
    let newArrayC = arrayCountries.map((countrY)=>countrY).sort((a,b) =>  b.medal_gold - a.medal_gold)

    return newArrayC
}
/*-----*/


//function to create rank column
function cLineRank(rank){
//creating column - ranking
let columnR = document.createElement("div");
columnR.classList.add("column", "c-rank");

//creating column - ranking - content
let rankSpan = document.createElement("span");
rankSpan.innerText=rank;
columnR.appendChild(rankSpan);

return columnR
}

//function to create country column
function cLineCountry(country, flag_url){
    //creating column - ranking
    let columnC = document.createElement("div");
    columnC.classList.add("column", "c-country");
    
    //creating column - country- content flag
    let countryFlag = document.createElement("img");
    countryFlag.src=flag_url;
    countryFlag.alt=country;
    
    //creating column - country- content
    let countrySpan = document.createElement("span");
    countrySpan.innerText=country, flag_url;
    
    columnC.appendChild(countryFlag);
    columnC.appendChild(countrySpan);
    

    return columnC
}

//functions to create medals column
function cGoldMedal(gold){
    //creating gold medal column 
    let columnGM = document.createElement("div");
    columnGM.classList.add("column", "gold-medal");
    
    //creating column - medalG - content
    let goldMSpan = document.createElement("span");
    goldMSpan.innerText=gold;
    columnGM.appendChild(goldMSpan);
    
    return columnGM
}


function cSilverMedal(silver){
    //creating column silver medal 
    let columnSM = document.createElement("div");
    columnSM.classList.add("column", "silver-medal");
    
    //creating column - medalS - content
    let silverMSpan = document.createElement("span");
    silverMSpan.innerText=silver;
    columnSM.appendChild(silverMSpan);
    
    return columnSM
}

function cBronzeMedal(bronze){
    //creating bonze medal  column
    let columnBM = document.createElement("div");
    columnBM.classList.add("column", "bronze-medal");
    
    //creating column - medalB - content
    let bronzeMSpan = document.createElement("span");
    bronzeMSpan.innerText=bronze;
    columnBM.appendChild(bronzeMSpan);
    
    return columnBM
}

function cTotal(total){
    //creating total column 
    let columnT = document.createElement("div");
    columnT.classList.add("column", "c-total");
    
    //creating total content
    let totalSpan = document.createElement("span");
    totalSpan.innerText=total;
    columnT.appendChild(totalSpan);
    
    return columnT
}
