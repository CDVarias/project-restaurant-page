
function loadOrder (){
    // Create order div
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order';

    // Create container div
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    // Create first-part div
    const firstPartDiv = document.createElement('div');
    firstPartDiv.className = 'first-part';

    // Create header div
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';

    // Create header img
    const headerImg = document.createElement('img');
    headerImg.src = 'https://jb-ph-cdn.tillster.com/prod/Carousel/Seoul_Omnibus_%20Desktop%20Banner_opt.webp_a9790bf7-e647-4579-a015-aa7faa18d770.webp';
    headerImg.className = 'header-first-img';

    headerDiv.appendChild(headerImg);

    // Create new order div
    const newOrderDiv = document.createElement('div');
    newOrderDiv.className = 'new-order';

    // Create new order button
    const newOrderBtn = document.createElement('button');
    newOrderBtn.className = 'new-orderBtn'
    newOrderBtn.textContent = 'START NEW ORDER';

    newOrderDiv.appendChild(newOrderBtn);

    firstPartDiv.appendChild(headerDiv);
    firstPartDiv.appendChild(newOrderDiv);

    
    // Create second-part div
    const secondPartDiv = document.createElement('div');
    secondPartDiv.className = 'second-part';

    // Create first-row div
    const firstRowDiv = document.createElement('div');
    firstRowDiv.className = 'first-row';

    // Create first-img div
    const firstImgDiv = document.createElement('div');
    firstImgDiv.className = 'first-img';

    // Create select-container1 div
    const selectCtn1 = document.createElement('div');
    selectCtn1.className = 'select-container1';

    // Create button select
    const btn1 = document.createElement('button');
    btn1.className = 'select'
    btn1.textContent = 'SELECT';

    selectCtn1.appendChild(btn1);

    // Create img container-1 img
    const container1Img = document.createElement('img');
    container1Img.src = 'https://jb-ph-cdn.tillster.com/prod/Carousel/FA-JB_PH_INCREASE_SPOTLIGHT_TILE_792x240_opt.jpg_c6a6a29b-bdcd-4980-9f29-bc7e92977b20.jpg';
    container1Img.setAttribute('width', '880');
    container1Img.setAttribute('height', '275.19');

    firstImgDiv.appendChild(selectCtn1);
    firstImgDiv.appendChild(container1Img);


    // Create second-img div
    const secondImgDiv = document.createElement('div');
    secondImgDiv.className = 'second-img';

    // Create select-container2 div
    const selectCtn2 = document.createElement('div');
    selectCtn2.className = 'select-container2';

    // Create button select
    const btn2 = document.createElement('button');
    btn2.className = 'select'
    btn2.textContent = 'SELECT';

    selectCtn2.appendChild(btn2);

    // Create img container-2 img
    const container2Img = document.createElement('img');
    container2Img.src = 'https://jb-ph-cdn.tillster.com/qa/Carousel/JB_PH_INCREASE_FAMILY_MEALS_TILE_FA_736x490_opt.jpg_0f513f1c-9b7a-49ee-8c66-f4ddf0e06266.jpg';

    secondImgDiv.appendChild(selectCtn2);
    secondImgDiv.appendChild(container2Img);

    // Create third-img div
    const thirdImgDiv = document.createElement('div');
    thirdImgDiv.className = 'third-img';

    // Create select-container3 div
    const selectCtn3 = document.createElement('div');
    selectCtn3.className = 'select-container3';

    // Create button select
    const btn3 = document.createElement('button');
    btn3.className = 'select'
    btn3.textContent = 'SELECT';

    selectCtn3.appendChild(btn3);

    // Create img container-3 img
    const container3Img = document.createElement('img');
    container3Img.src = 'https://jb-ph-cdn.tillster.com/prod/Carousel/FA-JB_PH_INCREASE_CHICKENJOY_TILE_384x240_opt.jpg_cf81a220-9c12-4ffa-ac62-cd26708fe922.jpg';
    container3Img.setAttribute('width','440');
    container3Img.setAttribute('height','275.17');
    

    thirdImgDiv.appendChild(selectCtn3);
    thirdImgDiv.appendChild(container3Img);

    // Create fourth-img div
    const fourthImgDiv = document.createElement('div');
    fourthImgDiv.className = 'fourth-img';

    // Create select-container4 div
    const selectCtn4 = document.createElement('div');
    selectCtn4.className = 'select-container4';

    // Create button select
    const btn4 = document.createElement('button');
    btn4.className = 'select'
    btn4.textContent = 'SELECT';

    selectCtn4.appendChild(btn4);

    // Create img container-4 img
    const container4Img = document.createElement('img');
    container4Img.src = 'https://jb-ph-cdn.tillster.com/qa/Carousel/JB_PH_INCREASE_BURGER_TILE_FA_736x490_opt.jpg_0bca19df-8933-445c-8b2b-9a8a1f23d796.jpg';

    fourthImgDiv.appendChild(selectCtn4);
    fourthImgDiv.appendChild(container4Img);


    // Create fifth-img div
    const fifthImgDiv = document.createElement('div');
    fifthImgDiv.className = 'fifth-img';

    // Create select-container5 div
    const selectCtn5 = document.createElement('div');
    selectCtn5.className = 'select-container5';

    // Create button select
    const btn5 = document.createElement('button');
    btn5.className = 'select'
    btn5.textContent = 'SELECT';

    selectCtn5.appendChild(btn5);

    // Create img container-5 img
    const container5Img = document.createElement('img');
    container5Img.src = 'https://jb-ph-cdn.tillster.com/prod/Carousel/JBPH_0324_JBPH_THUMBNAIL_APRIL%20UPDATE_736x490px_opt.jpg_9b6e5c53-7b6b-45d3-bcaf-0b9883f77f11.jpg';
    fifthImgDiv.appendChild(selectCtn5);
    fifthImgDiv.appendChild(container5Img);


    firstRowDiv.appendChild(firstImgDiv);
    firstRowDiv.appendChild(secondImgDiv);
    firstRowDiv.appendChild(thirdImgDiv);
    firstRowDiv.appendChild(fourthImgDiv);
    firstRowDiv.appendChild(fifthImgDiv);

    // Create second-row div
    const secondRowDiv = document.createElement('div');
    secondRowDiv.className = 'second-row';

    // Create left-part div
    const leftPartDiv = document.createElement('div');
    leftPartDiv.className = 'left-part';

    // Create paragraph
    const p = document.createElement('p');
    p.textContent = 'View Full Menu';

    leftPartDiv.appendChild(p);

    // Create right-part div
    const rightPartDiv = document.createElement('div');
    rightPartDiv.className = 'right-part';

    // Create right-part img
    const rightPartImg = document.createElement('img');
    rightPartImg.src = 'https://www.jollibeedelivery.com/1693494639/img/home-page/info.png';
    rightPartDiv.appendChild(rightPartImg);

    secondRowDiv.appendChild(leftPartDiv);
    secondRowDiv.appendChild(rightPartDiv);

    // Append first-row and second-row to second part div
    secondPartDiv.appendChild(firstRowDiv);
    secondPartDiv.appendChild(secondRowDiv);

    // Append first-part and second-part to container
    containerDiv.appendChild(firstPartDiv);
    containerDiv.appendChild(secondPartDiv);

    // Append container to order div
    orderDiv.appendChild(containerDiv);

    return orderDiv;

}

function loadOrderNow (){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(loadOrder());
}

export default loadOrderNow;