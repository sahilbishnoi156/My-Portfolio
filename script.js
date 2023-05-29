document.getElementById('theme-cng').addEventListener('click', function() {
    var icon = document.getElementById('moon-icon');
    let themechange = document.getElementById('theme-cng');
    let port = document.getElementById('port');
    let porthr = document.getElementById('port-hr');
    let foliohr = document.getElementById('folio-hr');
    let folio = document.getElementById('folio');
    function classesaddsun(){
      themechange.classList.add('bc-sun');
      porthr.classList.add('background-col-port-hr-sun');
      foliohr.classList.add('background-col-folio-hr-sun');
      port.classList.add('background-col-port-sun');
      folio.classList.add('background-col-folio-sun');  
      icon.classList.add('fa-sun');
    };
    function classesremovesun(){
      icon.classList.remove('fa-moon');
        folio.classList.remove('background-col-folio-moon');
        port.classList.remove('background-col-port-moon');
        porthr.classList.remove('background-col-port-hr-moon');
        foliohr.classList.remove('background-col-folio-hr-moon');
        themechange.classList.remove('bc-moon');
    };
    function classesaddmoon(){
      icon.classList.add('fa-moon');
        port.classList.add('background-col-port-moon');
        folio.classList.add('background-col-folio-moon');
        porthr.classList.add('background-col-port-hr-moon');
        foliohr.classList.add('background-col-folio-hr-moon');
        themechange.classList.add('bc-moon');
    };
    function classesremovemoon(){
      icon.classList.remove('fa-sun');
        port.classList.remove('background-col-port-sun');
        folio.classList.remove('background-col-folio-sun');
        porthr.classList.remove('background-col-port-hr-sun');
        foliohr.classList.remove('background-col-folio-hr-sun');
        themechange.classList.remove('bc-sun');
    };

    if (icon.classList.contains('fa-moon')) {
        classesaddsun();
        classesremovesun();
        
    } else {
        classesaddmoon();
        classesremovemoon();
  }
});
let searchButton = document.getElementById("search-btn");
let searchBar = document.getElementById('search-bar');
searchButton.addEventListener("click", function(event) {
event.stopPropagation(); // Prevent event bubbling

if (searchBar.style.display === "block") {
  searchBar.style.display = "none";
} else {
    searchBar.style.display = "block";
    searchBar.focus();
}
});
document.addEventListener("click", function(event) {
    if (event.target !== searchButton && event.target !== searchBar) {
      searchBar.style.display = "none";
    }
  });