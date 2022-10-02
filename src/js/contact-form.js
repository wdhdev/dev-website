document.getElementById("contact").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    reset();

    document.querySelector(".alert").style.display = "block";

    setTimeout(function() {
        document.querySelector(".alert").style.display = "none";
    }, 3000)
}

function reset() {
    document.getElementById("contact").reset();
}