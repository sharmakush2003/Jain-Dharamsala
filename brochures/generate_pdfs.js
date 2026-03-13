const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF(templateName, outputName) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const templatePath = path.join(__dirname, 'templates', templateName);
    // Use goto with file protocol to ensure relative paths resolve correctly
    const fileUrl = `file://${templatePath.replace(/\\/g, '/')}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    
    // Extra wait for high-res images to fully render
    await new Promise(r => setTimeout(r, 2000));
    
    const outputPath = path.join(__dirname, '../public/resources', outputName);
    
    await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }
    });

    await browser.close();
    console.log(`Generated: ${outputName}`);
}

async function run() {
    const templates = [
        { html: 'heritage-trail-en.html', pdf: 'jain-heritage-trail-en.pdf' },
        { html: 'heritage-trail-hi.html', pdf: 'jain-heritage-trail-hi.pdf' },
        { html: 'dharamsala-guide-en.html', pdf: 'dharamsala-guide-en.pdf' },
        { html: 'dharamsala-guide-hi.html', pdf: 'dharamsala-guide-hi.pdf' }
    ];

    for (const t of templates) {
        try {
            await generatePDF(t.html, t.pdf);
        } catch (err) {
            console.error(`Error generating ${t.pdf}:`, err);
        }
    }
}

run();
