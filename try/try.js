const product = [
    {
        id: 0,
        image: 'ket.jpg',
        title: 'Kettlebell',
        price: 80,
    },
    {
        id: 1,
        image: 'pic1.jpg',
        title: 'Hexagon Dumbbell',
        price: 60,
    },
    {
        id: 2,
        image: 'item1.png',
        title: 'Agility Ladder',
        price: 15,
    },
    {
        id: 3,
        image: 'hh-1.jpg',
        title: 'Barbell',
        price: 115,
    },
    {
        id: 4,
        image: 'whey.jpg',
        title: 'Whey Protein',
        price: 20,
    },
    {
        id: 5,
        image: 'crea.png',
        title: 'Creatine',
        price: 20,
    },
    {
        id: 6,
        image: 'bar.jpg',
        title: 'Olympic Bar',
        price: 20,
    },
    {
        id: 7,
        image: 'belt.jpg',
        title: 'Powerlifting Belt',
        price: 13,
    },
    {
        id: 8,
        image: 'capsule.jpg',
        title: 'Creatine Capsule Supplement',
        price: 25,
    },
    {
        id: 8,
        image: 'capsule.jpg',
        title: 'Creatine Capsule Supplement',
        price: 25,
    },

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
