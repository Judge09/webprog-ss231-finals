function toggleFolder(folderId) {
    let folder = document.getElementById(folderId);
    if (folder.style.display === "block") {
        folder.style.display = "none";
    } else {
        folder.style.display = "block";
    }
}

function flipImage(container) {
    container.classList.toggle("clicked");
}
