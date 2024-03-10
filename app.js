// uploading the image and displaying it
let cellid;
function uploadImage() {
  var input = document.getElementById("imageInput");
  var file = input.files[0];
  var reader = new FileReader();

  reader.onload = function (event) {
    var img = new Image();
    img.src = event.target.result;
    img.onload = function () {
      var container = document.getElementById("imageContainer");
      var idElement = document.getElementById("imageId");
      var elementId = Math.floor(Math.random() * 9000000000) + 1000000000;
      img.id = elementId;
      cellid = elementId;
      container.style.display = "block";
      container.innerHTML = "";
      container.appendChild(img);
      idElement.innerHTML = "Cell ID: " + elementId;
      let text = cellid;
      JsBarcode("#barcode", text);
      // Display content div after image upload
      document.getElementById("contentDiv").style.display = "block";
    };
  };

  reader.readAsDataURL(file);
}

// generating bar code

// document.getElementById("butUpload").addEventListener("click", () => {
//   // let text = document.getElementById("text").value;
//     let text = cellid;
//   JsBarcode("#barcode", text);
// });
