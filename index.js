

slide();

var x;


let slideImages = ["https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_Gehraiyaan_Trailer/dd39af89-8d9f-488a-a0ca-db694307ed68._UR3000,600_SX1500_FMwebp_.jpeg",
"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_PushpaTheRiseTamil_Launch/7d03df44-ca6d-47d5-a242-2acddb25bdba._UR3000,600_SX1500_FMwebp_.jpeg",
"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherlockAllSeasons_Launch/b7724a8c-2bce-45f9-9ab5-eec3848bee79._UR3000,600_SX1500_FMwebp_.jpeg",
"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5461/245461-h",
"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/95330c7ebdd4c98389b29d15541f351c45f83033ef14b28d9edef2c2fd817cdb._V_SX1080_.jpg",
"https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_YoungSheldonS5Launch/9114b7fe-c2ab-4f0a-b762-fca79464b133._UR3000,600_SX1500_FMwebp_.jpeg",
"https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-4z571927/cover/1170x658withlogob2ce6424cede4dde8163202b135ad862.jpg"];


function slide(){

    let imagesrc =  document.getElementById("imagesrc");
    
    let i = 0;

    x = setInterval(function (){
        if( i === 7){
            i = 0;   
        }
        
        imagesrc.src = slideImages[i]
        
        i = i + 1;
    }, 2000)
}


// My IMDB Api Key = 45c7fb6

async function GetData(){

    
    try{
        
        let check = document.getElementById("findmovie").value;

        let res = await fetch(`https://www.omdbapi.com/?apikey=45c7fb6&s=${check}`);
        
        let data = await res.json();
    

        PrintData(data);
        // console.log("~ data", data)
    }
    catch{

    }

}

let main_box = document.getElementById("container");

function PrintData(data){
    let tryonce = data.Search;
    // console.log("~ tryonce", tryonce)
    document.getElementById("findmovie").value = "";
    if(tryonce === undefined){
    
        let error_box = document.createElement("div");
        error_box.id = "error_box"

        let error_text = document.createElement("h1");

        error_text.textContent = `No Movies Found`;

        error_box.append(error_text)

        main_box.append(error_box);
    }

    else{

        main_box = "";
        
        tryonce.forEach(function (ele){
            let rate = (Math.random()*10+1);
            let n = rate.toFixed(1);
            
            main_box = document.getElementById("container");

            let inside_main_box = document.createElement("div");
            inside_main_box.id = "Head_box";
        
            let every_box = document.createElement("div");
            every_box.id = "every"
        
            let img = document.createElement("img");
            img.src = ele.Poster;
        
            let title = document.createElement("p");
            title.textContent = ele.Title;
            title.className = "maringleft"
            
            let launch = document.createElement("div");
            launch.textContent = `Release Year :- ${ele.Year}` ;
            launch.className = "maringleft"
            
            let rating = document.createElement("div");
            rating.textContent = `Rating :- ${n}` ;
            rating.className = "maringleft"
        
            every_box.append(img,title,launch,rating)
            inside_main_box.append(every_box);
            main_box.append(inside_main_box);
            })
    }



}

function btn(){
    main_box.textContent = "";
    GetData();
}

function btn01(){
    window.location.href = "/index.html"
}

regularMovies();
async function regularMovies(){
    try{

        let res2 = await fetch(`https://www.omdbapi.com/?apikey=45c7fb6&s=type`);
        
        let data2 = await res2.json();
        
        showregularmovies(data2);
        // console.log("~ data", data2)
    }
    catch{

    }

}
 

function showregularmovies(data2){
    let show = data2.Search;

    show.forEach(function (ele){
        let rate2 = (Math.random()*10+1);
        let n2 = rate2.toFixed(1);
        
            
        main_box = document.getElementById("container");

        let inside_main_box = document.createElement("div");
        inside_main_box.id = "Head_box";
    
        let every_box = document.createElement("div");
        every_box.id = "every"
    
        let img = document.createElement("img");
        img.src = ele.Poster;
    
        let title = document.createElement("p");
        title.textContent = ele.Title;
        title.className = "maringleft"
        
        let launch = document.createElement("div");
        launch.textContent = `Release Year :- ${ele.Year}` ;
        launch.className = "maringleft"
        
        let rating = document.createElement("div");
        rating.textContent = `Rating :- ${n2}` ;
        rating.className = "maringleft"
    
        every_box.append(img,title,launch,rating)
        inside_main_box.append(every_box);
        main_box.append(inside_main_box);
        })
    

}