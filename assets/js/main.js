const navbar = document.querySelector(".navbar");
const items= document.querySelector(".delicious");
const loading = document.querySelector(".loading");
const scrollToTop= document.querySelector(".scroll-to-top");
// const herald= document.querySelector(".herald");
window.addEventListener('scroll', function()
{
    if(window.scrollY > items.offsetTop)
    {
        navbar.style.backgroundColor="#000";
    }
    else
    {
        navbar.style.backgroundColor="transparent";
    }

    if(window.scrollY > items.offsetTop)
    {
        scrollToTop.classList.remove("opacity-0","invisible");
    }
    else
    {
        scrollToTop.classList.add("opacity-0","invisible");
    }
})

window.addEventListener('load', function(){
    setTimeout(function(){
        loading.classList.add("opacity-0","invisible");
    },4000)
})

scrollToTop.addEventListener('click', function(){
    window.scroll({
        top:0,
    })
})