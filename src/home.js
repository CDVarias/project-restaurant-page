
function loadHome(){
    //Create the cover-page
    const coverPage = document.createElement('div');
    coverPage.className = 'cover-page';

    // Create the message
    const message = document.createElement('div');
    message.className = 'message';
    const h1 = document.createElement('h1');
    h1.textContent = 'Bringing joy to you';
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Have your Jollibee favorites delivered <br> right to your doorsteps!';
    const orderNowButton = document.createElement('button');
    orderNowButton.textContent = 'Order Now';
    message.appendChild(h1);
    message.appendChild(h2);
    message.appendChild(orderNowButton);

    //Create the logo-2
    const logo2 = document.createElement('div');
    logo2.className = 'logo-2';

    coverPage.appendChild(message);
    coverPage.appendChild(logo2);

    return coverPage;
}

function loadHome2 (){
    //Create the options section
    const options = document.createElement('div');
    options.className = 'options';

    // Create the first-row
    const firstRow = document.createElement('div');
    firstRow.className = 'first-row';

    // Create the first-item
    const firstItem = document.createElement('div');
    firstItem.className = 'first-item';
    const firstItemFigure = document.createElement('figure');
    const firstItemImage = document.createElement('img');
    firstItemImage.src = 'https://queen.jollibee.com.ph/2021/12/order_pickup-150x150.png';
    firstItemImage.alt = '';
    const firstItemCaption = document.createElement('figcaption');
    firstItemCaption.className = 'item';
    firstItemCaption.textContent = 'Order & Pick up';
    firstItemFigure.appendChild(firstItemImage);
    firstItemFigure.appendChild(firstItemCaption);
    firstItem.appendChild(firstItemFigure);

    // Create the second-item
    const secondItem = document.createElement('div');
    secondItem.className = 'second-item';
    const secondItemFigure = document.createElement('figure');
    const secondItemImage = document.createElement('img');
    secondItemImage.src = 'https://queen.jollibee.com.ph/2021/12/download_app-150x150.png';
    secondItemImage.alt = '';
    const secondItemCaption = document.createElement('figcaption');
    secondItemCaption.className = 'item';
    secondItemCaption.textContent = 'Download the App';
    secondItemFigure.appendChild(secondItemImage);
    secondItemFigure.appendChild(secondItemCaption);
    secondItem.appendChild(secondItemFigure);

    // Create the third-item
    const thirdItem = document.createElement('div');
    thirdItem.className = 'third-item';
    const thirdItemFigure = document.createElement('figure');
    const thirdItemImage = document.createElement('img');
    thirdItemImage.src = 'https://queen.jollibee.com.ph/2021/12/8700-150x150.png';
    thirdItemImage.alt = '';
    const thirdItemCaption = document.createElement('figcaption');
    thirdItemCaption.className = 'item';
    thirdItemCaption.textContent = '#87000';
    thirdItemFigure.appendChild(thirdItemImage);
    thirdItemFigure.appendChild(thirdItemCaption);
    thirdItem.appendChild(thirdItemFigure);

    firstRow.appendChild(firstItem);
    firstRow.appendChild(secondItem);
    firstRow.appendChild(thirdItem);

    // Create the horizontal line
    const hr = document.createElement('hr');

    // Create the ex-promo
    const exPromo = document.createElement('div');
    exPromo.className = 'ex-promo';
    const h1ExPromo = document.createElement('h1');
    h1ExPromo.textContent = 'Exclusive Promos';
    exPromo.appendChild(h1ExPromo);

    //Create the promos section
    const promos = document.createElement('div');
    promos.className = 'promos';

    // Create the first-promo
    const firstPromo = document.createElement('div');
    firstPromo.className = 'first-promo';
    const firstPromoFigure = document.createElement('figure');
    const firstPromoImage = document.createElement('img');
    firstPromoImage.src = 'https://queen.jollibee.com.ph/2023/09/JBPH-CSW-BEV-PROMO-FB-SPRITE-FA-min-819x1024.jpg';
    firstPromoImage.alt = '';
    firstPromoFigure.appendChild(firstPromoImage);
    firstPromo.appendChild(firstPromoFigure);

    // Create the second-promo
    const secondPromo = document.createElement('div');
    secondPromo.className = 'second-promo';
    const secondPromoFigure = document.createElement('figure');
    const secondPromoImage = document.createElement('img');
    secondPromoImage.src = 'https://queen.jollibee.com.ph/2023/09/JBPH-CSW-BEV-PROMO-FB-MOUNTAIN-DEW-FA-min-819x1024.jpg';
    secondPromoImage.alt = '';
    secondPromoFigure.appendChild(secondPromoImage);
    secondPromo.appendChild(secondPromoFigure);

    //Create the third-promo
    const thirdPromo = document.createElement('div');
    thirdPromo.className = 'third-promo';
    const thirdPromoFigure = document.createElement('figure');
    const thirdPromoImage = document.createElement('img');
    thirdPromoImage.src = 'https://queen.jollibee.com.ph/2023/09/JBPH_P.MADAGASCAR_WELCOME-GIFT_DIGIPOST-4x5_FA-min-819x1024.jpg';
    thirdPromoImage.alt = '';
    thirdPromoFigure.appendChild(thirdPromoImage);
    thirdPromo.appendChild(thirdPromoFigure);

    promos.appendChild(firstPromo);
    promos.appendChild(secondPromo);
    promos.appendChild(thirdPromo);

    // Create the see-all button
    const seeAll = document.createElement('div');
    seeAll.className = 'see-all';
    const seeAllButton = document.createElement('button');
    seeAllButton.textContent = 'See All Promos';
    seeAll.appendChild(seeAllButton);

    options.appendChild(firstRow);
    options.appendChild(hr);
    options.appendChild(exPromo);
    options.appendChild(promos);
    options.appendChild(seeAll);

    return options;
}

function loadHomeBoth() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(loadHome());
    main.appendChild(loadHome2());
}


export default loadHomeBoth;