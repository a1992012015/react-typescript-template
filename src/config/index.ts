import dev from './config-dev';
import prof from './config-prod';

interface IConfig {
  Oauth: string;
  Mall: string;
}

let config: IConfig = {
  Oauth: '',
  Mall: '',
};

if (process.env.NODE_ENV === 'development') {
  config = Object.assign(config, dev);
} else if (process.env.NODE_ENV === 'production') {
  config = Object.assign(config, prof);
}

export default config;
