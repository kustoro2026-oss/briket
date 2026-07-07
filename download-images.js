// Download script for djavacoal images
const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "public");

function download(url, filepath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(filepath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const proto = url.startsWith("https") ? https : http;
    proto.get(url, (res) => {
      // Handle redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, filepath).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        console.log(`  FAILED [${res.statusCode}]: ${url}`);
        resolve();
        return;
      }
      const file = fs.createWriteStream(filepath);
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`  OK: ${path.basename(filepath)}`);
        resolve();
      });
      file.on("error", (err) => {
        fs.unlink(filepath, () => {});
        console.log(`  ERROR: ${path.basename(filepath)} - ${err.message}`);
        resolve();
      });
    }).on("error", (err) => {
      console.log(`  ERROR: ${url} - ${err.message}`);
      resolve();
    });
  });
}

const images = [
  // Logo
  { url: "https://djavacoal.com/images/logo.png", file: "public/images/logo.png" },

  // Certificate logos (homepage marquee)
  { url: "https://djavacoal.com/images/ministry_of_trade.png", file: "public/images/certificates/ministry-of-trade.png" },
  { url: "https://djavacoal.com/images/100_natural.png", file: "public/images/certificates/100-natural.png" },
  { url: "https://djavacoal.com/images/material_data_safety_sheets.png", file: "public/images/certificates/msds.png" },
  { url: "https://djavacoal.com/images/carsurin_1968.png", file: "public/images/certificates/carsurin.png" },

  // Feature icons
  { url: "https://djavacoal.com/images/icon-low-ash.png", file: "public/images/features/low-ash.png" },
  { url: "https://djavacoal.com/images/icon-eco-friendly.png", file: "public/images/features/eco-friendly.png" },
  { url: "https://djavacoal.com/images/icon-long-lasting.png", file: "public/images/features/long-lasting.png" },
  { url: "https://djavacoal.com/images/icon-odorless.png", file: "public/images/features/odorless.png" },
  { url: "https://djavacoal.com/images/icon-no-chemical.png", file: "public/images/features/no-chemical.png" },
  { url: "https://djavacoal.com/images/icon-premium-quality.png", file: "public/images/features/premium-quality.png" },
  { url: "https://djavacoal.com/images/icon-low-water.png", file: "public/images/features/low-water.png" },
  { url: "https://djavacoal.com/images/icon-glowing-heat.png", file: "public/images/features/glowing-heat.png" },

  // Production process illustrations
  { url: "https://djavacoal.com/images/Step1.png", file: "public/images/production/step-1.png" },
  { url: "https://djavacoal.com/images/Step2.png", file: "public/images/production/step-2.png" },
  { url: "https://djavacoal.com/images/Step33.png", file: "public/images/production/step-3.png" },
  { url: "https://djavacoal.com/images/Step4.png", file: "public/images/production/step-4.png" },
  { url: "https://djavacoal.com/images/Step5.png", file: "public/images/production/step-5.png" },
  { url: "https://djavacoal.com/images/Step6.png", file: "public/images/production/step-6.png" },
  { url: "https://djavacoal.com/images/Step7.png", file: "public/images/production/step-7.png" },
  { url: "https://djavacoal.com/images/Step8.png", file: "public/images/production/step-8.png" },
  { url: "https://djavacoal.com/images/Step9.png", file: "public/images/production/step-9.png" },

  // Production info cards (homepage)
  { url: "https://djavacoal.com/images/home-production-info1.png", file: "public/images/production/process-card.png" },
  { url: "https://djavacoal.com/images/home-production-info2.png", file: "public/images/production/moq-card.png" },
  { url: "https://djavacoal.com/images/home-production-info3.png", file: "public/images/production/shipment-card.png" },
  { url: "https://djavacoal.com/images/home-production-info4.png", file: "public/images/production/packaging-card.png" },

  // Shipping partners
  { url: "https://djavacoal.com/images/shipping-1.png", file: "public/images/shipping/maersk.png" },
  { url: "https://djavacoal.com/images/shipping-2.png", file: "public/images/shipping/cma-cgm.png" },
  { url: "https://djavacoal.com/images/shipping-3.png", file: "public/images/shipping/msc.png" },
  { url: "https://djavacoal.com/images/shipping-4.png", file: "public/images/shipping/hapag-lloyd.png" },
  { url: "https://djavacoal.com/images/shipping-5.png", file: "public/images/shipping/evergreen.png" },
  { url: "https://djavacoal.com/images/shipping-6.png", file: "public/images/shipping/cosco.png" },
  { url: "https://djavacoal.com/images/shipping-7.png", file: "public/images/shipping/yang-ming.png" },

  // Icons
  { url: "https://djavacoal.com/images/icon-download.svg", file: "public/images/icons/download.svg" },
  { url: "https://djavacoal.com/images/icon-whatsapp.svg", file: "public/images/icons/whatsapp.svg" },

  // YouTube thumbnails
  { url: "https://djavacoal.com/images/thumbnail-yt.jpg", file: "public/images/about/video-thumbnail.jpg" },

  // Backgrounds
  { url: "https://djavacoal.com/images/bg-banner-OurProduct.png", file: "public/images/about/about-banner.png" },
  { url: "https://djavacoal.com/images/bg-banner-ContactUs.png", file: "public/images/contact/contact-banner.png" },
  { url: "https://djavacoal.com/images/bg-banner-ProductionProcess.png", file: "public/images/production/production-banner.png" },
  { url: "https://djavacoal.com/images/bg-packaging-option.jpg", file: "public/images/packaging/packaging-bg.jpg" },

  // Certificate images
  { url: "https://djavacoal.com/images/certificates/cert1.png", file: "public/images/certificates/cert1.png" },
  { url: "https://djavacoal.com/images/certificates/cert2.png", file: "public/images/certificates/cert2.png" },
  { url: "https://djavacoal.com/images/certificates/cert3.png", file: "public/images/certificates/cert3.png" },
  { url: "https://djavacoal.com/images/certificates/cert4.png", file: "public/images/certificates/cert4.png" },
  { url: "https://djavacoal.com/images/certificates/cert5.png", file: "public/images/certificates/cert5.png" },
  { url: "https://djavacoal.com/images/certificates/cert6.png", file: "public/images/certificates/cert6.png" },
  { url: "https://djavacoal.com/images/certificates/cert7.png", file: "public/images/certificates/cert7.png" },
  { url: "https://djavacoal.com/images/certificates/cert8.png", file: "public/images/certificates/cert8.png" },

  // Djavacoal Brands
  { url: "https://djavacoal.com/images/cube-25.png", file: "public/images/products/cube-25.png" },
  { url: "https://djavacoal.com/images/cube-20x50.png", file: "public/images/products/cube-20x50.png" },
  { url: "https://djavacoal.com/images/cube-26.png", file: "public/images/products/cube-26.png" },

  // Favicon
  { url: "https://djavacoal.com/favicon-32x32.png", file: "public/favicon-32x32.png" },
  { url: "https://djavacoal.com/apple-touch-icon.png", file: "public/apple-touch-icon.png" },

  // Hero slides (from assets.djavacoal.com)
  { url: "https://assets.djavacoal.com/static-media/carousel/piDf0CGL8Ly5Q9gbCL-yn", file: "public/images/hero/slide-1.jpg" },
];

async function main() {
  console.log(`Downloading ${images.length} images...\n`);
  for (const img of images) {
    await download(img.url, img.file);
  }
  console.log("\nDone!");
}

main().catch(console.error);
