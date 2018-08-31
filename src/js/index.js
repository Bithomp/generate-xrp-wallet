document.getElementById("thisYear").innerHTML = new Date().getFullYear(); 

function newripple() {
  var api = new ripple.RippleAPI();
  var account = api.generateAddress();
  document.getElementById("address").value = account.address;
  document.getElementById("secret").value = account.secret;
  document.getElementById("status").innerHTML = 'Note: <i class="orange">Don\'t share your secret key.</i>';
  document.getElementById("button").innerHTML = 'One more'; 
}
