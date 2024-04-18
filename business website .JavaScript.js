document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    // You can add code here to send the form data to your backend server
    // using AJAX or any other method.
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var images = document.querySelectorAll(".gallery img");
var modalImg = document.getElementById("img01");
images.forEach(function(img){
  img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
