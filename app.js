//* pc ye 1-20 arasında sayı tutturduk

let rastgeleSayi=Math.ceil(Math.random()*20);
console.log(rastgeleSayi);

let mesaj=document.querySelector(".msg");

let skor = 10;
let enYüksekSkor= localStorage.getItem("top-score") || 0;

document.querySelector(".top-score").textContent=enYüksekSkor;

// * her check butonuna basıldığında yapılacaklar

document.querySelector(".check").addEventListener("click",()=>{

    const tahmin = document.querySelector(".guess").value;

    // !tahmin girmeden butona basıldı ise
    
    if(!tahmin){
        mesaj.textContent="Lütfen Bir Sayi Giriniz"
        
    // ! tahmin doğru ise

    }else if (tahmin==rastgeleSayi){
        mesaj.textContent="Tebrikler Bildiniz👏"
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").textContent=rastgeleSayi;

    // ! top score kontrölü

    if(skor>enYüksekSkor){
        localStorage.setItem("top-score",skor);

        enYüksekSkor=skor;
        document.querySelector(".top-score").textContent = enYüksekSkor
    }

    // *tahmin yanlışsa
    }else{
        // ? skor 1 den büyük olduğu sürece tahmin hakkım var
        if(skor>1){
            skor --;
            document.querySelector(".score").textContent = skor;

            tahmin< rastgeleSayi 
            ? mesaj.textContent ="Sayıyı Arttır👆" 
            : mesaj.textContent="Sayıyı Azalt👇";

        }else{
            mesaj.textContent="oyunu kaybettiniz"
            document.querySelector(".score").textContent= 0;
            document.querySelector("body").style.backgroundColor= "red";

            // ! oyunu kaybettiniz...

        }

    }
})

//* Again butonuna basınca ayarlar başlangıç değerlerine gelsin .Arka plan rengi gri olsun

document.querySelector(".again").onclick = ()=> {
    document.querySelector("body").style.backgroundColor="#2d3436"

    rastgeleSayi= Math.ceil(Math.random()*20);
    console.log(rastgeleSayi);

    scor= 10;

    document.querySelector(".score").textContent=skor;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value= "";

    mesaj.textContent="Oyun Yeni Oyuncu İçin Başlıyor.."


}

// ! klavyeden enter tuşuna basılınca check butonunu tetikle

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        // * enter tuşuna basılınca check butonunu tıklar
        document.querySelector(".check").click()
    }
})

// localStorage.setItem("guess",10)
// console.log(localStorage.getItem("guess"));

document.querySelector(".check").addEventListener("click" ,()=> {
    tahmin= document.querySelector(".guess").value;
    const tahminSayi = parseInt(tahmin);

    if ( tahminSayi >=1 && tahminSayi <=20 && !isNaN(tahminSayi)){
        // * doğru sayi girilmş ise onu devam ettir

    }else{
        mesaj.textContent= "geçersiz sayı girdiniz 1 ile 20 arasında bir sayı girin!"
        skor ++
    }

})