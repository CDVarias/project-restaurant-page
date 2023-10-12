import loadHomeBoth from "./home";
import loadMenuNow from "./menu";
import loadOrderNow from "./orderNow";

function createHome (){
    //Create the menu bar
    const menuBar = document.createElement('div');
    menuBar.className = 'menu-bar';

    //Create the logo
    const logo = document.createElement('div');
    logo.className = 'logo';

    const logoImg = document.createElement('img');
    logoImg.setAttribute('width' , '450');
    logoImg.setAttribute('height', '120');
    logoImg.src = 'https://queen.jollibee.com.ph/2022/08/bmpzMYBj-jollibee-logo-2x.png';
    logoImg.className = 'custom-logo';
    logoImg.alt = ''; 
    logo.appendChild(logoImg);

    //Create the menu
    const menu = document.createElement('div');
    menu.className = 'menu';

    const menuList = document.createElement('ul');

    const homeItem = document.createElement('li');
    homeItem.classList.add('button-nav');
    homeItem.setAttribute('id', 'home');
    homeItem.textContent = 'Home';
    homeItem.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(homeItem);
        loadHomeBoth();
    });


    const menuItem = document.createElement('li');
    menuItem.classList.add('button-nav');
    menuItem.setAttribute('id','menu');
    menuItem.textContent = 'Menu';
    menuItem.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(menuItem);
        loadMenuNow();
    });

    const orderItem = document.createElement('li');
    const orderButton = document.createElement('button');
    orderButton.classList.add('button-nav');
    orderButton.setAttribute('id', 'orderNow');
    orderButton.textContent = 'Order Now';

    orderButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(orderButton);
        loadOrderNow();
    });

    orderItem.appendChild(orderButton);
    menuList.appendChild(homeItem);
    menuList.appendChild(menuItem);
    menuList.appendChild(orderItem);
    menu.appendChild(menuList);

    menuBar.appendChild(logo);
    menuBar.appendChild(menu);
    
    return menuBar;
}

function setActiveButton(button){
    const buttons = document.querySelectorAll('.button-nav');

    buttons.forEach((button) => {
        if(button !== this){
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

function createMain (){
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function loadWebsite(){
    const content = document.getElementById('content');

    content.appendChild(createHome());
    content.appendChild(createMain());

    setActiveButton(document.querySelector('.button-nav'));
    loadHomeBoth();
}



export default loadWebsite;
