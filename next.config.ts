import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Using --webpack in package.json scripts to avoid Turbopack workspace root issues
  // common on this OneDrive + Windows environment.
};

export default nextConfig;
