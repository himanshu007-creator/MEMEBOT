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
  const url = "https://meme-api.herokuapp.com/gimme";
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
  document.getElementById("link").href = Link;
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
