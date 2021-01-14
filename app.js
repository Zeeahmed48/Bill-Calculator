calculatedAmount = () => {
        var a = parseInt(document.getElementById("eb").innerHTML);
        var b = parseInt(document.getElementById("gb").innerHTML);
        var c = parseInt(document.getElementById("pb").innerHTML);
        var d = parseInt(document.getElementById("rb").innerHTML);
        var e = document.getElementById("wa");
        var f = a + b + c + d;
        e.innerHTML = f;
      };