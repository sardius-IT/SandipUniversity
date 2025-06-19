/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL_USER:"sandipuniversity81@gmail.com",
    EMAIL_PASS:"gdobzkqtratezyfx",
    EMAIL_TO: process.env.EMAIL_TO,
  },
};

export default nextConfig;

