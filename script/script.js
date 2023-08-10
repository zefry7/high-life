let numberPage;
let skipEl = document.getElementsByClassName("skip-section")[0];

console.log(location.pathname.split('/')[location.pathname.split('/').length - 1]);
switch (location.pathname.split('/')[location.pathname.split('/').length - 1]) {
    case (""): {
        numberPage = 0;
        break
    }
    case ("index.html"): {
        numberPage = 0;
        break
    }
    case ("222.html"): {
        numberPage = 1;
        break
    }
    case ("333.html"): {
        numberPage = 2;
        break
    }
    case ("444.html"): {
        numberPage = 3;
        break
    }
    case ("555.html"): {
        numberPage = 4;
        break
    }
    case ("666.html"): {
        numberPage = 5;
        break
    }
    case ("777.html"): {
        numberPage = 6;
        break
    }
    case ("888.html"): {
        numberPage = 7;
        break
    }
    case ("999.html"): {
        numberPage = 8;
        break
    }
}


let listImageBackgroundMain = [
    "img/img-background-1.jpg",
    "img/img-background-2.jpeg",
    "img/img-background-3.jpg",
    "img/img-background-4.jpg"
];

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
        visibleContent()
    })

    if (e.deltaY < 0 && numberPage > 0 && skipEl.className == "skip-section") {
        skipEl.className = "skip-section skip-section_skip-up";
        emptyElem.classList.add("empty-anim");

        --numberPage;
    } else if (e.deltaY > 0 && numberPage < 8 && skipEl.className == "skip-section") {
        skipEl.classList.remove("skip-section_skip-up");
        skipEl.classList.add("skip-section_skip-down");
        emptyElem.classList.add("empty-anim");

        ++numberPage;
    }
});

/*--------------------------*/


