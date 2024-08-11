/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // ignore pages/api folder in NEXT_OUTPUT_MODE=export
        if (process.env.NEXT_OUTPUT_MODE === 'export') {
            config.module.rules.push({
                test: /pages[\\/]api[\\/].*/,
                use: defaultLoaders.babel,
                exclude: /node_modules/,
            });
        }
        return config;
    }
};

export default nextConfig;
