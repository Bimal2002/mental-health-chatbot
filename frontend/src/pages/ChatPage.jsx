// import React, { useContext } from "react";
// import { Container, Box, Paper } from "@mui/material";
// import Header from "../components/Header";
// import ChatWindow from "../components/ChatWindow";
// import { AuthContext } from "../context/AuthContext";
// import { Navigate } from "react-router-dom";

// export default function ChatPage() {
//   const { user } = useContext(AuthContext);

//   if (!user) return <Navigate to="/login" replace />;

//   return (
//     <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
//       <Header />
//       <Container maxWidth="md" sx={{ py: 4 }}>
//         <Paper elevation={3} sx={{ borderRadius: 3, p: 0, minHeight: 600 }}>
//           <ChatWindow />
//         </Paper>
//       </Container>
//     </Box>
//   );
// }

import React, { useContext } from "react";
import Header from "../components/Header";
import ChatWindow from "../components/ChatWindow";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ChatPage() {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <div className="max-w-4xl mx-auto py-8 px-2">
        <div className="bg-white rounded-xl shadow-lg p-0 min-h-[600px]">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
}