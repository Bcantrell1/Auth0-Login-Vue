import auth0 from 'auth0-js';

const webAuth = new auth0.WebAuth({
  domain: 'your-domain-name',
  clientID: 'your-client-id',
  redirectUri: 'http://localhost:8080/callback',
  responseType: 'token id_token',
  scope: 'openid profile',
});

let token = {};

const handleAuth = (cb) => {
  webAuth.parseHash((error, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      token.accessToken = authResult.accessToken;
      token.idToken = authResult.idToken;
      token.expiry= new Date().getTime() + authResult.expiresIn * 10000;
      cb();
    } else {
      console.log(error);
    }
  });
};

const isLogged = () => token.accessToken && new Date().getTime() < token.expiry;

const login = () => {
  webAuth.authorize();
};

const logOutUser = () => {
  token = {};
};

export {
  login, handleAuth, isLogged, logOutUser,
};