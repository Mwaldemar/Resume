import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@import 'app/globalStyles/mixins.scss';`
  },
};

export default nextConfig;
