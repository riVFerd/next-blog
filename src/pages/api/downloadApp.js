import path from "path";
import fs from "fs";

// currently this is just being used to provide a download link for vpn app which not accessible from my friend's country
// TODO: change it later to provide download link for mobile version of this app
export default function handler(req, res) {
    const apkFilePath = path.join(process.cwd(), 'public', 'apk', 'TurboVpn.apk');

    if (fs.existsSync(apkFilePath)) {
        res.setHeader('Content-Disposition', 'attachment; filename="TurboVpn.apk"');
        res.setHeader('Content-Type', 'application/vnd.android.package-archive');

        fs.createReadStream(apkFilePath).pipe(res);
    } else {
        res.status(404).send('File not found');
    }
}