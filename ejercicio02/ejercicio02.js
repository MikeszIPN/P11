const imagenes = document.querySelectorAll('img.imgg');

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('mouseover', function () {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', this.getAttribute('src'));
        newImage.classList.add('smallimage');
        document.body.appendChild(newImage);
        const rect = this.getBoundingClientRect();        
        newImage.style.width = this.offsetWidth * 2 + 'px';
    });

    imagenes[i].addEventListener('mouseout', function () {
        const smallimage = document.querySelector('img.smallimage');
        if (smallimage) {
            smallimage.remove();
        }
    });
}

var editButtons = document.querySelectorAll("table button");

editButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    var row = this.parentNode.parentNode;
    var image = row.querySelector("img").getAttribute("src");
    var title = row.querySelector("td:nth-of-type(3)").textContent;
    var artist = row.querySelector("td:nth-of-type(4)").textContent;
    var year = row.querySelector("td:nth-of-type(5)").textContent;
    var genre = row.querySelector("td:nth-of-type(6)").textContent;
    var modal = document.createElement("div");
    modal.classList.add("modal");
    var modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    var headElements = document.createElement("div");
    headElements.classList.add("Head");

    var bodyElements = document.createElement("div");
    bodyElements.classList.add("body-element")

    var titleElement = document.createElement("h2");
    titleElement.textContent = "Editar";
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);

    var titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");

    titleInput.setAttribute("placeholder", "Título");
    titleInput.setAttribute("value", title);

    var artistInput = document.createElement("input");
    artistInput.setAttribute("type", "text");
    artistInput.setAttribute("placeholder", "Artista");
    artistInput.setAttribute("value", artist);

    var yearInput = document.createElement("input");
    yearInput.setAttribute("type", "text");
    yearInput.setAttribute("placeholder", "Año");
    yearInput.setAttribute("value", year);

    var genreInput = document.createElement("input");
    genreInput.setAttribute("type", "text");
    genreInput.setAttribute("placeholder", "Género");
    genreInput.setAttribute("value", genre);

    var closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("close-button");

    headElements.appendChild(titleElement);
    headElements.appendChild(closeButton);

    
    bodyElements.appendChild(titleInput);
    bodyElements.appendChild(artistInput);
    bodyElements.appendChild(yearInput);
    bodyElements.appendChild(genreInput);
    
    modalContent.appendChild(headElements);
    modalContent.appendChild(imageElement);
    modalContent.appendChild(bodyElements);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.style.display = "block";

    closeButton.addEventListener("click", function() {

  row.querySelector("img").setAttribute("src", imageElement.getAttribute("src"));
  row.querySelector("td:nth-of-type(3)").textContent = titleInput.value;
  row.querySelector("td:nth-of-type(4)").textContent = artistInput.value;
  row.querySelector("td:nth-of-type(5)").textContent = yearInput.value;
  row.querySelector("td:nth-of-type(6)").textContent = genreInput.value;

  modal.style.display = "none";
    });
  });
});