let numberPage = 0;

let listImageBackgroundMain = [
    "img/img-background-1.jpg",
    "img/img-background-2.jpeg",
    "img/img-background-3.jpg",
    "img/img-background-4.jpg"
];

let backgroundImgMain = document.getElementsByClassName("main-block__background-img")[0];

let main = document.getElementsByClassName("main-block")[0];

/*--------------------------*/
let headerLang = document.getElementsByClassName("header-content-right__lang")[0];
headerLang.addEventListener("click", function (e) {
    if (e.target.className != "" && headerLang.children[0] == e.target) {
        console.log("1");
        headerLang.children[0].className = "header-content-right__lang_style_active"
        headerLang.children[1].className = "header-content-right__lang_style";
    }
    else if (e.target.className != "" && headerLang.children[1] == e.target) {
        console.log("2");
        headerLang.children[1].className = "header-content-right__lang_style_active"
        headerLang.children[0].className = "header-content-right__lang_style";
    }
});

/*--------------------------*/

let skipEl = document.getElementsByClassName("skip-section")[0];
skipEl.addEventListener("animationend", () => {
    skipEl.className = "skip-section";
});
skipEl

/*--------------------------*/

document.body.addEventListener('wheel', function (e) {
    if(e.deltaY > 0 && numberPage > 0 && skipEl.className == "skip-section") {
        skipEl.classList.remove("skip-section_skip-down");
        skipEl.classList.add("skip-section_skip-up");
        main.classList.add("empty-anim");

        main.addEventListener("animationend", () => {
            backgroundImgMain.style.backgroundImage = `url(${listImageBackgroundMain[numberPage]})`;
            main.classList.remove("empty-anim");
        })
        --numberPage;

        window.history.pushState(null, null, "/sp/ttt.html")
    } else if(e.deltaY < 0 && numberPage < 3 && skipEl.className == "skip-section") {
        skipEl.classList.remove("skip-section_skip-up");
        skipEl.classList.add("skip-section_skip-down");
        main.classList.add("empty-anim");

        main.addEventListener("animationend", () => {
            backgroundImgMain.style.backgroundImage = `url(${listImageBackgroundMain[numberPage]})`;
            main.classList.remove("empty-anim");
        })
        ++numberPage;
    }
    console.log(numberPage);
});

/*--------------------------*/

window.history.back();

