"use strict";

// The model of all features
const features = {
    drinksholder: false,
    led: false,
    propeller: false,
    shield: false,
    solarfan: false
};

window.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("Initiate program");
    // register toggle-clicks
    document.querySelectorAll(".option").forEach(option => option.addEventListener("click", toggleOption));
}

function toggleOption(event) {
    const target = event.currentTarget;
    const feature = target.dataset.feature;

    // Toggle feature in "model"
    features[feature] = !features[feature];

    // If feature is (now) turned on: 
    // - mark target as chosen (add class "chosen")      ✓
    // - un-hide the feature-layer(s) in the #product-preview;       ✓
    // - create featureElement and append to #selected ul ..... ??
    // - create FLIP-animation to animate featureElement from img in target, to
    //   its intended position. Do it with normal animation or transition class! .... ???

    // Else - if the feature (became) turned off:
    // - no longer mark target as chosen       ✓
    // - hide the feature-layer(s) in the #product-preview       ✓
    // - find the existing featureElement in #selected ul
    // - create FLIP-animation to animate featureElement to img in target
    // - when animation is complete, remove featureElement from the DOM

    if (features[feature]) {
        // Feature is added
        console.log(`Feature ${feature} is turned on!`);

        // Add chosen class
        target.classList.add("chosen");

        document.querySelector(`[data-feature="${feature}"]`).classList.remove("hide");

    } else {
        // Feature is removed
        console.log(`Feature ${feature} is turned off!`);

        // Remove chosen class
        target.classList.remove("chosen");

        document.querySelector(`[data-feature="${feature}"]`).classList.add("hide");

    }
}

// Create featureElement to be appended to #selected ul - could have used a <template> instead
function createFeatureElement(feature) {
    const li = document.createElement("li");
    li.dataset.feature = feature;

    const img = document.createElement("img");
    img.src = `images/feature_${feature}.png`;
    img.alt = capitalize(feature);

    li.append(img);

    return li;
}

function capitalize(text) {
    return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase();
}