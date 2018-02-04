const PRODUCTION: boolean = process.env.NODE_ENV === 'production';

const API_HOST: string = PRODUCTION ? 'https://api.github.com' : 'https://api.github.com';

export { API_HOST };
