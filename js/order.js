(function () {
  var cfg = window.BELLIO_ORDER || {};
  var email = (cfg.paypalEmail || "").trim();
  var returnUrl = cfg.thanksUrl || "https://belliogulfcoast.com/thanks.html";

  function paypalUrl(item, amount) {
    var params = new URLSearchParams({
      cmd: "_xclick",
      business: email,
      item_name: item,
      amount: String(amount),
      currency_code: "USD",
      return: returnUrl,
      no_shipping: "1"
    });
    return "https://www.paypal.com/cgi-bin/webscr?" + params.toString();
  }

  document.querySelectorAll("[data-paypal-item]").forEach(function (btn) {
    var item = btn.getAttribute("data-paypal-item");
    var amount = btn.getAttribute("data-paypal-amount");
    if (!email || !item || !amount) return;
    btn.setAttribute("href", paypalUrl(item, amount));
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener");
  });

  var next = document.getElementById("form-next");
  if (next) next.value = returnUrl;

  var service = document.getElementById("service");
  document.querySelectorAll("[data-select-service]").forEach(function (link) {
    link.addEventListener("click", function () {
      if (!service) return;
      var val = link.getAttribute("data-select-service");
      var match = Array.prototype.find.call(service.options, function (o) {
        return o.value === val;
      });
      if (match) service.value = match.value;
    });
  });
})();
