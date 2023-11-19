import puppeteer from "puppeteer-core";

export async function takeScreenshot(url, width, height) {
    const browser = await puppeteer.connect({
        browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BROWSERLESS_TOKEN}`,
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({
        width: Number(width) || 1280,
        height: Number(height) || 720,
        deviceScaleFactor: 2,
    });
    const screenshotFile = await page.screenshot();

    await browser.close();

    return screenshotFile;
}

export function checkUrl(url) {
    try {
        var check = new URL(url);
    } catch (err) {
        return false;
    }
    return true;
}
