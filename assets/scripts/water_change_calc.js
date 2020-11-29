// Specific Heat Capacity Calculator for Aquarium Water Changes

document.getElementById("submit").addEventListener("click", calculate);
function calculate () {
let T_1 = parseFloat(document.getElementById("tap_temp").value);
let T_2 = parseFloat(document.getElementById("heated_temp").value);
let T_f = parseFloat(document.getElementById("aquarium_temp").value);
let m_t = parseFloat(document.getElementById("container_size").value);
let m_2 = (m_t * (T_f - T_1)) / (T_2 - T_1)
let m_1 = m_t - m_2

document.getElementById("tap_output").innerHTML = m_1.toFixed(2);
document.getElementById("hot_output").innerHTML = m_2.toFixed(2);
}
