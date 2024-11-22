import jwt_decode from 'jwt-decode';

class Auth {
  static saveToken(token) {
    localStorage.setItem("auth_token", token);
  }

  static saveUser(user) {
    localStorage.setItem("user_info", JSON.stringify(user));
  }

  static getToken() {
    return localStorage.getItem("auth_token");
  }

  static getUser() {
    return JSON.parse(localStorage.getItem("user_info"));
  }

  static isAuthenticated() {
    const token = this.getToken();
    return token ? true : false;
  }

  static decodeToken() {
    const token = this.getToken();
    if (token) {
      return jwt_decode(token);
    }
    return null;
  }

  static logout() {
    localStorage.removeItem("auth_token");
  }

  static getTokenExpiration() {
    const token = this.getToken();
    if (token) {
      const decodedToken = jwt_decode(token);
      return decodedToken.exp;
    }
    return null;
  }

  static isTokenExpired() {
    const exp = this.getTokenExpiration();
    if (exp) {
      return exp * 1000 < Date.now();
    }
    return true;
  }
}

export default Auth;
