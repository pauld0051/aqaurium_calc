// Convert temperatures

document.getElementById("submit").addEventListener("click", calculate_c);
function calculate_c () {
    let T_in_C = parseFloat(document.getElementById("deg_celsius").value);

    let T_convert_C = (T_in_C * 9/5) + 32;
    document.getElementById("deg_celsius_conv").innerHTML = T_convert_C.toFixed(2) + " °F";

    let T_in_F = parseFloat(document.getElementById("deg_fahrenheit").value);

    let T_convert_F = (T_in_F - 32) * 5/9;
    document.getElementById("deg_fahrenheit_conv").innerHTML = T_convert_F.toFixed(2) + " °C";
}