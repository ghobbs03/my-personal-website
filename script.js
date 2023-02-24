document.querySelector("#face").addEventListener('click', () => aboutMeHandler());
document.querySelector("#aboutme").addEventListener('click', () => aboutMeHandler());

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
        eating ramen, and watching movies that give her heart palpitations. You can find out more about how I think and work <a href="https://secure.plum.io/en/p/LMTOJ-j9iaxqKfq7qr1dFg" style="color: midnightblue" target="_blank" rel="noopener noreferrer"> here.</a>
        <br>Feel free to look around.</center>
        `;

        bio.style.visibility = "visible";
        

    } else {
        bio.style.visibility = "hidden";
    }




}