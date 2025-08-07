// Base64-encoded SVG icons
const icons = {
    sun: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjMwIiBmaWxsPSJ5ZWxsb3ciIHN0cm9rZT0ib3JhbmdlIiBzdHJva2Utd2lkdGg9IjUiIC8+PC9zdmc+",
    snowflake: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxsaW5lIHgxPSI2NCIgeTE9IjAiIHgyPSI2NCIgeTI9IjEyOCIgc3Ryb2tlPSJjeWFuIiBzdHJva2Utd2lkdGg9IjUiIC8+PGxpbmUgeDE9IjAiIHkxPSI2NCIgeDI9IjEyOCIgeTI9IjY0IiBzdHJva2U9ImN5YW4iIHN0cm9rZS13aWR0aD0iNSIgLz48L3N2Zz4="
};

// Convert function
function convert() {
    const input = parseFloat(document.getElementById("tempInput").value);
    const type = document.getElementById("conversionType").value;
    const result = document.getElementById("result");
    const icon = document.getElementById("icon");

    if (isNaN(input)) {
        alert("Please enter a valid number");
        return;
    }

    let output = "";
    switch (type) {
        case "CtoF":
            output = `${(input * 9 / 5 + 32).toFixed(2)} °F`;
            break;
        case "FtoC":
            output = `${((input - 32) * 5 / 9).toFixed(2)} °C`;
            break;
        case "CtoK":
            output = `${(input + 273.15).toFixed(2)} K`;
            break;
        case "KtoC":
            output = `${(input - 273.15).toFixed(2)} °C`;
            break;
    }

    result.innerText = `Result: ${output}`;

    // Change icon based on temperature
    if (input < 10) {
        icon.src = icons.snowflake;
    } else {
        icon.src = icons.sun;
    }
}

// Theme toggle
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("dark");
    const btn = document.getElementById("theme-toggle");
    btn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
};
