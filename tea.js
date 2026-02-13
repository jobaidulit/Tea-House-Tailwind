 const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");

    // Toggle icon
    if (btn.innerHTML === "✖") {
      btn.innerHTML = "☰";
    } else {
      btn.innerHTML = "✖";
    }
  });