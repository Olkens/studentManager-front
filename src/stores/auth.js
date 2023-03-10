import { defineStore } from "pinia";
import axios from 'axios'

export const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    return {
      user: 'gnojek2',
      token: 2,
      returnUrl: "/",
    };
  },
  actions: {
    async login(username, password) {
      await axios
        .post("http://localhost:8080/login", {
          username: username,
          password: password,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
});
