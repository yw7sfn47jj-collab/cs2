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
  return html;
}
