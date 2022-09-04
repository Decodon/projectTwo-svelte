import axios from "axios";
import {user} from "../stores";

export class PlacemarkersService {
  baseUrl = "";

  constructor(baseUrl) {
      this.baseUrl = baseUrl;
      const placemarkersCredentials = localStorage.placemarkers;
      if (placemarkersCredentials) {
        const savedUser = JSON.parse(placemarkersCredentials);
        user.set({
          email: savedUser.email,
          token: savedUser.token,
        });
        axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
      }
    }

  async login(email, password) {
      try {
        const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        if (response.data.success) {
          user.set({
            email: email,
            token: response.data.token,
          });
          localStorage.placemarkers = JSON.stringify({email:email, token:response.data.token});
          return true;
        }
        return false;
      } catch (error) {
        return false;
      }
  }

  async logout() {
      user.set({
         email: "",
         token: "",
      });
      axios.defaults.headers.common["Authorization"] = "";
      localStorage.removeItem("donation");

  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async placemarkers(placemarkers) {
      try {
        const response = await axios.post(this.baseUrl + "/api/placemarkers/" + placemarkers.counites + "/placemarkers", placemarkers);
        return response.status == 200;
      } catch (error) {
        return false;
      }
    }

    async getCounties() {
      try {
        const response = await axios.get(this.baseUrl + "/api/counties");
        return response.data
      } catch (error) {
        return [];
      }
    }

    async getPlacemarkers() {
      try {
        const response = await axios.get(this.baseUrl + "/api/placemarkers");
        return response.data;
      } catch (error) {
        return [];
      }
    }
}