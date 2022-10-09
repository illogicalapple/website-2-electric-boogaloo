addEventListener("load", function() {
  document.body.style.setProperty("--height", innerHeight + "px")
});

addEventListener("resize", function() {
  document.body.style.setProperty("--height", innerHeight + "px")
})