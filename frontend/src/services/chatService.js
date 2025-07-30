import api from "./api";

const chatService = {
  sendMessage: async (text) => {
    const token = localStorage.getItem("token");
    const res = await api.post(
      "/chat/send",
      { message: text },
      token ? { headers: { Authorization: `Bearer ${token}` } } : {}
    );
    return res.data;
  },
};

export default chatService;
