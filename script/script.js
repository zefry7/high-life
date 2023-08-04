let numberPage = 0;

let listImageBackgroundMain = [
    "img/img-background-1.jpg",
    "img/img-background-2.jpeg",
    "img/img-background-3.jpg",
    "img/img-background-4.jpg"
];

let backgroundImgMain = document.getElementsByClassName("main-block__background-img")[0];

let main = document.getElementsByClassName("main-block")[0];

let skipEl = document.getElementsByClassName("skip-section")[0];

/*--------------------------*/

function langSelect(e) {
    if (e.children[0].className != "header-content-right__lang_style_active") {
        console.log("1");
        e.children[0].className = "header-content-right__lang_style_active"
        e.children[1].className = "header-content-right__lang_style"
    }
    else if (e.children[0].className == "header-content-right__lang_style_active") {
        console.log("2");
        e.children[1].className = "header-content-right__lang_style_active"
        e.children[0].className = "header-content-right__lang_style"
    }
}

/*--------------------------*/

skipEl.addEventListener("animationend", () => {
    skipEl.className = "skip-section";
});

/*--------------------------*/

document.body.addEventListener('wheel', function (e) {
    let emptyElem = document.getElementsByClassName("empty")[0];

    emptyElem.addEventListener("animationend", () => {
        emptyElem.classList.remove("empty-anim");
        visibleContent();
    })

    if (e.deltaY < 0 && numberPage > 0 && skipEl.className == "skip-section") {
        skipEl.classList.remove("skip-section_skip-down");
        skipEl.classList.add("skip-section_skip-up");
        emptyElem.classList.add("empty-anim");

        --numberPage;
    } else if (e.deltaY > 0 && numberPage < 2 && skipEl.className == "skip-section") {
        skipEl.classList.remove("skip-section_skip-up");
        skipEl.classList.add("skip-section_skip-down");
        emptyElem.classList.add("empty-anim");

        ++numberPage;
    }
});

/*--------------------------*/

visibleContent();
function visibleContent() {  
    switch(numberPage) {
        case (0): 
            main.innerHTML =
                `<div class="main-block__background-img">
                    <img src="./img/img-main.jpg" alt="Фоновое изображение">
                </div>
                <p class="main-block__text-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                    natus alias porro quia fugiat,
                    ullam nesciunt corrupti accusantium nemo. Et.
                </p>
                <h2 class="main-block__title">It's name project</h2>`;
            break;
        case (1):
            main.innerHTML =
                `<div class="main-block__background-img">
                    <img src="./img/live-in-center.jpg" alt="Фоновое изображение">
                </div>
                <p class="main-block__text-description">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                   natus alias porro quia fugiat,
                   ullam nesciunt corrupti accusantium nemo. Et.
                </p>
                <h2 class="main-block__title-left">
                    премиальный <br> жилой <br> комплекс
                </h2>`;
            break;
        case(2): 
            main.innerHTML = 
            `<div class="main-block__background-img">
                <img src="./img/view-morning.jpg" alt="Фоновое изображение">
            </div>
            <div class="main-block__title-row">
                <h2 class="main-block__title-left">
                    виды <br> из окон
                </h2>
                <ul class="main-block__view-row" onclick="viewChange()">
                    <li class="main-block__view-item">
                        <input data-goto="1" type="radio" name="view" checked>
                        <div>утро</div>
                    </li>
                    <li class="main-block__view-item">
                        <input data-goto="2" type="radio" name="view">
                        <div>день</div>
                    </li>
                    <li class="main-block__view-item">
                        <input data-goto="3" type="radio" name="view">
                        <div>вечер</div>
                    </li>
                    <li class="main-block__view-item">
                        <input data-goto="4" type="radio" name="view">
                        <div>ночь</div>
                    </li>
                </ul>
            </div>`
        break;
    }
}

/*--------------------------*/

function viewChange() {
    let el = document.getElementsByClassName("main-block__view-row")[0].querySelectorAll("input:checked")[0];
    let backgroundImg = document.getElementsByClassName("main-block__background-img")[0].children[0];
    switch(el.dataset.goto){
        case("1"):
            backgroundImg.src = "./img/view-morning.jpg";
            break;
        case("2"):
            backgroundImg.src = "./img/view-day.jpg";
            break;
        case("3"):
            backgroundImg.src = "./img/view-evening.jpg";
            break;
        case("4"):
            backgroundImg.src = "./img/view-night.jpg";
            break;
    }
}

/*--------------------------*/

function menuActive(el) {
    document.getElementsByClassName("header-content__title")[0].classList.toggle("block-lock");
    document.getElementsByClassName("header-content__wrap-left")[0].classList.toggle("block-lock");
    document.getElementsByClassName("header-content-right__tel")[0].classList.toggle("block-lock");
    document.getElementsByClassName("header-content-right__select")[0].classList.toggle("block-lock");
    if(el.children[0].classList.contains("header-content-right__burger-menu-body_active") == false) {
        document.getElementsByClassName("menu")[0].classList.add("menu_active_down");
        document.getElementsByClassName("menu")[0].classList.remove("menu_active_up");
    } else {
        document.getElementsByClassName("menu")[0].classList.add("menu_active_up");
        document.getElementsByClassName("menu")[0].classList.remove("menu_active_down");
    }
    el.children[0].classList.toggle("header-content-right__burger-menu-body_active");
}