function visibleContent() {
    let main = document.getElementsByClassName("main-content")[0];
    switch (numberPage) {
        case (0):
            history.pushState(null, null, "/high-life/index.html")
            main.innerHTML =
                `            <div class="title-block">
            <div class="title-block__row-top">
                <p class="title-block__text-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                    natus alias porro quia fugiat,
                    ullam nesciunt corrupti accusantium nemo. Et.
                </p>
                <div class="title-block__year">
                    Дата сдачи объекта
                    <hr>
                    2024
                </div>
            </div>
            <h2 class="title-block__title">It's name project</h2>
            <div class="title-block__background-img">
                <img src="./img/img-main.jpg" alt="Фоновое изображение">
            </div>
            </div>`
            break;
        case (1):
            history.pushState(null, null, "/high-life/222.html")
            main.innerHTML =
                `<div class="advantages-complex-block">
            <div class="advantages-complex__left-content">
                <h3 class="advantages-complex__title">Преимущества<br> жилого <br>комплекса</h3>
                <ul class="advantages-complex__list" onclick="themeChange()">
                    <li class="advantages-complex__item">
                        <input data-info="1" type="radio" name="adv" id="">
                        <div>Концепция Э4</div>
                    </li>
                    <li class="advantages-complex__item">
                        <input data-info="2" type="radio" name="adv" id="">
                        <div>Технология inHOME</div>
                    </li>
                    <li class="advantages-complex__item">
                        <input data-info="3" type="radio" name="adv" id="">
                        <div>Termo-S</div>
                    </li>
                    <li class="advantages-complex__item">
                        <input data-info="4" type="radio" name="adv" id="">
                        <div>Знаковая архитектура MLA+</div>
                    </li>
                    <li class="advantages-complex__item">
                        <input data-info="5" type="radio" name="adv" id="">
                        <div>Спортивные площадки</div>
                    </li>
                </ul>
            </div>
            <div class="advantages-complex__right-content">
                <div class="advantages-complex__body-theme">
                    <div class="advantages-complex__img-item">
                        <img src="" alt="Картинка на тему">
                    </div>
                    <div class="advantages-complex__text">

                    </div>
                </div>
                <div class="advantages-complex__background-img">
                    <img src="./img/img-main.jpg" alt="Фоновое изображение">
                </div>
            </div>
        </div>`
            break;
        case (2):
            history.pushState(null, null, "/high-life/333.html")
            main.innerHTML = ` 
            <div class="plan-block">
                <div class="plan-block__marker">
                    <div class="plan-block__info">
                        00000000000000000000000000
                    </div>
                </div>
                <div class="plan-block__background-img">
                    <img src="./img/plan.jpg" alt="Фоновое изображение">
                </div>
            </div>`;

            break;
        case (3):
            history.pushState(null, null, "/high-life/444.html")
            main.innerHTML = `
            <div class="view-block">
                <div class="view-block__title-row">
                    <h2 class="view-block__title-left">
                        виды <br> из окон
                    </h2>
                    <ul class="view-block__view-row" onclick="viewChange()">
                        <li class="view-block__view-item">
                            <input data-goto="1" type="radio" name="view" checked>
                            <div>утро</div>
                        </li>
                        <li class="view-block__view-item">
                            <input data-goto="2" type="radio" name="view">
                            <div>день</div>
                        </li>
                        <li class="view-block__view-item">
                            <input data-goto="3" type="radio" name="view">
                            <div>вечер</div>
                        </li>
                        <li class="view-block__view-item">
                            <input data-goto="4" type="radio" name="view">
                            <div>ночь</div>
                        </li>
                    </ul>
                </div>
                <div class="title-block__background-img">
                    <img src="./img/view-morning.jpg" alt="Фоновое изображение">
                </div>
            </div>`;
            break;
        case (4):
            history.pushState(null, null, "/high-life/555.html")
            main.innerHTML = `<div class="advantages-complex-block">
            <div class="advantages-complex__left-content">
                <h3 class="advantages-complex__title">Благоустройство<br> квартиры</h3>
                <ul class="advantages-complex__list" onclick="themeApartmentsChange()">
                    <li class="advantages-complex__item">
                        <input data-info="1" type="radio" name="improv" id="">
                        <div>Высота потолков до 3 метров</div>
                    </li>
                    <li class="advantages-complex__item">
                        <input data-info="2" type="radio" name="improv" id="">
                        <div>Большой выбор планировочных решений</div>
                    </li>
                    <li class="advantages-complex__item">
                        <input data-info="3" type="radio" name="improv" id="">
                        <div>Остекление балконов и лоджий</div>
                    </li>
                    <li class="advantages-complex__item">
                        <input data-info="4" type="radio" name="improv" id="">
                        <div>Большие окна</div>
                    </li>
                    <li class="advantages-complex__item">
                        <input data-info="5" type="radio" name="improv" id="">
                        <div>Качественные двери</div>
                    </li>
                </ul>
            </div>
            <div class="advantages-complex__right-content">
                <div class="advantages-complex__body-theme">
                    <div class="advantages-complex__img-item">
                        <img src="" alt="Картинка на тему">
                    </div>
                    <div class="advantages-complex__text">

                    </div>
                </div>
                <div class="advantages-complex__background-img">
                    <img src="./img/img-main.jpg" alt="Фоновое изображение">
                </div>
            </div>
            </div>`
            break;
        case (5):
            history.pushState(null, null, "/high-life/666.html")
            main.innerHTML = `<div class="map-block">
            <div class="map-block__info">
                <div class="map-block__info-column">
                    <div class="map-block__title">Строительный адрес</div>
                    <div class="map-block__address">пр. Ленинградский</div>
                </div>
                <div class="map-block__info-column">
                    <div class="map-block__title">Расположение</div>
                    <div class="map-block__description">
                        <p class="map-block__text">Расположение жилого комплекса «Аквилон АКВАРТАЛ» отвечает всем
                            требованиям активного, но в тоже время и любящего отдых жителя округа. Гарноничное
                            слияние природы и активно развивающегося района помогает находить в полном комфорте.
                            Современная архитектура с отсылками к северному характеру и очаровательной дикости
                            природы придется по вкусу многим новоселам.</p>
                        <p class="map-block__text">Расположение жилого комплекса «Аквилон АКВАРТАЛ» отвечает всем
                            требованиям активного, но в тоже время и любящего отдых жителя округа. Гарноничное
                            слияние природы и активно развивающегося района помогает находить в полном комфорте.
                            Современная архитектура с отсылками к северному характеру и очаровательной дикости
                            природы придется по вкусу многим новоселам.</p>
                    </div>
                </div>
            </div>
            <iframe class="map-block__map"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0b8f4608f4d23597f39115467076005df5bd694bec2c5b8c03d745a394cb05e7&amp;source=constructor"
                width="100%" height="720" frameborder="0"></iframe>
            </div>`;
            break;
        case (6):
            history.pushState(null, null, "/high-life/777.html")
            main.innerHTML = `<div class="company-block">
            <div class="company-block__body">
                <div class="company-block__column">
                    <div class="company-block__name">Аквилон</div>
                    <div class="company-block__description">Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Vero minima iste cum aliquid hic culpa, rem maiores placeat explicabo quaerat quidem
                        facilis earum, provident voluptatibus aperiam quo amet sequi corporis, necessitatibus ipsam
                        sunt? Fugiat facilis recusandae voluptas aliquam omnis, fugit perspiciatis eum provident
                        minus tempora beatae dolorum accusamus, soluta in!</div>
                </div>
                <div class="company-block__column">
                    <div class="company-block__column-img">
                        <img src="./img/live-in-center.jpg" alt="">
                    </div>
                    <div class="company-block__statistics">
                        <div class="company-block__statistics-item">
                            <span><span class="value-change">100</span> лет</span><br> на рынке недвижимости
                        </div>
                        <div class="company-block__statistics-item">
                            <span>топ-<span class="value-change">20</span></span><br> крупнейших зайстройщиков
                            России
                        </div>
                        <div class="company-block__statistics-item">
                            <span>1 место</span><br> по объёмам строительства в Поморье
                        </div>
                        <div class="company-block__statistics-item">
                            <span>> 200<br> объектов</span><br> сданы точно в срок
                        </div>
                    </div>
                </div>
            </div>
            </div>`;
            valueChange(0)
            break;
        case (7):
            history.pushState(null, null, "/high-life/888.html")
            main.innerHTML = null;
            break;
        case (8):
            history.pushState(null, null, "/999.html")
            main.innerHTML = `<div class="contact-block">
            <div class="contact-block__info">
                <div class="contact-block__text">
                    <p class="contact-block__office">
                        <span>Офис продаж:</span><br>
                        <span>Название улицы, 00/00</span>
                        ПН-ПТ: 09:00-21:00, СБ-ВС: 09:30-20:00
                    </p>
                    <div class="contact-block__tel">
                        +7 900 000 00 00
                    </div>
                    <ul class="contact-block__social-media">
                        <li class="contact-block__social-media-item">Telegram</li>
                        <li class="contact-block__social-media-item">vkontakte</li>
                        <li class="contact-block__social-media-item">instagram</li>
                    </ul>
                </div>
                <div class="contact-block__logo">
                    name project
                </div>
            </div>
            <div class="contact-block__background-img">
                <img src="./img/end-img.jpg" alt="Фоновое изображение">
            </div>
            </div>`;
            break;
    }
}

