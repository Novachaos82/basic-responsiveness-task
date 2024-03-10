/** @type {import('next').NextConfig} */

import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const includePaths = [path.join(__dirname, "styles")];
const nextConfig = {
  sassOptions: {
    includePaths: includePaths,
  },
};

export default nextConfig;
