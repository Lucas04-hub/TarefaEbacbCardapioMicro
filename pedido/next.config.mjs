/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "pedido",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./PedidoList": "./src/components/PedidoList",
        },
        shared: {},
      })
    );
    return config;
  },
};

export default nextConfig;