const countryCodeInput = document.getElementById("header-country");
const phoneNumberInput = document.getElementById("header-phone");

countryCodeInput.addEventListener("keyup", e => {
    e.target.value = formatCountryCode(e.target.value);
});

phoneNumberInput.addEventListener("keyup", e => {
    e.target.value = formatPhoneNumber(e.target.value);
});

const formatCountryCode = value => {
    const valueNumbers = value.slice(0, value.length).replace(/\D/g, "");

    return `+${valueNumbers}`;
};

const formatPhoneNumber = value => {
    if (value.length > 12) {
        return value.substring(0, 12);
    }

    value = value.replace(/\D/g, "").trim().split("-").join("");

    if (value.length > 3 && value.length <= 6)
        value = value.slice(0, 3) + "-" + value.slice(3);
    else if (value.length > 6)
        value = value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);

    return value;
};
