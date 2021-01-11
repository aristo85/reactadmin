const authProvider = {
    login: ({ username, password }) => {
      const request = new Request('https://coachnest.herokuapp.com/api/gym/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: username, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      return fetch(request)
        .then(response => {
          if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then(auth => {
            console.log(auth)
          localStorage.setItem('auth', JSON.stringify(auth.token));
        })
        .catch(() => {
          throw new Error('Ошибка авторизации')
        });
    },
    checkError: (error) => {
      const status = error.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem('auth');
        return Promise.reject();
      }
      // other error code (404, 500, etc): no need to log out
      return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('auth')
      ? Promise.resolve()
      : Promise.reject(),
    logout: () => {
      localStorage.removeItem('auth');
      return Promise.resolve();
    },
    getPermissions: () => {
      const auth = localStorage.getItem('auth');
      return auth ? Promise.resolve(auth) : Promise.reject();
    }
  };
  
  export default authProvider;
  