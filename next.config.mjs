/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NEXT_OUTPUT_MODE,
    webpack: (config) => {
        if (process.env.NEXT_OUTPUT_MODE !== "export" || !config.module) {
            return config;
        }
        config.module.rules?.push({
            test: /src\/app\/api/,
            loader: "ignore-loader",
        });
        return config;
    },
};

export default nextConfig;
