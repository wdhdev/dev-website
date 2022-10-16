if(window.matchMedia) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    // Dark Mode
    $("#about").addClass("dark");
    $("#projects").addClass("dark");
    $("#social").addClass("dark");
  }
}
