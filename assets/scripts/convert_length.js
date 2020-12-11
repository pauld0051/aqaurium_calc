// Get length unit one



document.getElementById("submit").addEventListener("click", convert_length);
function convert_length () {
    let unit_one = document.getElementById("unit_one").value;
    let unit_two = document.getElementById("unit_two").value;
    let unit_one_val = parseFloat(document.getElementById("unit_one_val").value);
        
    let result;
    if (unit_one === "mm" && unit_two === "mm") {
        result = unit_one_val;
    }
    if (unit_one === "mm" && unit_two === "cm")
        result = unit_one_val / 10;
    if (unit_one === "mm" && unit_two === "m")
        result = unit_one_val / 1000;
    if (unit_one === "mm" && unit_two === "in")
        result = unit_one_val / 25.4;
    if (unit_one === "mm" && unit_two === "yd")
        result = unit_one_val / 914;
    if (unit_one === "cm" && unit_two === "m")
        result = unit_one_val * 10;
    if (unit_one === "cm" && unit_two === "cm")
        result = unit_one_val;
    if (unit_one === "cm" && unit_two === "m")
        result = unit_one_val / 100;
    if (unit_one === "cm" && unit_two === "in")
        result = unit_one_val / 2.54;
    if (unit_one === "cm" && unit_two === "yd")
        result = unit_one_val / 91.44;
    if (unit_one === "m" && unit_two === "mm")
        result = unit_one_val * 1000;
    if (unit_one === "m" && unit_two === "cm")
        result = unit_one_val * 100;
    if (unit_one === "m" && unit_two === "m")
        result = unit_one_val;
    if (unit_one === "m" && unit_two === "in")
        result = unit_one_val *  39.37;
    if (unit_one === "m" && unit_two === "yd")
        result = unit_one_val * 1.094;
    if (unit_one === "in" && unit_two === "mm")
        result = unit_one_val * 25.4;
    if (unit_one === "in" && unit_two === "cm")
        result = unit_one_val * 2.54;
    if (unit_one === "in" && unit_two === "m")
        result = unit_one_val / 39.37;
    if (unit_one === "in" && unit_two === "in")
        result = unit_one_val;
    if (unit_one === "in" && unit_two === "yd")
        result = unit_one_val / 36;
    if (unit_one === "yd" && unit_two === "mm")
        result = unit_one_val * 914;
    if (unit_one === "yd" && unit_two === "cm")
        result = unit_one_val * 91.44;
    if (unit_one === "yd" && unit_two === "m")
        result = unit_one_val / 1.094;
    if (unit_one === "yd" && unit_two === "in")
        result = unit_one_val * 36;
    if (unit_one === "yd" && unit_two === "yd")
        result = unit_one_val;

document.getElementById("unit_two_val").innerHTML = result.toFixed(2) + " " + unit_two;
}
