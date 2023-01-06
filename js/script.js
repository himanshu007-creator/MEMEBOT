document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems);
});

// VARIABLES
var Src;
var Title;
var Link;
var next = document.getElementById("next");
async function fetchMemes() {
  const url = "https://meme-api.com/gimme";
  const response = await fetch(url);
  const memes = await response.json();
  return memes;
}
document.onload = fetchMemes().then((data) => {
  var data = data;
  Src = data.preview[data.preview.length - 1];
  Title = data.title;
  Link = data.postLink;
  document.getElementById("img").src = Src;
  document.getElementById("desc").innerHTML = Title;
});
var Image = document.getElementById("img");
Image.addEventListener("click", () => {
  window.open(Link, "_blank");
});

next.addEventListener("click", () => {
  fetchMemes().then((data) => {
    var data = data;
    Src = data.preview[data.preview.length - 1];
    Title = data.title;
    Link = data.postLink;
    console.log(Src, Title, Link);
    document.getElementById("img").src = Src;
    document.getElementById("desc").innerHTML = Title;
    document.getElementById("link").href = Link;
  });
});

let deferredPrompt;
const addBtn = document.querySelector(".add-button");
addBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});

let deferredPromptsmsm;
const addBtnsm = document.querySelector(".add-button-sm");

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPromptsm = e;
  // Update UI to notify the user they can add to home screen
  addBtnsm.style.display = "block";

  addBtnsm.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    addBtnsm.style.display = "none";
    // Show the prompt
    deferredPromptsm.prompt();
    // Wait for the user to respond to the prompt
    deferredPromptsm.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPromptsm = null;
    });
  });
});
