export async function solveTextCaptcha(rawText) {
  const cleaned = rawText.replace(/[^a-zA-Z0-9]/g, '').trim();
  const solved = await fakeOCR(cleaned);
  return solved;
}

async function fakeOCR(text) {
  console.log('[TextSolver] کپچا پردازش شد:', text);
  return text.toLowerCase();
}
