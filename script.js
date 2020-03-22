function processTransaction() {

    var a = document.getElementById("bill").value;
    var bill = +a;
    var tip = document.getElementById("tip_percent");
    var percent = parseFloat(tip.options[tip.selectedIndex].text)/100;
    var tip_total = (bill * percent);
    var bill_total = bill + tip_total;
    var check_split = parseFloat(document.getElementById("check_split").value);
    var bill_split = bill_total/check_split;


    document.getElementById("amount").innerHTML = bill;
    document.getElementById("tipp").innerHTML = percent;
    document.getElementById("totalTip").innerHTML = tip_total.toFixed(2);
    document.getElementById("totalBill").innerHTML = bill_total.toFixed(2);
    document.getElementById("billSplit").innerHTML = bill_split.toFixed(2);
}