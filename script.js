$(document).ready(function () {
  const countBtn = $("#countBtn");
  const inputText = $("#inputText");
  const output = $("#output");

  countBtn.click(function () {
    const text = inputText.val();
    const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
    const characterCount = text.replace(/\s+/g, "").length;
    const sentenceCount = text.split(/[.?!؟]/).filter((sentence) => sentence.trim().length > 0).length;
    const spaceCount = text.split(" ").length - 1;
    const paragraphCount = text.split(/\n+/).filter((paragraph) => paragraph.trim().length > 0).length;
    const readingTime = Math.ceil(wordCount / 200);

    const outputHtml = `
      <p class="icon-text"><i class="fas fa-font"></i> عدد الأحرف: ${characterCount}</p>
      <p class="icon-text"><i class="fas fa-file-word"></i> عدد الكلمات: ${wordCount}</p>
      <p class="icon-text"><i class="fas fa-file-alt"></i> عدد الجمل: ${sentenceCount}</p>
      <p class="icon-text"><i class="fas fa-space-shuttle"></i> عدد المسافات: ${spaceCount}</p>
      <p class="icon-text"><i class="fas fa-paragraph"></i> عدد الفقرات: ${paragraphCount}</p>
      <p class="icon-text"><i class="fas fa-clock"></i> مُقدرة وقت القراءة: ${readingTime} دقيقة</p>
    `;

    output.html(outputHtml);
  });
});
