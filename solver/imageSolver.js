export async function solveImageCaptcha(imageElement) {
  // کپچای تصویری رو تحلیل کن
  const canvas = document.createElement('canvas');
  canvas.width = imageElement.width;
  canvas.height = imageElement.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(imageElement, 0, 0);

  const imageData = canvas.toDataURL();
  const text = await fakeOCR(imageData);
  return text;
}

async function fakeOCR(dataURL) {
  // فرضی، قابل جایگزینی با Tesseract یا API
  console.log('[ImageSolver] تحلیل تصویر:', dataURL.slice(0, 50));
  return 'demo123';
}
