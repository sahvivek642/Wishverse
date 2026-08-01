console.log("Welcome to WishVerse!");

let generatedLink = "";

function generateWish() {
  // Read inputs cleanly
  const occasion = document.getElementById("occasion").value;
  const receiver = document.getElementById("receiver").value.trim();
  const sender = document.getElementById("sender").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!receiver || !sender) {
    alert("Please enter both receiver and sender names!");
    return;
  }

  // Get absolute current base URL
  const basePath = window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1);

  // Build generated URL with explicit fallback for message
  const finalMessage = message !== "" ? message : "Wishing you a wonderful day filled with joy and happiness!";

  generatedLink =
    basePath +
    "Wish3.html?occasion=" + encodeURIComponent(occasion) +
    "&receiver=" + encodeURIComponent(receiver) +
    "&sender=" + encodeURIComponent(sender) +
    "&message=" + encodeURIComponent(finalMessage);

  // Output generated link to UI
  document.getElementById("output").innerHTML =
    "<b>Your Wish Link:</b><br><a href='" +
    generatedLink +
    "' target='_blank'>" +
    generatedLink +
    "</a>";

  // Render QR Code
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), {
    text: generatedLink,
    width: 200,
    height: 200
  });
}

function copyLink() {
  if (!generatedLink) {
    alert("Please generate a wish first.");
    return;
  }
  navigator.clipboard.writeText(generatedLink);
  alert("Link copied successfully!");
}

function shareWhatsApp() {
  if (!generatedLink) {
    alert("Please generate a wish first.");
    return;
  }
  window.open("https://api.whatsapp.com/send?text=" + encodeURIComponent("🎉 Open your surprise wish!\n\n" + generatedLink), "_blank");
}
