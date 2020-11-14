$window = $(window)
$AboutOffset = $("#About").offset();
$ProjectsOffset = $("#Projects").offset();
$ContactOffset = $("#Contact").offset();
var lastScrollTop = $window.scrollTop();
var isScrolling;

const tabs = {"Home":$("#HomeTab"), "About":$("#AboutTab"), "Projects":$("#ProjectsTab"), "Contact":$("#ContactTab")}

function toggleMenu(event){
    let list = event.children
    for (let child of list){
        child.classList.toggle("change");
    }
    $("#MenuCont").get(0).classList.toggle("change");
}

$window.scroll(function(){ //Add resize Parameter
    $("#London1").css("bottom", Math.max(-350 + 0.2*window.scrollY, -350) + "px");
    $("#London2").css("bottom", Math.max(-325 + 0.3*window.scrollY, -325) + "px");
    $("#London3").css("bottom", Math.max(-300 + 0.4*window.scrollY, -300) + "px");

    if($("#MenuCont").hasClass("change")){
        toggleMenu($("#MenuButtonContainer").get(0));
    }
    getTab();
});

function getTab(){
    $("#Scroll").html("Stroll top: " + $window.scrollTop());
    //$("#ScrollTemp").html("Stroll top: " + ($window.scrollTop() + $window.height() / 2));
    $("#ScrollTemp").html("Stroll top: " + (window.scrollY));
    $("#Scroll2").html("Stroll top: " + $AboutOffset.top);
    $("#Scroll3").html("Stroll top: " + $ProjectsOffset.top);
    $("#Scroll4").html("Stroll top: " + $ContactOffset.top);

    let adjScroll = $window.scrollTop() + $window.height() / 2

    switch (true) {
        case adjScroll < $AboutOffset.top:
            setTab("Home");
            break;
        case adjScroll < $ProjectsOffset.top:
            setTab("About");
            break;
        case adjScroll < $ContactOffset.top:
            setTab("Projects");
            break;
        default:
            setTab("Contact");
            break;
    }
}

function setTab(section=null){
    for (let tab in tabs){
        if(tab !== section){
            tabs[tab].width(20);
        } else{
            tabs[section].width(40);
        }
    }
};

function setLink(elmnt, tab){
    tabs[tab].width(100);
}

function scrollToSpot(elmnt, section){
    $(section).get(0).scrollIntoView({behavior: "smooth"})
}

window.onload = () => {
    initTabs();
    initAboutSection();
    $window.scroll();
    initProjectsSection();
};

function initTabs(){
    let links = $(".menuLinks").get();
    let tabs = $(".tab").get();
    for (let i in range(links.length)){
        let top = tabs[i].offsetTop;
        let tHeight = tabs[i].offsetHeight / 2;
        let center = top + tHeight
        console.log(top);
        console.log(tHeight);

        let trans = links[i].offsetTop + links[i].offsetHeight / 2;

        trans -= center;

        links[i].style.transform = "translate(0," + -trans + "px)"
        console.log("Styled")

    }
}

function initAboutSection(){
    let secs = $(".picSec").get();
    for (let sec of secs){
        sec.children[1].innerHTML = sec.children[0].alt
        console.log(sec)
    }
}

function initProjectsSection(){
    $("#LeftCarBut").click(function (e) {
        let temp = $("#Carousel").scrollLeft()
        temp = Math.max(0, temp - $("#Carousel").width())
        $("#Carousel").scrollLeft(temp)
    });
    $("#RightCarBut").click(function (e) {
        let temp = $("#Carousel").scrollLeft()
        temp = Math.min($("#Carousel").children().length * $("#Carousel").width(), temp + $("#Carousel").width())
        $("#Carousel").scrollLeft(temp)
    });
}

//Scroll Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function range(end, start = 0) {
    if(start === end - 1) return [start];
    return [start, ...range(end, start + 1)];
}