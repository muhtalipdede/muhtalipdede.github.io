/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NEXT_OUTPUT_MODE,
    webpack: (config) => {
        if (process.env.NEXT_OUTPUT_MODE !== "export" || !config.module) {
            return config;
        }

        // ignore api folder in export mode to prevent next.js from trying to bundle it
        config.module.rules.push({
            test: /api/,
            use: "null-loader",
        });
        return config;
    },
};

export default nextConfig;
