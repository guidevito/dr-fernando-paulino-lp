const WHATSAPP_NUMBER = "55011940341935";

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll("details[open]").forEach((openItem) => {
      if (openItem !== item) openItem.open = false;
    });
  });
});

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_click",
      phone: WHATSAPP_NUMBER,
      page: "lp_dr_fernando_trabalhista"
    });
  });
});
