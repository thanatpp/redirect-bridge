(function () {
  var title = document.getElementById("title");
  var message = document.getElementById("message");
  var stepUrl = document.getElementById("step-url");
  var form = document.getElementById("redirect-form");
  var input = document.getElementById("target-url");
  var output = document.getElementById("generated-url");
  var copyButton = document.getElementById("copy-button");
  var copyStatus = document.getElementById("copy-status");
  var sourceLink = document.getElementById("source-link");
  var sourceUrl = "https://github.com/thanatpp/redirect-bridge";

  function baseUrl() {
    return window.location.origin + "/";
  }

  function cleanTarget(value) {
    return value.trim().replace(/^\/+/, "");
  }

  function buildRedirectUrl(value) {
    return baseUrl() + cleanTarget(value);
  }

  function setIndexPage() {
    var sampleTarget = input ? input.value : "https://example.com/callback";
    var sampleUrl = buildRedirectUrl(sampleTarget);

    if (stepUrl) {
      stepUrl.textContent = sampleUrl;
    }

    if (output) {
      output.textContent = sampleUrl;
    }

    if (sourceLink) {
      sourceLink.href = sourceUrl;
    }
  }

  function updateGeneratedUrl() {
    if (!input || !output) {
      return;
    }

    var generatedUrl = buildRedirectUrl(input.value);
    output.textContent = generatedUrl;
  }

  function copyGeneratedUrl() {
    if (!output || !copyButton) {
      return;
    }

    var text = output.textContent;

    function markCopied() {
      copyButton.textContent = "Copied";

      if (copyStatus) {
        copyStatus.textContent = "Redirect URL copied.";
      }

      window.setTimeout(function () {
        copyButton.textContent = "Copy";

        if (copyStatus) {
          copyStatus.textContent = "";
        }
      }, 1400);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(markCopied).catch(function () {
        window.prompt("Copy this redirect URL", text);
      });
      return;
    }

    window.prompt("Copy this redirect URL", text);
  }

  function getRedirectTarget() {
    var rawTarget = window.location.pathname + window.location.search;

    if (!rawTarget || rawTarget === "/" || rawTarget === "/index.html") {
      return "";
    }

    rawTarget = rawTarget.replace(/^\/+/, "");

    if (window.location.hash) {
      rawTarget += window.location.hash;
    }

    if (!/^https?:\/\//i.test(rawTarget)) {
      try {
        rawTarget = decodeURIComponent(rawTarget);
      } catch (error) {
        return "";
      }
    }

    return rawTarget;
  }

  function isAllowedUrl(value) {
    try {
      var url = new URL(value);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (error) {
      return false;
    }
  }

  var target = getRedirectTarget();

  if (!target) {
    setIndexPage();

    if (input) {
      input.addEventListener("input", updateGeneratedUrl);
    }

    if (copyButton) {
      copyButton.addEventListener("click", copyGeneratedUrl);
    }

    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        copyGeneratedUrl();
      });
    }

    return;
  }

  if (!isAllowedUrl(target)) {
    title.textContent = "Invalid redirect URL";
    message.textContent = "Only http:// and https:// URLs are supported.";
    document.body.classList.add("redirect-status");
    return;
  }

  title.textContent = "Redirecting...";
  message.textContent = "Sending you to " + target;
  document.body.classList.add("redirect-status");
  window.location.replace(target);
})();
