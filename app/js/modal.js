const modal = document.getElementById("call-modal");
const openBtn = document.querySelectorAll(".call-btn");
const closeBtn = document.getElementById("call-close");

const fullFormForm = document.getElementById("fullFormForm");
const mainHeaderContact = document.getElementById("mainHeaderContact");
const mainModalForm = document.getElementById("mainModalForm");
const recallContact = document.getElementById("recallContact");

let xhttp = new XMLHttpRequest();

if (mainModalForm) {
    mainModalForm.onsubmit = function (e) {
        let phone = document.getElementById("modal-number").value;
        let name = document.getElementById("modal-fullname").value;
        let data = { name: name, phone: phone, action: "contact" };

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(xhttp.responseText);

                if (response.error === 0) {
                    showAlert("success");
                } else {
                    showAlert("error");
                }
            }
        };

        xhttp.open("POST", "/wp-admin/admin-ajax.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(
            "name=" + data.name + "&phone=" + data.phone + "&action=" + data.action
        );

        modal.style.visibility = "invisible";
        modal.style.pointerEvents = "none";
        modal.style.opacity = 0;

        e.preventDefault();
    };
}

if (mainHeaderContact) {
    mainHeaderContact.onsubmit = function (e) {
        let countryCode = document.getElementById("header-phone-country").value;
        let phone = document.getElementById("header-phone").value;

        phone = countryCode + phone;

        let data = { name: "Перезвони мне", phone: phone, action: "contact" };

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(xhttp.responseText);

                if (response.error === 0) {
                    showAlert("success");
                } else {
                    showAlert("error");
                }
            }
        };

        xhttp.open("POST", "/wp-admin/admin-ajax.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(
            "name=" + data.name + "&phone=" + data.phone + "&action=" + data.action
        );

        e.preventDefault();
    };
}

if (fullFormForm) {
    fullFormForm.onsubmit = function (e) {
        let fullName = document.getElementById("fullname").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("number").value;
        let companyName = document.getElementById("company_name").value;
        let aboutProject = document.getElementById("about_project").value;

        let data = {
            name: fullName,
            email: email,
            companyName: companyName,
            aboutProject: aboutProject,
            phone: phone,
            action: "contact"
        };

        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(xhttp.responseText);

                if (response.error === 0) {
                    showAlert("success");
                } else {
                    showAlert("error");
                }
            }
        };

        xhttp.open("POST", "/wp-admin/admin-ajax.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(
            "name=" +
                data.name +
                "&email=" +
                email +
                "&company_name=" +
                companyName +
                "&about_project=" +
                aboutProject +
                "&phone=" +
                data.phone +
                "&action=" +
                data.action
        );

        modal.style.visibility = "invisible";
        modal.style.pointerEvents = "none";
        modal.style.opacity = 0;

        e.preventDefault();
    };
}

openBtn.forEach(btn =>
    btn.addEventListener("click", function () {
        modal.style.visibility = "visible";
        modal.style.pointerEvents = "auto";
        modal.style.opacity = 1;
    })
);

closeBtn.onclick = function () {
    modal.style.visibility = "invisible";
    modal.style.pointerEvents = "none";
    modal.style.opacity = 0;
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.visibility = "invisible";
        modal.style.pointerEvents = "none";
        modal.style.opacity = 0;
    }
};
