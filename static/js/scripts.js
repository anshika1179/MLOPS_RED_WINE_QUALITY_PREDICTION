document.addEventListener("DOMContentLoaded", function () {
    var revealNodes = document.querySelectorAll(".reveal");
    revealNodes.forEach(function (node, index) {
        node.style.animationDelay = (index * 100) + "ms";
        node.classList.add("is-visible");
    });

    var sampleButton = document.getElementById("sampleBtn");
    if (sampleButton) {
        sampleButton.addEventListener("click", function () {
            var sampleValues = {
                fixed_acidity: 7.4,
                volatile_acidity: 0.7,
                citric_acid: 0.0,
                residual_sugar: 1.9,
                chlorides: 0.076,
                free_sulfur_dioxide: 11.0,
                total_sulfur_dioxide: 34.0,
                density: 0.9978,
                pH: 3.51,
                sulphates: 0.56,
                alcohol: 9.4
            };

            Object.keys(sampleValues).forEach(function (name) {
                var input = document.querySelector("input[name='" + name + "']");
                if (input) {
                    input.value = sampleValues[name];
                }
            });
        });
    }
});