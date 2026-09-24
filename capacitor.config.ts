import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bharatkithali.app',
  appName: 'Bharat Ki Thali',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
