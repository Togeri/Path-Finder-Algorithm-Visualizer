// import

function setActiveNavbarItem() {
    let navbarContent = document.getElementById("navbarULContent").childNodes
    navbarContent.forEach(element => {
        if (element.tagName === "LI" && element.classList.contains("navbar-active")) {
            element.classList.remove("navbar-active")
        }
    });
    this.parentNode.classList.add("navbar-active")
}

export { setActiveNavbarItem }