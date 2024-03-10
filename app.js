document.getElementById("image-input").addEventListener("change", function () {
  var file = this.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var imagePreview = document.getElementById("image-preview");
      imagePreview.innerHTML = ""; // Clear previous preview
      var img = new Image();
      img.src = e.target.result;
      img.style.maxWidth = "100%";
      img.style.maxHeight = "100%";
      imagePreview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});
