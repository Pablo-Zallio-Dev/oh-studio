const d = document;

let $paragraphText = d.querySelector(".paragraph__text")
let $paragraphContact = d.querySelector(".paragraph__contact")


const animationParagraph = (entry, obser) => {
    entry.forEach(entrada => {
        if(entrada.isIntersecting) {
            $paragraphText.classList.add("animation__paragraph")
            $paragraphContact.classList.add("animation__contact")

        }
    });

}



const observer = new IntersectionObserver(animationParagraph, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0, 
})

observer.observe($paragraphText)
observer.observe($paragraphContact)
