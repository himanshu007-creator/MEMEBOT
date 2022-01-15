if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("DANKNESS REGISTERED"))
    .catch((err) => console.log("DANKNESS FAILED :("));
}
