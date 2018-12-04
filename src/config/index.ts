import dev from './config-dev';
import prod from './config-prod';

interface IConfig {
  Oauth: string;
  Mall: string;
  env?: '';
}

const config: IConfig = {
  Oauth: '',
  Mall: ''
};

if (process.env.NODE_ENV === 'development') {
  Object.assign(config, dev);
} else if (process.env.NODE_ENV === 'production') {
  Object.assign(config, prod);
}

export default config;
