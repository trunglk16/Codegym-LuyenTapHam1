var a = ["Polaris","Aldebaran","Deneb","Vega","Altair","Dubhe","Regulus"];
var star = ["Ursa Minor","Tarurus","Cygnus","Lyra","Aquila","Ursa Major","Leo"];
var result;
function find(input) {
    for (var i =0; i< star.length; i++){
        if (input == a[i]){
            result = star[i];
            alert(result);
            return true;
            break;
        }else{
            result =" khong co ket qua phu hop";
        }
    }
    alert(result);
}

var input = prompt("Nhap ten can tim");
find(input);

