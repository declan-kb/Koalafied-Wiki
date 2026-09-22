window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]]
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => {
  // Center paragraphs that are *only* a standalone equation (e.g. "P = VI"),
  // not ones with inline math mid-sentence (e.g. "a 120Ω resistor"). CSS
  // :only-child can't tell these apart — it only counts sibling elements,
  // so a lone arithmatex span still counts as "only child" even with a full
  // sentence of surrounding text nodes. Checking childNodes directly does.
  document.querySelectorAll(".md-typeset p").forEach((p) => {
    const onlyChild =
      p.childNodes.length === 1 &&
      p.firstElementChild &&
      p.firstElementChild.classList.contains("arithmatex");
    p.classList.toggle("eq-block", onlyChild);
  });
  MathJax.typesetPromise();
});
