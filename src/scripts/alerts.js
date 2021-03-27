const showAlert = type => {
    closeAlert();
    const alert = document.getElementsByClassName(`alert-${type}`)[0];
    alert.classList.add("active");
};

const closeAlert = () => {
    const activeAlerts = document.querySelectorAll(".alerts .alert.active");
    activeAlerts.forEach(alert => {
        alert.classList.remove("active");
    });
};
