// // import React, { useContext, useRef, useEffect, useState } from "react";
// // import { Box, TextField, IconButton, CircularProgress, Typography, Button } from "@mui/material";
// // import SendIcon from "@mui/icons-material/Send";
// // import RefreshIcon from "@mui/icons-material/Refresh";
// // import { ChatContext } from "../context/ChatContext";
// // import MessageBubble from "./MessageBubble";

// // export default function ChatWindow() {
// //   const { messages, sendMessage, loading, clearChat } = useContext(ChatContext);
// //   const [input, setInput] = useState("");
// //   const messagesEndRef = useRef(null);

// //   useEffect(() => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   }, [messages]);

// //   const handleSend = async (e) => {
// //     e.preventDefault();
// //     if (input.trim()) {
// //       await sendMessage(input);
// //       setInput("");
// //     }
// //   };

// //   return (
// //     <Box sx={{ p: 3, height: 600, display: "flex", flexDirection: "column" }}>
// //       <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
// //         <Button
// //           variant="outlined"
// //           color="secondary"
// //           size="small"
// //           startIcon={<RefreshIcon />}
// //           onClick={clearChat}
// //         >
// //           Refresh Chat
// //         </Button>
// //       </Box>
// //       <Box sx={{ flex: 1, overflowY: "auto", mb: 2 }}>
// //         {messages.length === 0 && (
// //           <Typography color="text.secondary" align="center" sx={{ mt: 10 }}>
// //             Start a conversation with MindfulBot!
// //           </Typography>
// //         )}
// //         {messages.map((msg, idx) => (
// //           <MessageBubble key={idx} message={msg} />
// //         ))}
// //         <div ref={messagesEndRef} />
// //       </Box>
// //       <Box component="form" onSubmit={handleSend} sx={{ display: "flex", alignItems: "center" }}>
// //         <TextField
// //           fullWidth
// //           placeholder="Type your message..."
// //           value={input}
// //           onChange={e => setInput(e.target.value)}
// //           disabled={loading}
// //           sx={{ mr: 2 }}
// //         />
// //         <IconButton type="submit" color="primary" disabled={loading || !input.trim()}>
// //           {loading ? <CircularProgress size={24} /> : <SendIcon />}
// //         </IconButton>
// //       </Box>
// //     </Box>
// //   );
// // }
// import React, { useContext, useRef, useEffect, useState } from "react";
// import { 
//   Box, 
//   TextField, 
//   IconButton, 
//   CircularProgress, 
//   Typography, 
//   Button,
//   Fade,
//   Grow,
//   useTheme,
//   alpha,
//   InputAdornment,
//   Tooltip,
//   Zoom
// } from "@mui/material";
// import { 
//   Send as SendIcon,
//   Refresh as RefreshIcon,
//   Psychology as PsychologyIcon,
//   AutoAwesome as SparkleIcon,
//   Mic as MicIcon
// } from "@mui/icons-material";
// import { ChatContext } from "../context/ChatContext";
// import { MessageBubble } from "./MessageBubble";

