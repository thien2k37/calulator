
    function bam() {
    let input_VL =  document.getElementById("vl").value;
    let input_SH =  document.getElementById("sh").value;
    let input_HH =  document.getElementById("hh").value;
    let VL = parseInt(input_VL);
    let SH = parseInt(input_SH);
    let HH = parseInt(input_HH);
    document.getElementById("kq").innerHTML = (VL + SH + HH) / 3;
}


        function CD() {
        let Celsius = document.getElementById("C").value;
        let C = parseInt(Celsius);
        document.getElementById("F").innerHTML = 9 / 5 * C + 32 + " F" ;
    }


        function tinh() {
        let bankinh_S = document.getElementById("r").value;
        let R = parseInt(bankinh_S);
        document.getElementById("s").innerHTML = R**2 * 3.14;
    }
        function tinh_cv() {
        let bankinh_cv = document.getElementById("r").value;
        let r = parseInt(bankinh_cv);
        document.getElementById("cv").innerHTML = r * 2 *3.14;
    }


