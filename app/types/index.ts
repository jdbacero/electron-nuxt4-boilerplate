/**
 * Global TypeScript type definitions for the Nuxt 4 application
 */

// User-related types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = "admin" | "user" | "guest";

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Component props types
export interface BaseComponentProps {
  class?: string;
  style?: Record<string, any>;
  disabled?: boolean;
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: any) => boolean | string;
  };
}

export interface FormData {
  [key: string]: any;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
  external?: boolean;
}

// Theme types
export type ThemeMode = "light" | "dark" | "auto";

// Electron-specific types
export interface ElectronAPI {
  minimize: () => void;
  maximize: () => void;
  close: () => void;
  isMaximized: () => boolean;
}

// Runtime config types (for nuxt.config.ts)
declare module "nuxt/schema" {
  interface RuntimeConfig {
    public: {
      socketUrl: string;
    };
  }
}

// Augment Vue types for global properties
declare module "vue" {
  interface ComponentCustomProperties {
    $logger: {
      info: (message: string, data?: any) => void;
      warn: (message: string, data?: any) => void;
      error: (message: string, error?: any) => void;
      debug: (message: string, data?: any) => void;
    };
  }
}
