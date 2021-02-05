const countryCodeInput = document.getElementById("header-country");

countryCodeInput.addEventListener("keyup", e => {
    e.target.value = formatCountryCode(e.target.value);
});

const formatCountryCode = value => {
    const valueNumbers = value.slice(0, value.length).replace(/\D/g, "");

    return `+${valueNumbers}`;
};
