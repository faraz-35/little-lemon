function scrollToElement(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth", // You can change this to 'auto' for instant scrolling
      block: "start", // 'start', 'center', or 'end'
      inline: "nearest", // 'start', 'center', or 'end'
    });
  }
}

export default scrollToElement;
