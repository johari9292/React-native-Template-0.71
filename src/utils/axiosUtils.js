import axios from 'axios';
import {BASE_URL} from '../constants/urls';
import store from '../redux/store';
import {logout} from '../redux/Slices/auth/userSlice';

class HttpService {
  constructor(token) {
    console.log('My Token', token);
    // this.history = history;
    const service = axios.create({
      baseURL: BASE_URL,
      headers: token
        ? {
            Authorization: `Bearer ${token}`,

            // Authorization: "Token 4d60727de685ac91c7fd0ae92373c4e11af3c2b4",
          }
        : {},
    });

    service.interceptors.response.use(this.handleSuccess, this.handleError);
    // service.interceptors.response.use(this.handleSuccess);

    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    switch (error.response.status) {
      case 401:
        // Token expired
        // delete this.service.defaults.headers["Authorization"];
        // window.localStorage.clear();

        console.log('before clear', error);
        store.dispatch(logout());
        // store?.dispatch(apiError({ message: error?.message }));
        // window.location.href = "/";

        // this.redirectTo("/login");
        // alert(" Token Expired");
        break;

      // break;
      case 403:
        // invalid token
        // alert("Invalid Token");
        // window.localStorage.clear();
        console.log('before clear', error);
        store.dispatch(logout());
        // <Redirect to="/" />;
        // window.location.replace("/");
        // this.history.push("/");

        // this.redirectTo("/login");
        // alert("Invalid Token");

        break;
      case 404:
        // Not found
        this.redirectTo('/404');
        break;
      default:
        // Internal server error
        // this.redirectTo("/500");

        break;
    }
    return Promise.reject(error);
  }

  redirectTo(url) {
    window.location.href = url;
  }

  get(...args) {
    return this.service.get(...args);
  }

  post(...args) {
    return this.service.post(...args);
  }

  put(...args) {
    return this.service.put(...args);
  }

  patch(...args) {
    return this.service.patch(...args);
  }

  delete(...args) {
    return this.service.delete(...args);
  }
}

export default HttpService;
