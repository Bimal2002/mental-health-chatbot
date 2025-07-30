import api from "./api";

const authService = {
  login: async (email, password) => {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  },
  register: async (email, password, displayName) => {
    const res = await api.post("/auth/register", { email, password, displayName });
    return res.data;
  },
};

export default authService;
