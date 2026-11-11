/**
 * Beta request form
 * -----------------
 * Requests are sent through Web3Forms (https://web3forms.com), which emails them to the
 * address the access key was made for. The access key is meant to be public: it can only
 * send to that one address.
 *
 * Leave the key empty ("") and the form opens the visitor's mail app instead (mailto).
 */
window.LIGHTDORI_BETA = {
  web3formsKey: "34ba669f-e140-4e3d-8986-595d3d2b1d18",
  fallbackEmail: "xkxh4789@gmail.com",
};

(function setupBetaForm() {
  var form = document.getElementById("beta-form");
  if (!form) return;
  var status = document.getElementById("beta-status");
  var button = form.querySelector("button[type=submit]");
  var cfg = window.LIGHTDORI_BETA || {};

  function lang() {
    return document.documentElement.getAttribute("data-lang") === "ko" ? "ko" : "en";
  }
  function t(key) {
    return window.lightdoriT(key, lang());
  }
  var shown = null; // [key, tone] of the message on screen, so it follows a language switch
  function say(key, tone) {
    shown = key ? [key, tone] : null;
    status.textContent = key ? t(key) : "";
    status.className = "beta__status" + (tone ? " is-" + tone : "");
  }
  function value(name) {
    var field = form.elements[name];
    return field ? String(field.value || "").trim() : "";
  }
  // what the email shows: English labels so every request reads the same
  function details() {
    return {
      Name: value("name"),
      Email: value("email"),
      Role: value("role"),
      Computer: value("computer"),
      "Company or show": value("company"),
      Message: value("message"),
      "Site language": lang(),
    };
  }

  // the first field that is missing or wrong, with the message for it
  function firstProblem() {
    var checks = [
      ["name", "beta.err.name"],
      ["email", "beta.err.email"],
      ["role", "beta.err.role"],
      ["computer", "beta.err.computer"],
    ];
    for (var i = 0; i < checks.length; i++) {
      var field = form.elements[checks[i][0]];
      if (!field.value.trim() || !field.checkValidity()) return [field, checks[i][1]];
    }
    if (!form.elements.consent.checked) return [form.elements.consent, "beta.err.consent"];
    return null;
  }

  function viaMail(info) {
    var body = Object.keys(info)
      .map(function (k) { return k + ": " + info[k]; })
      .join("\n");
    window.location.href =
      "mailto:" + cfg.fallbackEmail +
      "?subject=" + encodeURIComponent(t("beta.mail.subject")) +
      "&body=" + encodeURIComponent(body + "\n");
  }

  form.addEventListener("input", function () {
    if (status.classList.contains("is-bad")) say("");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (button.disabled) return;
    var problem = firstProblem();
    if (problem) {
      say(problem[1], "bad");
      problem[0].focus();
      return;
    }
    if (form.elements.botcheck.checked) return; // a bot filled the hidden box

    var info = details();
    var key = String(cfg.web3formsKey || "").trim();
    if (!key) {
      viaMail(info);
      return;
    }

    var payload = {
      access_key: key,
      subject: "LightDori beta request: " + info.Name,
      from_name: "LightDori website",
      name: info.Name,
      email: info.Email,
      botcheck: false,
    };
    Object.keys(info).forEach(function (k) {
      if (k !== "Name" && k !== "Email") payload[k] = info[k] || "-";
    });

    button.disabled = true;
    say("beta.sending");
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (!res.ok || !data.success) throw new Error(data.message || "HTTP " + res.status);
        });
      })
      .then(function () {
        form.reset();
        say("beta.sent", "good");
      })
      .catch(function () {
        say("beta.failed", "bad");
      })
      .then(function () {
        button.disabled = false;
      });
  });

  document.addEventListener("lightdori:langchange", function () {
    if (shown) say(shown[0], shown[1]);
  });
})();
