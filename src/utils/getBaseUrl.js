export default function getBaseUrl(req) {
    const protocol = req?.headers['x-forwarded-proto'] || 'http';
    return `${protocol}://${req.headers.host}`;
}