//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow:
    const disclaimer = document.getElementById('disclaimer');
    var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'
    disclaimer.innerHTML = finePrint;
//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
    const cookies = "Nabisco"

    const brand1 = document.getElementById('brand1');
    brand1.innerHTML = cookies;
//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 
    const item1 = document.getElementById('item1');
    item1.innerHTML = "Cheeseburger Oreos"
//4. Target the div element with the id of 'price1' and update the content to $8.99.
    const price1 = document.getElementById('price1');
    price1.innerHTML='$8.99'
//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
    const discount1 = document.getElementById('discount1');
    discount1.innerHTML= 'Free fries with purchase!'
//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.
    const item2 = document.createElement('div');
    item1.id='item2';
    item2.innerHTML = 'Hendricks Gin';
    const William = document.getElementById('brand2');
    William.appendChild(item2);
//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.
    const price2 = document.createElement('div');
    price2.id = 'price2';
    price2.innerHTML='$34.99';
    item2.appendChild(price2);


//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.
    const discount3 = document.createElement('button');
    discount3.id='discount3';
    discount3.innerHTML='50% OFF Axe body Soap';
    const block3 = document.getElementsByClassName('block3');
    block3[0].appendChild(discount3);
//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
    const item = document.getElementsByClassName('item');
    item[0].innerHTML ='Orange Chicken'
//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.
    const freeShirt = document.createElement('button');
    freeShirt.className='discount';
    freeShirt.innerHTML="Free T-shirt and fortune cookie with purchase!";
    const block1 = document.getElementsByClassName('block1');
    block1[1].appendChild(freeShirt);
//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.
    const brand = document.getElementsByClassName('brand');
    brand[1].innerHTML='Uniqlo';
//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
    const price = document.getElementsByClassName('price');
    price[1].innerHTML='10,000';
//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
    const headphoneBrand = document.createElement('div');
    headphoneBrand.className = 'brand';
    headphoneBrand.innerHTML = 'Hifiman Shangri-La';
    
    block3[1].appendChild(headphoneBrand);
//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
    const heads = document.createElement('div');
    heads.className = 'item';
    heads.innerHTML='Electrostatic Headphones';
    block3[1].appendChild(heads);
//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
    const headPrice = document.createElement('div');
    headPrice.className='price';
    headPrice.innerHTML='$18,000';
    block3[1].appendChild(headPrice);
//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.
    const headButton = document.createElement('button');
    headButton.className = 'discount';
    headButton.innerHTML = 'Free Barry Manilow CD with purchase';
    block3[1].appendChild(headButton);
//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!
const slipBrand = document.getElementsByClassName('brand')[3];
slipBrand.innerHTML="H&M";

const slipItem = document.getElementsByClassName('item')[3];
slipItem.innerHTML='Unicorn-Head Slippers';


price[3].innerHTML='$21.99';

const discount = document.getElementsByClassName('discount');
discount[3].innerHTML='Free knee-high tube socks with purchase';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
    brand[4].innerHTML='Frito Lay';
    item[4].innerHTML="Poppin' Jalapeno Doritos";
    price[4].innerHTML="$7.77";
    discount[4].innerHTML='33% OFF any 6 pack Budweiser or Bud Light';
//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!
    brand[5].innerHTML="Any Dog Breeder";
    item[5].innerHTML='Baby Puggy';
    price[5].innerHTML='Priceless';
    discount[5].innerHTML='No Discounts. This cutie is worth every penny!'
//Final Boss 
//Create your own product for the last three sections.

//NIKE SHOES
    brand[6].innerHTML='NIKE';
    item[6].innerHTML="Air Jordan Sneakers";
    price[6].innerHTML='$65.00';
    discount[6].innerHTML='Buy a pair and get some free socks :D'

//Fender Strat

const guitarBrand = document.createElement('div');
guitarBrand.className='brand';
guitarBrand.innerHTML='Fender';

const block2= document.getElementsByClassName('block2');
block2[3].appendChild(guitarBrand);

const guitarType=document.createElement('div');
guitarType.className='item';
guitarType.innerHTML='Fender Stratocaster';
block2[3].appendChild(guitarType);

const guitarPrice = document.createElement('div');
guitarPrice.className='price';
guitarPrice.innerHTML='$299.99';
block2[3].appendChild(guitarPrice);

const guitarDiscount=document.createElement('button');
guitarDiscount.className='discount';
guitarDiscount.innerHTML='Buy an axe and get free string supply for one year'
block2[3].appendChild(guitarDiscount);


//Thors Hammer
const hammerBrand = document.createElement('div');
hammerBrand.className='brand';
hammerBrand.innerHTML='Asgard';
block3[3].appendChild(hammerBrand);

const hammer = document.createElement('div');
hammer.className='item';
hammer.innerHTML="Thor's Hammer";
block3[3].appendChild(hammer);

const hamPrice = document.createElement('div');
hamPrice.className='price';
hamPrice.innerHTML='$1,000,000';
block3[3].appendChild(hamPrice);

const hamDiscount = document.createElement('button');
hamDiscount.className='discount';
hamDiscount.innerHTML='Buy this and fly!!!'
block3[3].appendChild(hamDiscount);
