var imgurl893 = "https://www.college1.com/images/";
var cardimgurl245 = "https://www.college1.com/images/cards/gbCard";
var cardnum789 = -1;
var product1 = {
    name:"Atomic Habits",
    id:"4426",
    desc:"A bestselling book by James Clear about building good habits and breaking bad ones."
};
var product2 = {
    name:"The Laws of Human Nature",
    id:"88123",
    desc:"A book by Robert Greene that explores human behavior, motivation, and relationships."
};
var product3 = {
    name:"The Psychology of Money",
    id:"2400X",
    desc:"A book by Morgan Housel about money, investing, and financial decision making."
};
var companyname5 = "Izabela's Book Store";
var address3 = "492 Main St. Valencia, CA 91344";
var phonenumber3 = "(555) 869-1234";
function getHeader() {
    var html = "";
    html = html + "<div style='background-color:navy; color:white; padding:25px; text-align:center; width:100%;'>";
    html = html + "<h1 style='font-size:40px;'>" + companyname5 + "</h1>";
    html = html + "</div>";
    return html;
}
function getFooter(cname, address, phone) {
    var html = "";
    html = html + "<div style='background-color:navy; color:white; padding:15px; text-align:center; width:100%; font-size:12px;'>";
    html = html + cname + "<br>";
    html = html + address + "<br>";
    html = html + phone;
    html = html + "</div>";
    html = html + "<br>";
    html = html + navigator.appName + " ";
    html = html + navigator.appVersion + " ";
    html = html + navigator.platform;
    return html;
}
function makeMenu5() {
    var html = "Menu: ";
    html += "<button onclick='execButton936(product1)'>Product #1</button>";
    html += "<button onclick='execButton936(product2)'>Product #2</button>";
    html += "<button onclick='execButton936(product3)'>Product #3</button>";
    html += "<button onclick='dealCards244()'>Deal Cards</button>";
    html += "<button onclick='hitCard236()'>Hit Card</button>";
    return html;
}
function makeMain3(myproduct) {
    var html = "";
    var produrl = imgurl893 + myproduct.id + ".gif";
    html = html + "My Product:<br>";
    html = html + "Product Name: " + myproduct.name + "<br>";
    html = html + "Product ID: " + myproduct.id + "<br>";
    html = html + "Product Description: " + myproduct.desc + "<br>";
    html = html + makeLinkBar270(myproduct) + "<br>";
    html = html + "Product Image:<br>";
    html = html + "<img src='" + produrl + "'>";
    return html;
}
function execButton936(myproduct) {
    document.getElementById("main829").innerHTML = makeMain3(myproduct);
}
function hitCard236() {
    if (cardnum789 >= 0 && cardnum789 < 5) {
        document.getElementById("card" + cardnum789).src = cardimgurl245 + cardnum789 + ".gif";
        cardnum789 = cardnum789 + 1;
    } else {
        alert("You need to deal cards first, or you already hit all cards.");
    }
}
function dealCards244() {
    var html = "";
    cardnum789 = 2;
    html += "<h2>Black Jack</h2>";
    html += "<img id='card0' src='" + cardimgurl245 + "0.gif'>";
    html += "<img id='card1' src='" + cardimgurl245 + "51.gif'>";
    html += "<img id='card2' src='" + cardimgurl245 + "52.gif'>";
    html += "<img id='card3' src='" + cardimgurl245 + "52.gif'>";
    html += "<img id='card4' src='" + cardimgurl245 + "52.gif'>";
    document.getElementById("main829").innerHTML = html;
}
function makeLinkBar270(myproduct) {
    var html = "";
    html = html + "<a href='https://developer.paypal.com/tools/sandbox/'>Add ";
    html = html + myproduct.name;
    html = html + " To Cart</a>";
    return html;
}
