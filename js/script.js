// Call the welcomeMessage function when the script loads
welcomeMessage();

function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("What is your name?");

    // If userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display the welcome message in the element with id "welcome-speech"
    document.getElementById("welcome-speech").innerText = `Selamat Datang, ${userResponse}! Di Website Saya.`;
}

// Placeholder for form validation function
//function validateForm() { }
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah reload halaman

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Semua field wajib diisi!");
    return;
  }

  document.getElementById("result").innerText =
    "Terima kasih " + name + ", pesan kamu sudah terkirim!";

  // reset form
  this.reset();
});
