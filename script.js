let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".sidebar");
    let getSidebarA = document.querySelectorAll(".sidebar li");

    if (toggleNavStatus === false) {
        getSidebar.style.visibility = "visible";
        getSidebar.style.width = "200px";
        getSidebar.style.opacity = "0.5";

        let arrayLength = getSidebarA.length;
        for (var i = 0; i < array.length; i++) {
            getSidebarA[i].style.opacity = "1";
        }

    
    }
}
