function formatNumberWithSpaces(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function processTextNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    const newText = node.nodeValue.replace(/\d+/g, (match) => formatNumberWithSpaces(match));
    if (newText !== node.nodeValue) {
      node.nodeValue = newText;
    }
  } else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes) {
    node.childNodes.forEach(processTextNodes);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  processTextNodes(document.body);
});

setTimeout(() => {
  processTextNodes(document.body);
}, 1)