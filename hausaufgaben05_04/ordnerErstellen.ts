import fs from 'fs'

function createDirs(folderPath: string, folderNames: string []): void {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    for (const folderName of folderNames) {
        const folderFullPath = `${folderPath}/${folderName}`;

        if (!fs.existsSync(folderFullPath)) {
            fs.mkdirSync(folderFullPath);
            console.log('Ordner ${folderName} wurde erstellt.');
        } else {
            console.log('Ordner ${folderName} existiert bereits.');
        }
    }
}

createDirs("./output", [".png", ".mp4", ".gif"]);