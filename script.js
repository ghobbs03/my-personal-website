document
  .querySelector("#face")
  .addEventListener("click", () => aboutMeHandler());
document
  .querySelector("#aboutme")
  .addEventListener("click", () => aboutMeHandler());

let isAboutMeShowing = false;
const bio = document.querySelector("#bio");

function aboutMeHandler() {
  const infoContainer = document.querySelector("body");
  infoContainer.append(bio);

  isAboutMeShowing = !isAboutMeShowing;
  const name = document.querySelector("h2");

  if (isAboutMeShowing) {
    bio.innerHTML = `Gail Hobbs is a developer, currently GIS Developer at the Arizona Department of Water Resources.  
        In her free time she enjoys singing, reading, eating ramen, very occasionally drawings things like you see here, solving chess puzzles and cryptic crosswords,  and watching movies that induce heart palpitations. You can find out more about how I think and work <a href="https://secure.plum.io/en/p/LMTOJ-j9iaxqKfq7qr1dFg" style="color: midnightblue" target="_blank" rel="noopener noreferrer"> here.</a>
         Feel free to click around.
        `;

    bio.style.visibility = "visible";
  } else {
    bio.style.visibility = "hidden";
  }
}
