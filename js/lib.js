const productList = [
    { id: "001", name: "Shin Cậu Bé Bút Chì", price: 210000, img: "../assets/images/Shin3.jpg", info: "Hàng Nhập" },
    { id: "002", name: "Shin Voi Con", price: 200000, img: "../assets/images/shin-cosplay-voi-5.jpg", info: "Việt Nam" },
    { id: "003", name: "Shin Khủng Long Xanh", price: 500000, img: "../assets/images/shin.khung.long.jpg", info: "Hàng Loại 1" }
];

function addProduct(item) {
    const container = document.getElementById("product-list");

    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");

    const myImage = document.createElement("div");
    myImage.setAttribute("class", "product-image");
    const productImg = document.createElement("img");
    productImg.setAttribute("src", item.img);
    productImg.setAttribute("alt", item.name);
    myImage.appendChild(productImg);

    const myInfo = document.createElement("div");
    myInfo.setAttribute("class", "product-info");

    const name = document.createElement("h3");
    const nameText = document.createTextNode(item.name);
    name.appendChild(nameText);

    const price = document.createElement("p");
    const priceText = document.createTextNode("Giá: " + item.price + "đ");
    price.appendChild(priceText);

    const info = document.createElement("p");
    const infoText = document.createTextNode("Tình trạng: " + item.info);
    info.appendChild(infoText);

    const link = document.createElement("a");
    link.setAttribute("href", "#");
    const linkText = document.createTextNode("Xem chi tiết");
    link.appendChild(linkText);

    myInfo.appendChild(name);
    myInfo.appendChild(price);
    myInfo.appendChild(info);
    myInfo.appendChild(link);

    myDiv.appendChild(myImage);
    myDiv.appendChild(myInfo);

    if (container) {
        container.appendChild(myDiv);
    }
}


function showAllProducts() {
    productList.forEach(item => {
        addProduct(item);
    });
}