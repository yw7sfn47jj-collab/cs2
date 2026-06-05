var cardimgurl245 = "https://www.college1.com/images/cards/gbCard";
var adnum361 = 1;
var winobj422 = -1;
var cardnum789 = -1;
var product4 = {};
var product5 = {};
var jsonobj4 = { "type":"books", "number":"1" };
var jsonobj5 = { "type":"books", "number":"2" };
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
    html += "<button onclick='popupAd917()'>PopUp Ad</button>";
    html += "<button onclick='closeAd917()'>Close Ad</button>";
    html += "<button onclick='makeForm571()'>Enter Data</button>";
    html += "<button onclick='execButton936(product4)'>Product #4</button>";
    html += "<button onclick='execButton936(product5)'>Product #5</button>";
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
function popupAd917() {
    winobj422 = window.open("", "adWindow", "width=350,height=200");
    var html = "";
    if (adnum361 == 1) {
        html += "<body style='background-color:lightblue; text-align:center;'>";
        html += "<h1>Buy Atomic Habits!</h1>";
        html += "<p>Build better habits today.</p>";
        html += "</body>";
        adnum361 = 2;
    } else if (adnum361 == 2) {
        html += "<body style='background-color:lightgreen; text-align:center;'>";
        html += "<h1>Read Robert Greene!</h1>";
        html += "<p>Discover The Laws of Human Nature.</p>";
        html += "</body>";
        adnum361 = 3;
    } else {
        html += "<body style='background-color:pink; text-align:center;'>";
        html += "<h1>Psychology of Money</h1>";
        html += "<p>Learn smarter money choices.</p>";
        html += "</body>";
        adnum361 = 1;
    }
    winobj422.document.open();
    winobj422.document.write(html);
    winobj422.document.close();
}
function closeAd917() {
    if (winobj422 != -1) {
        winobj422.close();
    }
}
function makeForm571() {
    var html = "";
    html += "<form onSubmit='return checkForm881()' name='customerform'>";
    html += "<table width='100%' border='1'>";
    html += "<tr><td>First Name: <input type='text' name='firstname'></td>";
    html += "<td align='right'>Last Name: <input type='text' name='lastname'></td></tr>";
    html += "<tr><td colspan='2'>Address: <input type='text' name='address' size='50'></td></tr>";
    html += "<tr><td>City: <input type='text' name='city'></td>";
    html += "<td align='right'>State: <input type='text' name='state' size='3'>";
    html += " Zip: <input type='text' name='zip' size='6'></td></tr>";
    html += "<tr><td colspan='2'>Email Address: <input type='text' name='emailaddr' size='50'></td></tr>";
    html += "<tr><td><input type='submit' value='Submit'></td>";
    html += "<td align='right'><input type='reset'></td></tr>";
    html += "</table>";
    html += "</form>";
    document.getElementById("main829").innerHTML = html;
}
function checkForm881() {
    var msg = "";
    if (document.customerform.firstname.value == "") {
        msg += "First Name\n";
    }
    if (document.customerform.lastname.value == "") {
        msg += "Last Name\n";
    }
    if (document.customerform.address.value == "") {
        msg += "Address\n";
    }
    if (document.customerform.city.value == "") {
        msg += "City\n";
    }
    if (document.customerform.state.value == "") {
        msg += "State\n";
    }
    if (document.customerform.zip.value == "") {
        msg += "Zip\n";
    }
    if (document.customerform.emailaddr.value == "") {
        msg += "Email Address\n";
    }
    if (msg != "") {
        alert("Missing:\n" + msg);
        return false;
    }
    return true;
}
function getProduct912(jsonobj) {
    var server = "https://www.college1.com/getproduct.php";
    var jsonstr = JSON.stringify(jsonobj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", server + "?jsonstr=" + jsonstr, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            replystr = this.responseText;
            if (product4 == null) {
                product4 = JSON.parse(replystr);
            } else if (product5 == null) {
                product5 = JSON.parse(replystr);
            } else {
                console.log("Error, no object variable available");
            }
        }
    };
}
