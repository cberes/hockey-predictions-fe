import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface AppConfig {
  apiEndpoint: string;
  protocolAndHost: string;
}

export const HOCKEY_DI_CONFIG: AppConfig = {
  apiEndpoint: 'localhost:3000',
  protocolAndHost: 'https://localhost:4000',
};

