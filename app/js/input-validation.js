const handleInputChange = id => {
    const element = document.getElementById(id);
    if (element) {
        const validationMark = element.parentElement.getElementsByClassName(
            "input-validation"
        )[0];
        if (validationMark) {
            validationMark.setAttribute(
                "class",
                `input-validation ${
                    element.value !== ""
                        ? "input-validation--green"
                        : "input-validation--red"
                }`
            );
        }
    }
};
