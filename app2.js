const random =Math.floor(Math.random()*21);

console.log(random);


let mesaj = document.querySelector(".msg");
let score = 10; 
let enYüksekSkore = 0;
let checkButon = document.querySelector(".check");

checkButon.addEventListener("click", ()=>{

    const tahmin = document.querySelector(".guess").value;

    if(!tahmin){
        mesaj.textContent="Lütfen Bir Sayı Giriniz!"
    }else if(tahmin == random){
        mesaj.textContent="Tebrkler Bildiniz 👏"
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").textContent= random

        // top score...
        if(score > enYüksekSkore){
            enYüksekSkore = score;
            document.querySelector(".top-score").textContent= enYüksekSkore;
        }


    }else{

        if (score>1) {
            score -- ;
            document.querySelector(".score").textContent= score;

            tahmin < random 
            ? mesaj.textContent = "Arttır 👆"
            : mesaj.textContent= "Azalt 👇"
            
        }else{
            mesaj.textContent="Oyunu Kaybettiniz 😢"
            document.querySelector(".score").textContent= 0;
            document.querySelector("body").style.backgroundColor="red"; 
            number.textContent= random         
        }
    }

})

// again ... 

document.querySelector(".again").onclick = ()=> {
    document.querySelector("body").style.backgroundColor="#2d3436"

    rastgeleSayi= Math.ceil(Math.random()*20);
    console.log(rastgeleSayi);

    score= 10;

    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value= "";

    mesaj.textContent="Oyun Yeni Oyuncu İçin Başlıyor.."


}