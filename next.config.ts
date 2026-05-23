import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public", // แหล่งเก็บไฟล์ Service Worker ที่จะถูกสร้างขึ้นมา
  disable: process.env.NODE_ENV === "development", // ปิดการทำงานในโหมด Development จะได้ไม่ติด Cache เวลาแก้โค้ด
  register: true,
  workboxOptions: {
    skipWaiting: true,
  },
});
const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
};

export default withPWA(nextConfig);
