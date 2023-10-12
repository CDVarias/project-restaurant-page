
function loadMenu (){
    // Create the food-menu
    const foodMenu = document.createElement('div');
    foodMenu.className = 'food-menu';

    // Create the bestsellers title
    const title = document.createElement('div');
    title.className = 'title';
    const h1Title = document.createElement('h1');
    h1Title.textContent = 'BestSellers';

    title.appendChild(h1Title);

    // Create the choices
    const choices = document.createElement('div');
    choices.className = 'choices';

    // Create the first choice
    const firstChoice = document.createElement('div');
    firstChoice.className = 'first-choice';

    const firstInfoLogo = document.createElement('div');
    firstInfoLogo.className = 'info-logo';
    const firstChoiceLogo = document.createElement('img');
    firstChoiceLogo.src = 'https://queen.jollibee.com.ph/2022/01/tootip.png';
    firstChoiceLogo.className = 'menu-tooltip';
    firstInfoLogo.appendChild(firstChoiceLogo);
   
    const firstFoodPic = document.createElement('div');
    firstFoodPic.className = 'food-pic';
    const firstChoicePic = document.createElement('img');
    firstChoicePic.src = 'https://queen.jollibee.com.ph/2023/05/8pc.-Chickenjoy-Bucket-w-Jolly-Spaghetti-Family-Pan-min.png';
    firstChoicePic.setAttribute('width', '170');
    firstChoicePic.setAttribute('height','170');
    firstChoicePic.className = 'attachment-large size-large';
    firstChoicePic.loading = 'lazy';
    firstFoodPic.appendChild(firstChoicePic);

    const firstFoodName = document.createElement('div');
    firstFoodName.className = 'food-name';
    const firstH2 = document.createElement('h2');
    firstH2.textContent = '6-pc. Chickenjoy Bucket w/ Jolly Spaghetti Family';
    firstFoodName.appendChild(firstH2);

    const firstFoodDescription = document.createElement('div');
    firstFoodDescription.className = 'food-description';
    const firstP = document.createElement('p');
    firstP.textContent = 'Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!';
    firstFoodDescription.appendChild(firstP);

    const firstButton = document.createElement('div');
    firstButton.className = 'food-menuBtn';
    const firstOrderButton = document.createElement('button');
    firstOrderButton.textContent = 'Order Now';
    firstButton.appendChild(firstOrderButton);

    firstChoice.appendChild(firstInfoLogo);
    firstChoice.appendChild(firstFoodPic);
    firstChoice.appendChild(firstFoodName);
    firstChoice.appendChild(firstFoodDescription);
    firstChoice.appendChild(firstButton);

   // Create the second choice
   const secondChoice = document.createElement('div');
   secondChoice.className = 'second-choice';

   const secondInfoLogo = document.createElement('div');
   secondInfoLogo.className = 'info-logo';
   const secondChoiceLogo = document.createElement('img');
   secondChoiceLogo.src = 'https://queen.jollibee.com.ph/2022/01/tootip.png';
   secondChoiceLogo.className = 'menu-tooltip';
   secondInfoLogo.appendChild(secondChoiceLogo);
  
   const secondFoodPic = document.createElement('div');
   secondFoodPic.className = 'food-pic';
   const secondChoicePic = document.createElement('img');
   secondChoicePic.src = 'https://queen.jollibee.com.ph/2023/05/8pc.-Chickenjoy-Bucket-w-Jolly-Spaghetti-Family-Pan-min.png';
   secondChoicePic.setAttribute('width', '170');
   secondChoicePic.setAttribute('height','170');
   secondChoicePic.className = 'attachment-large size-large';
   secondChoicePic.loading = 'lazy';
   secondFoodPic.appendChild(secondChoicePic);

   const secondFoodName = document.createElement('div');
   secondFoodName.className = 'food-name';
   const secondH2 = document.createElement('h2');
   secondH2.textContent = '8-pc. Chickenjoy Bucket w/ Jolly Spaghetti Family';
   secondFoodName.appendChild(secondH2);

   const secondFoodDescription = document.createElement('div');
   secondFoodDescription.className = 'food-description';
   const secondP = document.createElement('p');
   secondP.textContent = 'Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!';
   secondFoodDescription.appendChild(secondP);

   const secondButton = document.createElement('div');
   secondButton.className = 'food-menuBtn';
   const secondOrderButton = document.createElement('button');
   secondOrderButton.textContent = 'Order Now';
   secondButton.appendChild(secondOrderButton);

   secondChoice.appendChild(secondInfoLogo);
   secondChoice.appendChild(secondFoodPic);
   secondChoice.appendChild(secondFoodName);
   secondChoice.appendChild(secondFoodDescription);
   secondChoice.appendChild(secondButton);

   // Create the third choice
   const thirdChoice = document.createElement('div');
   thirdChoice.className = 'third-choice';

   const thirdInfoLogo = document.createElement('div');
   thirdInfoLogo.className = 'info-logo';
   const thirdChoiceLogo = document.createElement('img');
   thirdChoiceLogo.src = 'https://queen.jollibee.com.ph/2022/01/tootip.png';
   thirdChoiceLogo.className = 'menu-tooltip';
   thirdInfoLogo.appendChild(thirdChoiceLogo);
  
   const thirdFoodPic = document.createElement('div');
   thirdFoodPic.className = 'food-pic';
   const thirdChoicePic = document.createElement('img');
   thirdChoicePic.src = 'https://queen.jollibee.com.ph/2022/02/6-pc.-Chickenjoy-with-Palabok-Family-Pan-1-min.png';
   thirdChoicePic.setAttribute('width', '170');
   thirdChoicePic.setAttribute('height','170');
   thirdChoicePic.className = 'attachment-large size-large';
   thirdChoicePic.loading = 'lazy';
   thirdFoodPic.appendChild(thirdChoicePic);

   const thirdFoodName = document.createElement('div');
   thirdFoodName.className = 'food-name';
   const thirdH2 = document.createElement('h2');
   thirdH2.textContent = '6-pc. Chickenjoy Bucket w/ Jolly Spaghetti Family';
   thirdFoodName.appendChild(thirdH2);

   const thirdFoodDescription = document.createElement('div');
   thirdFoodDescription.className = 'food-description';
   const thirdP = document.createElement('p');
   thirdP.textContent = 'Jollibee Meal Time Bundle brings you your favorite crispylicious, juicylicious Chickenjoy with the meatiest, cheesiest, sweet-sarap Jolly Spaghetti!';
   thirdFoodDescription.appendChild(thirdP);

   const thirdButton = document.createElement('div');
   thirdButton.className = 'food-menuBtn';
   const thirdOrderButton = document.createElement('button');
   thirdOrderButton.textContent = 'Order Now';
   thirdButton.appendChild(thirdOrderButton);

   thirdChoice.appendChild(thirdInfoLogo);
   thirdChoice.appendChild(thirdFoodPic);
   thirdChoice.appendChild(thirdFoodName);
   thirdChoice.appendChild(thirdFoodDescription);
   thirdChoice.appendChild(thirdButton);
   
   choices.appendChild(firstChoice);
   choices.appendChild(secondChoice);
   choices.appendChild(thirdChoice);

   foodMenu.appendChild(title);
   foodMenu.appendChild(choices);

   return foodMenu;
}

function loadMenuNow(){
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(loadMenu());
}

export default loadMenuNow;