/*--------------------------*/

function viewChange() {
    let el = document.getElementsByClassName("view-block__view-row")[0].querySelectorAll("input:checked")[0];
    let backgroundImg = document.getElementsByClassName("title-block__background-img")[0].children[0];
    switch (el.dataset.goto) {
        case ("1"):
            backgroundImg.src = "./img/view-morning.jpg";
            break;
        case ("2"):
            backgroundImg.src = "./img/view-day.jpg";
            break;
        case ("3"):
            backgroundImg.src = "./img/view-evening.jpg";
            break;
        case ("4"):
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

    if (el.children[0].classList.contains("header-content-right__burger-menu-body_active") == false) {
        document.getElementsByClassName("menu")[0].classList.add("menu_active_down");
        document.getElementsByClassName("menu")[0].classList.remove("menu_active_up");
    } else {
        document.getElementsByClassName("menu")[0].classList.add("menu_active_up");
        document.getElementsByClassName("menu")[0].classList.remove("menu_active_down");
    }

    el.children[0].classList.toggle("header-content-right__burger-menu-body_active");
}

/*--------------------------*/

let menuItemTel = document.getElementsByClassName("menu__links")[0].lastElementChild;
let popUp = document.getElementsByClassName("pop-up")[0];
menuItemTel.addEventListener("click", () => {
    popUp.classList.toggle("pop-up_active");

    menuActive(document.getElementsByClassName("header-content-right__burger-menu")[0])
});

let popupButton = document.getElementsByClassName("pop-up__button")[0];
popupButton.addEventListener("click", () => {
    popUp.classList.toggle("pop-up_active");
})

/*--------------------------*/

function themeChange() {
    let el = document.getElementsByClassName("advantages-complex__list")[0].querySelectorAll("input:checked")[0];
    let imgTheme = document.getElementsByClassName("advantages-complex__img-item")[0].children[0];
    let advText = document.getElementsByClassName("advantages-complex__text")[0];

    document.getElementsByClassName("advantages-complex__body-theme")[0].classList.add("advantages-complex__body-theme_active");
    switch (el.dataset.info) {
        case ("1"):
            advText.innerHTML = `
            <p class="advantages-complex__text-title">Концепция Э4</p>
            <p>В основе домов от Аквилон лежит Стандарт Э4, качественно новый стандарт строительства,
                базирующийся на четырех принципах: Энергоэффективности, Эргономике пространства,
                Экологичности и безопасности проживания, Экономии средств и времени жильцов, возможной
                благодаря «умным» системам управления домом.
            </p>
            <h6>Энергоэффективность</h6>
            <p>
                Энергоэффективность класса А и соответствие высочайшим европейским стандартам
                экологичности
                достигается с помощью инноваций в сферах отопления, водоснабжения и электроснабжения.
            </p>
            <h6>Экология</h6>
            <p>
                Экологичность и ресурсосбережение на каждом этапе создания жилого комплекса: от
                использования материалов с переработанной составляющей и минимизации строительного
                мусора до
                комплексного озеленения территории и улучшенной системы вентиляции.
            </p>
            <h6>Экономия</h6>
            <p>
                Экономия средств жильца – важное проявление заботы. Планировка «Разумные метры» снижает
                стоимость жилья без потери функциональности, а комплекс inHOME и Termo-S позволяют
                существенно экономить на коммунальных платежах.
            </p>
            <h6>Эргономика</h6>
            <p>
                Эргономика пространства и принцип «Разумные метры» позволит максимально эффективно
                использовать каждый метр площади и сделать жизнь всех членов семьи более комфортной.
            </p>
            `
            imgTheme.src = "../../img/adv-img.jpg";
            break;
        case ("2"):
            advText.innerHTML = `
            <p class="advantages-complex__text-title">Технология inHOME</p>
            <p>Жилой комплекс оснащен полным набором "умных" систем, предоставляющих широкие
            функциональные возможности для взаимодействия с управляющей компанией и управления
            квартирой через мобильное приложение. Каждая квартира оборудована IP-домофоном с
            интерактивным многофункциональным экраном, позволяющим жильцам просматривать изображение
            с различных камер видеонаблюдения как на самом экране, так и на мобильном телефоне.
            Находясь на работе, в командировке или на отдыхе, жильцы могут удаленно управлять своей
            квартирой и быть в курсе происходящего дома.
            </p>
            <p>
                - IP-домофония с контролем доступа: возможность вывода изображений с камер
                видеонаблюдения на установленный в квартире планшет или смартфон
            </p>
            <p>- Smart key – система бесключевого доступа в парадные и во двор + гостевой код для
                бесконтактного входа гостя</p>
            <p>
                - Датчики дыма и открытия входной двери с возможностью автоматической отправки сигнала
                на пульт диспетчера УК и в мобильное приложение
            </p>
            <p>
                - Умные счетчики с возможностью автоматического сбора и отправки показаний в УК и в
                мобильное приложение
            </p>
            <p>
                - Энергосберегающий режим standby - дистанционное отключение электроустановок в квартире
            </p>
            <p>- Система защиты от протечек с автоматической запорной арматурой</p>
            <p>Неотъемлемой частью inHOME является smart key. Это единый индикатор, который позволяет
                войти на территорию комплекса, в детский клуб, дает доступ в паркинг и другие помещения
                дома.</p>
            <p>Неотъемлемой частью inHOME является smart key. Это единый индикатор, который позволяет
               войти на территорию комплекса, в детский клуб, дает доступ в паркинг и другие помещения
                дома.</p>
            <p>Обычный магнитный ключ заменили на виртуальный smart key (брелок), для каждого члена
                семьи свой, который работает как бесключевой доступ в автомобиль. Его не надо доставать,
                чтобы открыть дверь, при приближении на авто к подземному паркингу ворота открываются
                автоматически.
            </p>
            `
            imgTheme.src = "../../img/adv-img.jpg";
            break;
        case ("3"):
            advText.innerHTML = `
            <p class="advantages-complex__text-title">Termo-S</p>
            <p>Инновационная концепция Termo-S направлена на усиление теплоты жилых помещений. Это
            достигается за счет применения монолитно-кирпичной конструкции с наружными стенами
            толщиной 460 мм. Эти стены сложены из газобетонных блоков, которые дополнительно
            изолированы воздушным зазором и керамогранитом. Кроме того, цоколь и крыша здания имеют
            усиленный теплоизоляционный слой. Кроме того, для повышения теплоэффективности
            установлены многокамерные стеклопакеты с селективным покрытием.
            </p>`
            imgTheme.src = "../../img/adv-img.jpg";
            break;
        case ("4"):
            advText.innerHTML = `<p class="advantages-complex__text-title">Знаковая архитектура MLA+</p>
            <p> Архитектурная концепция проекта создана именитым голландским бюро MLA+, чей авторский
                стиль традиционно передает особую нордическую эстетику в облике зданий
            </p>
            <p>Разноуровневая застройка создает четкую динамику линий – акцентные башни сменяются
                соразмерными секциями, сохраняя видовые характеристики и больше солнечного света во
                дворе и в квартирах.
            </p>
            <p>Цветовая гамма фасадных решений квартала отражает краски северной природы – песчаные
                речные отмели, фактуры дерева, бесконечное серое небо и всполохи огненного заката на
                воде.
            </p>
            <p>Облицовка фасадов будет выполнена в натуральном кирпиче с использованием функционального
                декора из керамики и металла, что обеспечит долговечность привлекательного экстерьера
                зданий.
            </p>
            `
            imgTheme.src = "../../img/adv-img.jpg";
            break;
        case ("5"):
            advText.innerHTML = `
            <p class="advantages-complex__text-title">Спортивные площадки</p>
            <p> Все спортивные жители квартала оценят зону street workout: уличные тренажеры и турники
                для поддержания формы и укрепления здоровья. Столы для игры в пинг-понг для активных
                встреч с соседями прямо во дворе.
            </p>`
            imgTheme.src = "../../img/adv-img.jpg";
            break;
    }
}

/*--------------------------*/

function themeApartmentsChange() {
    let el = document.getElementsByClassName("advantages-complex__list")[0].querySelectorAll("input:checked")[0];
    let imgTheme = document.getElementsByClassName("advantages-complex__img-item")[0].children[0];
    let advText = document.getElementsByClassName("advantages-complex__text")[0];

    document.getElementsByClassName("advantages-complex__body-theme")[0].classList.add("advantages-complex__body-theme_active");
    switch (el.dataset.info) {
        case ("1"):
            advText.innerHTML = `
            <p class="advantages-complex__text-title">Высота потолков до 3 метров</p>
            <p>Высота потолков в квартирах не ниже 2,7 м, а высота верхних этажей по концепции TOP FLAT достигает 3 метров. Все это поможет наполнить светом, объёмом всю квартиру.
            </p>           
            `
            imgTheme.src = "../../img/style-art.jpg";
            break;
        case ("2"):
            advText.innerHTML = `
            <p class="advantages-complex__text-title">Большой выбор планировочных решений</p>
            <p>В жилом комплексе представлены различные планировочные решения: студии, однокомнатные, евро-двухкомнатные, двухкомнатные, евро-трёхкомнатные, трёхкомнатные квартиры.
            </p>
            `
            imgTheme.src = "../../img/style-art.jpg";
            break;
        case ("3"):
            advText.innerHTML = `
            <p class="advantages-complex__text-title">Остекление балконов и лоджий
            </p>
            <p>Балконы или лоджия в каждой квартире! Чтобы наполнить квартиру еще больше светом мы используем с панорамное остекление. Для удобства мы оборудовали балконы и лоджии освещением и местом для розетки.             
            </p>
            <p>            
            Здесь вы точно сможете любоваться закатами с комфортом.
            </p>`
            imgTheme.src = "../../img/style-art.jpg";
            break;
        case ("4"):
            advText.innerHTML = `<p class="advantages-complex__text-title">Большие окна
            </p>
            <p> Ваша квартира будет озарена светом благодаря большим энергоэффектвным многокамерным окнам с селективным покрытием и  высотой подоконника до 60 см. Особенно вы почувствуете преимущество такого остекления в осенне-зимний период, когда так сильно не хватает солнечного света.
            </p>
            `
            imgTheme.src = "../../img/style-art.jpg";
            break;
        case ("5"):
            advText.innerHTML = `
            <p class="advantages-complex__text-title">Качественные двери
            </p>
            <p> В квартирах будут установлены качественные металлические входные двери с замками и толщиной до 60 мм.
            </p>
            <p>
            Двери с тепло- и звукоизоляцией, внутренней отделкой полотна и системой взломостойких замков.
            </p>`
            imgTheme.src = "../../img/style-art.jpg";
            break;
    }
}

/*--------------------------*/
valueChange(1000);

function valueChange(u) {
    let el = document.getElementsByClassName("value-change");
    for (let a of el) {
        let n = 50;
        let delay = setInterval(() => {
            let int = setInterval(function () {
                --n;
                a.textContent = n;
                if (n == 20) {
                    clearInterval(int);
                }
            }, 50)
            clearInterval(delay);
        }, u)
    }
}