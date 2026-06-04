var product1 = {
    name:"HP 4426",
    id:"4426",
    desc:"Newest and Best Laptop from HP Computer"};
var product2 = {
    name:"Apple 88123 iPad",
    id:"88123",
    desc:"Apple Tablet Computer"};
var product3 = {
    name:"Dell Dimension 2400",
    id:"2400X",
    desc:"A fast 2.4 ghz computer"
};var companyname5 = "Izabela's Book Store";
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
    return html;
} 
  return html;
}
function makeMain3() {
  var html = "";
  html = html + "My Product:<br>";
  html = html + "Product Name: <br>";
  html = html + "Product ID: <br>";
  html = html + "Product Description: <br>";
  html = html + "Shopping Cart Link Bar <br>";
  html = html + "Product Image: <br>";
  return html;
}
function execButton936(myproduct) {
    document.getElementById("main829").innerHTML = makeMain3(myproduct);
}