// export default function ChatWindow() {
//   const { messages, sendMessage, loading, clearChat } = useContext(ChatContext);
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);
//   const theme = useTheme();

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   useEffect(() => {
//     if (input.length > 0) {
//       setIsTyping(true);
//       const timer = setTimeout(() => setIsTyping(false), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [input]);

//   const handleSend = async (e) => {
//     e.preventDefault();
//     if (input.trim()) {
//       await sendMessage(input);
//       setInput("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend(e);
//     }
//   };

//   const WelcomeMessage = () => (
//     <Fade in={true} timeout={1000}>
//       <Box sx={{ 
//         display: 'flex', 
//         flexDirection: 'column', 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         minHeight: '60%',
//         textAlign: 'center',
//         px: 3
//       }}>
//         <Zoom in={true} timeout={800}>
//           <Box sx={{ 
//             mb: 3,
//             p: 3,
//             borderRadius: '50%',
//             background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}>
//             <PsychologyIcon sx={{ 
//               fontSize: 60, 
//               color: theme.palette.primary.main,
//               filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
//             }} />
//           </Box>
//         </Zoom>
        
//         <Typography 
//           variant="h4" 
//           sx={{ 
//             mb: 2, 
//             fontWeight: 700,
//             background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//             backgroundClip: 'text',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             textShadow: 'none'
//           }}
//         >
//           Welcome to MindfulBot
//         </Typography>
        
//         <Typography 
//           variant="h6" 
//           color="text.secondary" 
//           sx={{ 
//             mb: 4, 
//             maxWidth: 400,
//             lineHeight: 1.6,
//             fontSize: '1.1rem'
//           }}
//         >
//           Your compassionate AI companion for mental wellness and emotional support
//         </Typography>
        
//         <Box sx={{ 
//           display: 'flex', 
//           gap: 2, 
//           flexWrap: 'wrap',
//           justifyContent: 'center',
//           opacity: 0.7
//         }}>
//           {[
//             "💭 Share your thoughts",
//             "🧘‍♀️ Find mindfulness",
//             "💚 Get support",
//             "🌱 Grow together"
//           ].map((text, index) => (
//             <Fade key={index} in={true} timeout={1200 + index * 200}>
//               <Typography 
//                 variant="body2" 
//                 sx={{ 
//                   px: 2, 
//                   py: 1, 
//                   bgcolor: alpha(theme.palette.primary.main, 0.05),
//                   borderRadius: 3,
//                   border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//                   fontSize: '0.9rem'
//                 }}
//               >
//                 {text}
//               </Typography>
//             </Fade>
//           ))}
//         </Box>
//       </Box>
//     </Fade>
//   );

//   return (
//     <Box sx={{ 
//       p: { xs: 2, md: 3 }, 
//       height: { xs: 'calc(100vh - 120px)', md: 700 }, 
//       display: "flex", 
//       flexDirection: "column",
//       position: 'relative'
//     }}>
//       {/* Header with actions */}
//       <Box sx={{ 
//         display: "flex", 
//         justifyContent: "space-between",
//         alignItems: "center",
//         mb: 2,
//         pb: 2,
//         borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`
//       }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <SparkleIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
//           <Typography variant="h6" sx={{ 
//             fontWeight: 600,
//             color: theme.palette.text.primary,
//             fontSize: '1.1rem'
//           }}>
//             MindfulBot Chat
//           </Typography>
//         </Box>
        
//         <Tooltip title="Start a new conversation" arrow>
//           <Button
//             variant="outlined"
//             color="secondary"
//             size="small"
//             startIcon={<RefreshIcon />}
//             onClick={clearChat}
//             sx={{
//               borderRadius: 2,
//               px: 2,
//               py: 1,
//               textTransform: 'none',
//               fontWeight: 500,
//               borderColor: alpha(theme.palette.secondary.main, 0.3),
//               '&:hover': {
//                 borderColor: theme.palette.secondary.main,
//                 backgroundColor: alpha(theme.palette.secondary.main, 0.05)
//               }
//             }}
//           >
//             New Chat
//           </Button>
//         </Tooltip>
//       </Box>

//       {/* Messages area */}
//       <Box sx={{ 
//         flex: 1, 
//         overflowY: "auto", 
//         mb: 2,
//         pr: 1,
//         '&::-webkit-scrollbar': {
//           width: '6px',
//         },
//         '&::-webkit-scrollbar-track': {
//           background: alpha(theme.palette.divider, 0.1),
//           borderRadius: '3px',
//         },
//         '&::-webkit-scrollbar-thumb': {
//           background: alpha(theme.palette.primary.main, 0.3),
//           borderRadius: '3px',
//           '&:hover': {
//             background: alpha(theme.palette.primary.main, 0.5),
//           },
//         },
//       }}>
//         {messages.length === 0 ? (
//           <WelcomeMessage />
//         ) : (
//           <>
//             {messages.map((msg, idx) => (
//               <MessageBubble key={idx} message={msg} index={idx} />
//             ))}
//             <div ref={messagesEndRef} />
//           </>
//         )}
//       </Box>

//       {/* Input area */}
//       <Box 
//         component="form" 
//         onSubmit={handleSend} 
//         sx={{ 
//           display: "flex", 
//           alignItems: "flex-end",
//           gap: 1,
//           p: 2,
//           bgcolor: alpha(theme.palette.background.paper, 0.8),
//           borderRadius: 3,
//           border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//           backdropFilter: 'blur(10px)',
//           boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.05)}`,
//           transition: 'all 0.2s ease-in-out',
//           '&:focus-within': {
//             borderColor: theme.palette.primary.main,
//             boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.15)}`,
//           }
//         }}
//       >
//         <TextField
//           fullWidth
//           multiline
//           maxRows={4}
//           placeholder="Share what's on your mind..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={handleKeyPress}
//           disabled={loading}
//           variant="standard"
//           InputProps={{
//             disableUnderline: true,
//             sx: {
//               fontSize: '1rem',
//               lineHeight: 1.5,
//               '& .MuiInputBase-input': {
//                 py: 1,
//                 px: 1,
//                 '&::placeholder': {
//                   color: alpha(theme.palette.text.secondary, 0.7),
//                   opacity: 1
//                 }
//               }
//             },
//             endAdornment: isTyping && (
//               <InputAdornment position="end">
//                 <Typography variant="caption" color="text.secondary" sx={{ mr: 1 }}>
//                   Typing...
//                 </Typography>
//               </InputAdornment>
//             )
//           }}
//         />
        
//         <Tooltip title="Send message" arrow>
//           <span>
//             <IconButton 
//               type="submit" 
//               disabled={loading || !input.trim()}
//               sx={{
//                 bgcolor: input.trim() ? theme.palette.primary.main : alpha(theme.palette.action.disabled, 0.1),
//                 color: input.trim() ? theme.palette.primary.contrastText : theme.palette.action.disabled,
//                 width: 44,
//                 height: 44,
//                 borderRadius: 2,
//                 transition: 'all 0.2s ease-in-out',
//                 '&:hover': {
//                   bgcolor: input.trim() ? theme.palette.primary.dark : alpha(theme.palette.action.disabled, 0.2),
//                   transform: 'translateY(-1px)',
//                 },
//                 '&:disabled': {
//                   bgcolor: alpha(theme.palette.action.disabled, 0.1),
//                   color: theme.palette.action.disabled,
//                 }
//               }}
//             >
//               {loading ? (
//                 <CircularProgress size={20} color="inherit" />
//               ) : (
//                 <SendIcon fontSize="small" />
//               )}
//             </IconButton>
//           </span>
//         </Tooltip>
//       </Box>
//     </Box>
//   );
// }




import React, { useContext, useRef, useEffect, useState, useCallback, useMemo } from "react";
import { 
  Box, 
  TextField, 
  IconButton, 
  CircularProgress, 
  Typography, 
  Button,
  Fade,
  Grow,
  useTheme,
  alpha,
  InputAdornment,
  Tooltip,
  Zoom
} from "@mui/material";
import { 
  Send as SendIcon,
  Refresh as RefreshIcon,
  Psychology as PsychologyIcon,
  AutoAwesome as SparkleIcon,
  Mic as MicIcon
} from "@mui/icons-material";
import { ChatContext } from "../context/ChatContext";
import { MessageBubble } from "./MessageBubble";

// Memoized welcome message component to prevent re-renders
const WelcomeMessage = React.memo(() => {
  const theme = useTheme();
  
  return (
    <Fade in={true} timeout={1000}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '60%',
        textAlign: 'center',
        px: 3
      }}>
        <Zoom in={true} timeout={800}>
          <Box sx={{ 
            mb: 3,
            p: 3,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <PsychologyIcon sx={{ 
              fontSize: 60, 
              color: theme.palette.primary.main,
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
            }} />
          </Box>
        </Zoom>
        
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 2, 
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: 'none'
          }}
        >
          Welcome to MindfulBot
        </Typography>
        
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ 
            mb: 4, 
            maxWidth: 400,
            lineHeight: 1.6,
            fontSize: '1.1rem'
          }}
        >
          Your compassionate AI companion for mental wellness and emotional support
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          flexWrap: 'wrap',
          justifyContent: 'center',
          opacity: 0.7
        }}>
          {[
            "💭 Share your thoughts",
            "🧘‍♀️ Find mindfulness",
            "💚 Get support",
            "🌱 Grow together"
          ].map((text, index) => (
            <Fade key={index} in={true} timeout={1200 + index * 200}>
              <Typography 
                variant="body2" 
                sx={{ 
                  px: 2, 
                  py: 1, 
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                  borderRadius: 3,
                  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  fontSize: '0.9rem'
                }}
              >
                {text}
              </Typography>
            </Fade>
          ))}
        </Box>
      </Box>
    </Fade>
  );
});

