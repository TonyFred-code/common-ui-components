export default function createImage(src, alt = '') {
    const img = new Image();
    img.src = src;
    img.alt = alt;
    return img;
  }