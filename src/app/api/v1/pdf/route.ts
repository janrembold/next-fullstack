import { NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

export async function GET() {
  const start = performance.now();
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const page = pdfDoc.addPage();
  const { height } = page.getSize();
  const fontSize = 30;
  page.drawText("Creating PDFs in JavaScript is awesome!", {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  const pdfBytes = await pdfDoc.save();
  const targetPath = path.join(process.cwd(), "cdn", `${Date.now()}.pdf`);

  fs.writeFileSync(targetPath, pdfBytes);

  return NextResponse.json({
    success: true,
    duration: performance.now() - start,
  });
}
