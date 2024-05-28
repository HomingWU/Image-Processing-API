import Express from "express";
import fsPromeses from "fs/promises";
import sharp from "sharp";
import path from "path";

const images = Express.Router();
const imagesDir = path.join(__dirname, "../../../images");
const thumbsDir = path.join(__dirname, "../../../thumbs");

images.get("/", (req, res) => {
    const filename = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    fsPromeses.mkdir(thumbsDir, { recursive: true }).catch(() => { });

    
    if (!filename || !width || !height || isNaN(parseInt(width)) || isNaN(parseInt(height)) || parseInt(width) <= 0 || parseInt(height) <= 0) {
        res.status(400).send("Invalid parameters");
        return;
    }


    const inputFilename = `${filename}.jpg`;
    const outputFilename = `${filename}_${width}_${height}.jpg`;

    const inputPath = path.join(imagesDir, inputFilename);
    const outputPath = path.join(thumbsDir, outputFilename);

    fsPromeses.access(outputPath).then(() => {
        res.sendFile(outputPath);
    }).catch(() => {
        sharp(inputPath)
            .resize({
                width: parseInt(width),
                height: parseInt(height)
            })
            .toFile(outputPath)
            .then(() => {
                res.sendFile(outputPath);
            }).catch((err) => {
                res.status(500).send(err);
            });
    });

});

export default images;