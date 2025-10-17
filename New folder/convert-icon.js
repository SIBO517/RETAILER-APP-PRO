const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const projectRoot = __dirname;
    const inPath = path.join(projectRoot, 'icons', 'icon.svg');
    if (!fs.existsSync(inPath)) throw new Error(`Source SVG not found: ${inPath}`);

    const out192 = path.join(projectRoot, 'icons', 'icon-192x192.png');
    const out512 = path.join(projectRoot, 'icons', 'icon-512x512.png');

    await sharp(inPath).resize(192, 192, { fit: 'contain' }).png({ compressionLevel: 9 }).toFile(out192);
    await sharp(inPath).resize(512, 512, { fit: 'contain' }).png({ compressionLevel: 9 }).toFile(out512);

    console.log('Exported:', out192);
    console.log('Exported:', out512);
  } catch (err) {
    console.error('Conversion failed:', err.message || err);
    process.exit(1);
  }
})();