export default function ChatWindow() {
  const { messages, sendMessage, loading, clearChat } = useContext(ChatContext);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const theme = useTheme();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = useCallback(async (e) => {
    e.preventDefault();
    if (input.trim()) {
      await sendMessage(input);
      setInput("");
    }
  }, [input, sendMessage]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  }, [handleSend]);

  // Memoize the input change handler
  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  // Check if user is typing (simple check based on input length)
  const showTypingIndicator = useMemo(() => input.length > 0, [input.length]);

  return (
    <Box sx={{ 
      p: { xs: 2, md: 3 }, 
      height: { xs: 'calc(100vh - 120px)', md: 700 }, 
      display: "flex", 
      flexDirection: "column",
      position: 'relative'
    }}>
      {/* Header with actions */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
        pb: 2,
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SparkleIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
          <Typography variant="h6" sx={{ 
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontSize: '1.1rem'
          }}>
            MindfulBot Chat
          </Typography>
        </Box>
        
        <Tooltip title="Start a new conversation" arrow>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<RefreshIcon />}
            onClick={clearChat}
            sx={{
              borderRadius: 2,
              px: 2,
              py: 1,
              textTransform: 'none',
              fontWeight: 500,
              borderColor: alpha(theme.palette.secondary.main, 0.3),
              '&:hover': {
                borderColor: theme.palette.secondary.main,
                backgroundColor: alpha(theme.palette.secondary.main, 0.05)
              }
            }}
          >
            New Chat
          </Button>
        </Tooltip>
      </Box>

      {/* Messages area */}
      <Box sx={{ 
        flex: 1, 
        overflowY: "auto", 
        mb: 2,
        pr: 1,
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: alpha(theme.palette.divider, 0.1),
          borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: alpha(theme.palette.primary.main, 0.3),
          borderRadius: '3px',
          '&:hover': {
            background: alpha(theme.palette.primary.main, 0.5),
          },
        },
      }}>
        {messages.length === 0 ? (
          <WelcomeMessage />
        ) : (
          <>
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} message={msg} index={idx} />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </Box>

      {/* Input area */}
      <Box 
        component="form" 
        onSubmit={handleSend} 
        sx={{ 
          display: "flex", 
          alignItems: "flex-end",
          gap: 1,
          p: 2,
          bgcolor: alpha(theme.palette.background.paper, 0.8),
          borderRadius: 3,
          border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          backdropFilter: 'blur(10px)',
          boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.05)}`,
          transition: 'all 0.2s ease-in-out',
          '&:focus-within': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.15)}`,
          }
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={4}
          placeholder="Share what's on your mind..."
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          disabled={loading}
          variant="standard"
          InputProps={{
            disableUnderline: true,
            sx: {
              fontSize: '1rem',
              lineHeight: 1.5,
              '& .MuiInputBase-input': {
                py: 1,
                px: 1,
                '&::placeholder': {
                  color: alpha(theme.palette.text.secondary, 0.7),
                  opacity: 1
                }
              }
            }
          }}
        />
        
        <Tooltip title="Send message" arrow>
          <span>
            <IconButton 
              type="submit" 
              disabled={loading || !input.trim()}
              sx={{
                bgcolor: input.trim() ? theme.palette.primary.main : alpha(theme.palette.action.disabled, 0.1),
                color: input.trim() ? theme.palette.primary.contrastText : theme.palette.action.disabled,
                width: 44,
                height: 44,
                borderRadius: 2,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  bgcolor: input.trim() ? theme.palette.primary.dark : alpha(theme.palette.action.disabled, 0.2),
                  transform: 'translateY(-1px)',
                },
                '&:disabled': {
                  bgcolor: alpha(theme.palette.action.disabled, 0.1),
                  color: theme.palette.action.disabled,
                }
              }}
            >
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SendIcon fontSize="small" />
              )}
            </IconButton>
          </span>
        </Tooltip>
      </Box>
    </Box>
  );
}