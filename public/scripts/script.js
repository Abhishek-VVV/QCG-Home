console.log("hello");
document.querySelector(".dark").addEventListener("click",()=>{
    const left = document.querySelector('.left')
    const right = document.querySelector('.right')
    if(left.classList.contains('bg')){
        left.classList.remove('bg')
        right.classList.add('bg')
    }
    else{
        left.classList.add('bg')
        right.classList.remove('bg')
    }
})