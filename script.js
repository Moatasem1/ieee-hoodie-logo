function hideElement(elementId) {
    setTimeout(function () {
        var element = document.getElementById(elementId);
        if (element) {
            element.style.display = 'none';
        }
    }, 3600); // 2.1 seconds = 2100 milliseconds
}

hideElement("logo");