let btnImg = document.querySelectorAll(".img");
let allAnswer = document.querySelectorAll(".ans");

btnImg.forEach((imgs, idx)=>{

    imgs.addEventListener("click",function(){
        let isVi =  allAnswer[idx].style.display === "flex";

        btnImg.forEach((b, i)=>{
            b.src = "./assets/images/icon-plus.svg";
            allAnswer[i].style.display ="none";
        })

        if(!isVi){
             imgs.src = "./assets/images/icon-minus.svg";
              allAnswer[idx].style.display = "flex";
        }
       
    })
})