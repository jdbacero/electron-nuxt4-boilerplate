/**
 * Client-side logging plugin
 * Demonstrates how to create plugins in Nuxt 4
 * The .client.ts extension ensures this only runs on the client side
 */

export default defineNuxtPlugin((nuxtApp) => {
  // Add global logging functionality
  const logger = {
    info: (message: string, data?: any) => {
      console.log(`[INFO] ${new Date().toISOString()}: ${message}`, data || "");
    },

    warn: (message: string, data?: any) => {
      console.warn(
        `[WARN] ${new Date().toISOString()}: ${message}`,
        data || ""
      );
    },

    error: (message: string, error?: any) => {
      console.error(
        `[ERROR] ${new Date().toISOString()}: ${message}`,
        error || ""
      );
    },

    debug: (message: string, data?: any) => {
      if (process.dev) {
        console.debug(
          `[DEBUG] ${new Date().toISOString()}: ${message}`,
          data || ""
        );
      }
    },
  };

  // Make logger available globally
  return {
    provide: {
      logger,
    },
  };
});
