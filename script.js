document.querySelector("#face").addEventListener('click', () => aboutMeHandler());

let isAboutMeShowing = false;
const bio = document.querySelector('#bio');


function aboutMeHandler() {
    const infoContainer = document.querySelector("#container");
    infoContainer.before(bio);


    isAboutMeShowing = !isAboutMeShowing;
    const name = document.querySelector("h2");

    if (isAboutMeShowing) {
        bio.innerHTML =
        `<center>Gail Hobbs is a junior software developer. 
        In her free time she enjoys singing, reading, solving chess puzzles and cryptic crosswords, 
        eating ramen, and watching movies that give her heart palpitations. Feel free to stay a while.</center>
        `;

        bio.style.visibility = "visible";
        

    } else {
        bio.style.visibility = "hidden";
    }




}