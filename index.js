const contentLinks = document.querySelectorAll(".content-link")

contentLinks.forEach((link) => {
    link.addEventListener("click", function(event) {
        event.preventDefault()
        const targetId = this.textContent
        console.log(targetId)
        const targetElem = document.getElementById(targetId)
        if (targetElem) {
            targetElem.scrollIntoView({ behavior: "smooth"})
        }
    })
})