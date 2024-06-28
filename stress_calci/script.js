const sxx = document.getElementById('sigmaxx');
const syy = document.getElementById('sigmayy');
const sxy = document.getElementById('sigmaxy');
const ti = document.getElementById('thetai');
const b1 = document.getElementById('btn1');
const b2 = document.getElementById('btn2');
const ps1 = document.getElementById('sigma1');
const ps2 = document.getElementById('sigma2');
const tp = document.getElementById('thetap');
const sxi = document.getElementById('sigmaxtheta');
const syi = document.getElementById('sigmaytheta');
const sxyi = document.getElementById('sigmaxytheta')



function fun1() {
    const avg1 = (parseFloat(sxx.value) + parseFloat(syy.value)) / 2;
    const avg2 = (parseFloat(sxx.value) - parseFloat(syy.value)) / 2;
    const val1 = Math.sqrt((avg2 * avg2) + (sxy.value * sxy.value));
    const val2 = sxy.value / avg1;
    const val3 = avg2 * Math.cos((2 * ti.value * 3.14) / 180);
    const val4 = sxy.value * Math.sin((2 * ti.value * 3.14) / 180);
    const val5 = sxy.value * Math.cos((2 * ti.value * 3.14) / 180);
    const val6 = avg2 * Math.sin((2 * ti.value * 3.14) / 180);

    ps1.value = parseFloat(avg1) + parseFloat(val1);
    ps2.value = parseFloat(avg1) - parseFloat(val1);
    tp.value = ((Math.atan(val2)) * 180) / 3.14;
    sxi.value = parseFloat(avg1) + parseFloat(val3) + parseFloat(val4);
    syi.value = parseFloat(avg1) - parseFloat(val3) - parseFloat(val4);
    sxyi.value = parseFloat(val5) - parseFloat(val6);

    if (!ti.value) {
        ti.value = "-";
        sxi.value = "-";
        syi.value = "-";
        sxyi.value = "-";
    }

    if (!sxx.value || !syy.value || !sxy.value) {
        alert('Please enter the normal and shear stress/strain values on x-y coordinate planes...');
        sxx.value = "";
        syy.value = "";
        sxy.value = "";
        ti.value = "";
        ps1.value = "";
        ps2.value = "";
        tp.value = "";
        sxi.value = "";
        syi.value = "";
        sxyi.value = "";
    }
}

function fun2() {
    sxx.value = "";
    syy.value = "";
    sxy.value = "";
    ti.value = "";
    ps1.value = "";
    ps2.value = "";
    tp.value = "";
    sxi.value = "";
    syi.value = "";
    sxyi.value = "";
}

b1.addEventListener('click', fun1);
b2.addEventListener('click', fun2);