import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
        sassOptions: {
            includePaths: [path.join(process.cwd(), 'app', 'sass')],
        },
};

export default nextConfig;
