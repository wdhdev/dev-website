if(window.matchMedia) {
  if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    $("#about").toggleClass("dark");
    $("#projects").toggleClass("dark");
    $("#social").toggleClass("dark");
  }
}
