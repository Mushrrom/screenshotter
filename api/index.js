import { takeScreenshot, checkUrl } from "./_functions/functions.js";

module.exports = async (req, res) => {
    // this function will be launched when the API is called.
    if (!req.query.url) return res.status(400).send("Please input a url");
    if (!checkUrl(req.query.url)) return res.status(400).send("Please input a valid URL");
    try {
        const screenshotFile = await takeScreenshot(
            req.query.url,
            req.query.width,
            req.query.height
        );

        res.status(200).end(screenshotFile);
    } catch (err) {
        console.error(err);
        return res
            .status(500)
            .send("It seems there was an error. You may have made an invalid query.");
    }
};
