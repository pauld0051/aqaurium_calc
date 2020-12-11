// Convert temperatures

document.getElementById("deg_celsius").addEventListener("keyup", calculate_c);
function calculate_c() {
    let T_in_C = parseFloat(document.getElementById("deg_celsius").value);

    let T_convert_C = (T_in_C * 9 / 5) + 32;
    document.getElementById("deg_celsius_conv").innerHTML = T_convert_C.toFixed(2) + " °F";
}

document.getElementById("deg_fahrenheit").addEventListener("keyup", calculate_f);
function calculate_f() {
    let T_in_F = parseFloat(document.getElementById("deg_fahrenheit").value);

    let T_convert_F = (T_in_F - 32) * 5 / 9;
    document.getElementById("deg_fahrenheit_conv").innerHTML = T_convert_F.toFixed(2) + " °C";
}

// Convert volumes

document.getElementById("litres").addEventListener("keyup", calculate_g);
function calculate_g() {
    let L_in_G = parseFloat(document.getElementById("litres").value);

    let L_convert_G = L_in_G / 3.785;
    document.getElementById("litres_conv").innerHTML = L_convert_G.toFixed(2) + " Gal (US liquid gallons)";
}

document.getElementById("gallons").addEventListener("keyup", calculate_l);
function calculate_l() {
    let G_in_L = parseFloat(document.getElementById("gallons").value);

    let G_convert_L = G_in_L * 3.785;
    document.getElementById("gallons_conv").innerHTML = G_convert_L.toFixed(2) + " L";
}

