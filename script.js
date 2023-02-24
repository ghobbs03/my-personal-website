document.querySelector("#face").addEventListener('click', () => aboutMeHandler());

let isAboutMeShowing = false;
const bio = document.createElement('div');


function aboutMeHandler() {
    const infoContainer = document.querySelector("#container");
    infoContainer.prepend(bio);
    bio.innerHTML =
        `<center><p style="font-size: 15pt;"> Gail Hobbs is a junior software developer. 
        In her free time she enjoys singing, reading, solving chess puzzles and cryptic crosswords, 
        eating ramen, and watching movies that give her heart palpitations. Feel free to stay a while.</p></center>
        `;

    bio.style.borderRadius = "20px";
    bio.style.display = "none";
    bio.style.backgroundColor = "#F8F8F8";
    bio.style.opacity = "70%";
    bio.style.marginTop = "5vh";

    isAboutMeShowing = !isAboutMeShowing;
    const name = document.querySelector("h1");

    if (isAboutMeShowing) {
        name.style.display = "none";
        bio.style.display = "block";


    } else {
        name.style.display = "block";
        bio.remove();

    }




}