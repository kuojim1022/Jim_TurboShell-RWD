let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');


openShopping.addEventListener('click', () => {
  body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
  body.classList.remove('active');
})

let products = [
  {
    id: 1,
    name: 'TS NEBULA PACK',
    image: '../images/pic_mouse/pic_mouse_light_01.png',
    price: 6800
  },
  {
    id: 2,
    name: 'TS NEBULA PRO',
    image: '../images/pic_mouse/pic_mouse_light_02.png',
    price: 5400
  },
  {
    id: 3,
    name: 'TS NEBULA CLASSIC',
    image: '../images/pic_mouse/pic_mouse_light_03.png',
    price: 2000
  },
  {
    id: 4,
    name: 'TS PHANTOM BLADE',
    image: '../images/pic_mouse/pic_mouse_line_01.png',
    price: 2500
  },
  {
    id: 5,
    name: 'TS WARHAWK LEFT',
    image: '../images/pic_mouse/pic_mouse_line_02.png',
    price: 3600
  },
  {
    id: 6,
    name: 'TS NOVA GLIDE',
    image: '../images/pic_mouse/pic_mouse_line_03.png',
    price: 3000
  }
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
    <a href="./Jim_mouseDetailPage.html">
    <img src="image/${value.image}">
    </a>
    <div class="info-wrap">
      <div class="left_info">
        <div class="title">${value.name}</div>

        ${key === 0 ? `<div class="description">滑鼠底座專業版與無線充電接收器<br>（兩者皆可另外購買）</div>` : ''}
        ${key === 1 ? `<div class="description">搭載 HyperScroll 傾斜滾輪<br>可自訂無線遊戲滑鼠</div>` : ''}
        ${key === 2 ? `<div class="description">具備 TS Chroma™ RGB <br>功能的可自訂遊戲滑鼠。</div>` : ''}
        ${key === 3 ? `<div class="description">輪詢率達 8000Hz <br>雙手通用電競遊戲滑鼠。</div>` : ''}
        ${key === 4 ? `<div class="description">具備 16 顆可編程按鍵<br>適合慣用左手的使用者</div>` : ''}
        ${key === 5 ? `<div class="description">組合式 MOBA/MMO 遊戲滑鼠<br>享受更具沉浸感的遊戲體驗。</div>` : ''}


   
       <div class="price">NT$${value.price.toLocaleString()}</div>
    
     </div>
      <div  class="right_object">
     <button onclick="addToCard(${key})">加入購物車</button>
       <a href="./Jim_mouseDetailPage.html" class="mouseDetail">
      <div> 了解更多> </div>
       </a>
       </div>
      </div>
            `;
    list.appendChild(newDiv);
  })
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = '';
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement('li');
      newDiv.innerHTML = `
                <div>
                <img src="image/${value.image}"/>
                </div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  })
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}




