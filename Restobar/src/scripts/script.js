const galeria = document.getElementById('galeria');

galeria.addEventListener('click', ()=> {
    window.location.href = "./pages/galeria.html";
})

const home = document.getElementById('home');

home.addEventListener('click', ()=> {
    window.location.href = "../index.html";
})



//   document.addEventListener('DOMContentLoaded', function() {
//     var video = document.getElementById("miVideo");
//     video.play();

//     video.addEventListener('ended', function() {
//       video.currentTime = 0;
//       video.play();
//     });
//   });