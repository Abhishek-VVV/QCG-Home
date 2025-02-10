console.log("hello");
document.querySelector(".dark").addEventListener("click",()=>{
    const left = document.querySelector('.left')
    const right = document.querySelector('.right')
    if(left.classList.contains('bg')){
        left.classList.remove('bg')
        right.classList.add('bg')
        document.querySelectorAll('.line')[0].classList.remove('bg-black')
        document.querySelectorAll('.line')[1].classList.remove('bg-black')
        document.querySelectorAll('.dot2')[0].classList.remove('bg-black')
        document.querySelectorAll('.dot2')[1].classList.remove('bg-black')
        document.querySelectorAll('.line')[0].classList.add('bg-white')
        document.querySelectorAll('.line')[1].classList.add('bg-white')
        document.querySelectorAll('.dot2')[0].classList.add('bg-white')
        document.querySelectorAll('.dot2')[1].classList.add('bg-white')
        document.querySelector('.page2').classList.add('black')
        document.querySelector('.page4').classList.add('black')
    }
    else{
        left.classList.add('bg')
        right.classList.remove('bg')
        document.querySelectorAll('.line')[0].classList.add('bg-black')
        document.querySelectorAll('.line')[1].classList.add('bg-black')
        document.querySelectorAll('.dot2')[0].classList.add('bg-black')
        document.querySelectorAll('.dot2')[1].classList.add('bg-black')
        document.querySelector('.page2').classList.remove('black')
        document.querySelector('.page4').classList.remove('black')
    }
})
document.querySelector(".button").addEventListener('mouseenter',()=>{
    const media = document.querySelector(".media")
    if(!media.classList.contains('visible')){
        media.classList.add('visible')
    }
})
document.querySelector(".button").addEventListener('mouseleave',()=>{
    const media = document.querySelector(".media")
    if(media.classList.contains('visible')){
        media.classList.remove('visible')
    }
})
document.querySelector(".media").addEventListener('mouseenter',()=>{
    const media = document.querySelector(".media")
    if(!media.classList.contains('visible')){
        media.classList.add('visible')
    }
})
document.querySelector(".media").addEventListener('mouseleave',()=>{
    const media = document.querySelector(".media")
    if(media.classList.contains('visible')){
        media.classList.remove('visible')
    }
})

 function initMap(){
    const map = new google.maps.Map(document.getElementById('map'),{
        center: {lat:29.866573 , lng:77.899764 },
        zoom: 17
    })
    var marker = new google.maps.Marker({
        position: { lat:29.866573 , lng:77.899764 },
        map: map,
    });
}

document.querySelector(".side").addEventListener('click',()=>{
    const ul = document.querySelector(".unlist")
    if(ul.classList.contains('move-left')){
        ul.classList.remove('move-left')
        ul.classList.add('move-right')
    }
})
document.querySelector(".close").addEventListener('click',()=>{
    const ul = document.querySelector(".unlist")
    if(ul.classList.contains('move-right')){
        ul.classList.remove('move-right')
        ul.classList.add('move-left')
    }
})