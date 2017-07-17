// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { Secrets } from './secrets';
export const environment = {
  production: false,
};

export const API_URL = 'https://astronomania-api-production.herokuapp.com';
export const API_KEY = new Secrets().apiKey || 'DEMO_KEY';
