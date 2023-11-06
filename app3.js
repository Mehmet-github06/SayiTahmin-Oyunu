let random =Math.floor((Math.random()*20)+1);

console.log(random);

let body =document.querySelector("body");
let check = document.querySelector(".check");
let againButon = document.querySelector(".again");
let number = document.querySelector(".number");
let input = document.querySelector(".guess");
let mesaj = document.querySelector(".msg");

let skor = 10;
let topSkor = localStorage.getItem("top-score") || 0;

document.querySelector(".top-score").textContent=topSkor;

check.addEventListener("click",()=>{
    const tahmin = input.value ;

    if (!tahmin){
        mesaj.textContent="Lütfen Bir Sayı Giriniz!"
    }else if (tahmin == random){
        body.style.backgroundColor="green";
        mesaj.textContent="Tebrikler Bildiniz👏"
        number.textContent=random;

        // top-score bölümü

        if(skor> topSkor){
            topSkor=skor;
            document.querySelector(".top-score").textContent=topSkor;
            localStorage.setItem("top-score",topSkor);
        }




    }else{
        if(skor>1){
            skor--;
            document.querySelector(".score").textContent=skor;

            tahmin>random
            ? mesaj.textContent ="Azalt 👇"
            : mesaj.textContent= "Arttıır 👆"
        }else{
            mesaj.textContent="Oyunu Kaybettiniz 😢 "
            document.querySelector(".score").textContent=0;
            body.style.backgroundColor="red";
            document.querySelector(".number").textContent= random
        }
    }
})

againButon.addEventListener("click",()=>{
    body.style.backgroundColor="gray";
    random =Math.floor((Math.random()*20)+1);
    console.log(random);
    number.textContent="?";
    input.value="";
    skor =10;
    document.querySelector(".score").textContent=skor;
    mesaj.textContent="oyun Yeniden Başlıyor...👍"

})
document.addEventListener("keydown",(e)=>{
    if(e.key ==="Enter" ){
        check.click();
    }
})

check.addEventListener("click",()=>{
    let tahminSayi = (input.value);

    if(tahminSayi < 1 || tahminSayi > 20 || isNaN(tahminSayi)){
        mesaj.textContent=("Geçersiz Sayi Girdiniz. (1-20) Arasında Giriniz. ")
        skor++;
    }
} )
