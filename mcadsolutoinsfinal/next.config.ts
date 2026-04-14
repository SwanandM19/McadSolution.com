import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
