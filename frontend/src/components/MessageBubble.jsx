// // import React from "react";
// // import { Box, Typography, Paper, Chip, Stack, Divider, Link as MuiLink } from "@mui/material";

// // const isNegativeOrSad = (msg) => {
// //   const negative = msg.sentiment === "negative";
// //   const sad = (msg.emotions || []).some(e =>
// //     ["sad", "depressed", "hopeless", "unhappy", "down"].includes(e.toLowerCase())
// //   );
// //   return negative || sad;
// // };

// // export default function MessageBubble({ message }) {
// //   const isUser = message.sender === "user";
// //   return (
// //     <Box display="flex" justifyContent={isUser ? "flex-end" : "flex-start"} mb={1}>
// //       <Paper
// //         elevation={2}
// //         sx={{
// //           p: 2,
// //           maxWidth: 400,
// //           bgcolor: isUser ? "primary.main" : "grey.100",
// //           color: isUser ? "primary.contrastText" : "text.primary",
// //           borderRadius: 3,
// //         }}
// //       >
// //         <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{message.text}</Typography>
// //         {!isUser && (
// //           <>
// //             <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
// //               {message.sentiment && (
// //                 <Chip size="small" label={`Sentiment: ${message.sentiment}`} color="secondary" />
// //               )}
// //               {message.intensity && (
// //                 <Chip size="small" label={`Intensity: ${message.intensity}`} />
// //               )}
// //               {message.emotions && message.emotions.length > 0 && (
// //                 <Chip size="small" label={`Emotions: ${message.emotions.join(", ")}`} />
// //               )}
// //               {message.crisisLevel && message.crisisLevel !== 'none' && (
// //                 <Chip size="small" label={`Crisis: ${message.crisisLevel}`} color="error" />
// //               )}
// //               {message.confidence && (
// //                 <Chip size="small" label={`Confidence: ${(message.confidence * 100).toFixed(1)}%`} />
// //               )}
// //             </Stack>
// //             {isNegativeOrSad(message) && (
// //               <>
// //                 <Divider sx={{ my: 1 }} />
// //                 <Typography variant="subtitle2" color="error" gutterBottom>
// //                   If you are feeling low, please consider these resources:
// //                 </Typography>
// //                 <Typography variant="body2" gutterBottom>
// //                   <b>India Mental Health Helplines:</b><br />
// //                   <MuiLink href="tel:9152987821" target="_blank" rel="noopener">KIRAN (24x7): 9152987821</MuiLink><br />
// //                   <MuiLink href="https://www.vandrevalafoundation.com/helpline" target="_blank" rel="noopener">Vandrevala Foundation: 9999666555</MuiLink><br />
// //                   <MuiLink href="https://www.snehaindia.org/contact-us" target="_blank" rel="noopener">SNEHA: 044-24640050</MuiLink>
// //                 </Typography>
// //                 <Typography variant="body2" gutterBottom>
// //                   <b>Meditation & Self-Care Videos:</b><br />
// //                   <MuiLink href="https://www.youtube.com/watch?v=inpok4MKVLM" target="_blank" rel="noopener">10-Minute Meditation for Anxiety</MuiLink><br />
// //                   <MuiLink href="https://www.youtube.com/watch?v=O-6f5wQXSu8" target="_blank" rel="noopener">Guided Meditation for Depression</MuiLink>
// //                 </Typography>
// //                 <Typography variant="body2">
// //                   <b>Helpful Resources:</b><br />
// //                   <MuiLink href="https://www.mindsfoundation.org/resources" target="_blank" rel="noopener">MINDS Foundation Resources</MuiLink><br />
// //                   <MuiLink href="https://www.nimhans.ac.in/pssmhs-helpline/" target="_blank" rel="noopener">NIMHANS Helpline</MuiLink>
// //                 </Typography>
// //               </>
// //             )}
// //           </>
// //         )}
// //       </Paper>
// //     </Box>
// //   );
// // }

// import React from "react";
// import { Box, Typography, Paper, Chip, Stack, Divider, Link as MuiLink } from "@mui/material";
// import { marked } from "marked";

// const isNegativeOrSad = (msg) => {
//   const negative = msg.sentiment === "negative";
//   const sad = (msg.emotions || []).some(e =>
//     ["sad", "depressed", "hopeless", "unhappy", "down"].includes(e.toLowerCase())
//   );
//   return negative || sad;
// };

// function renderMarkdown(text) {
//   return <span dangerouslySetInnerHTML={{ __html: marked.parse(text || "") }} />;
// }

// export default function MessageBubble({ message }) {
//   const isUser = message.sender === "user";
//   return (
//     <Box display="flex" justifyContent={isUser ? "flex-end" : "flex-start"} mb={1}>
//       <Paper
//         elevation={2}
//         sx={{
//           p: 2,
//           maxWidth: 400,
//           bgcolor: isUser ? "primary.main" : "grey.100",
//           color: isUser ? "primary.contrastText" : "text.primary",
//           borderRadius: 3,
//         }}
//       >
//         <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
//           {isUser ? message.text : renderMarkdown(message.text)}
//         </Typography>
//         {!isUser && (
//           <>
//             <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
//               {message.sentiment && (
//                 <Chip size="small" label={`Sentiment: ${message.sentiment}`} color="secondary" />
//               )}
//               {message.intensity && (
//                 <Chip size="small" label={`Intensity: ${message.intensity}`} />
//               )}
//               {message.emotions && message.emotions.length > 0 && (
//                 <Chip size="small" label={`Emotions: ${message.emotions.join(", ")}`} />
//               )}
//               {message.crisisLevel && message.crisisLevel !== 'none' && (
//                 <Chip size="small" label={`Crisis: ${message.crisisLevel}`} color="error" />
//               )}
//               {message.confidence && (
//                 <Chip size="small" label={`Confidence: ${(message.confidence * 100).toFixed(1)}%`} />
//               )}
//             </Stack>
//             {isNegativeOrSad(message) && (
//               <>
//                 <Divider sx={{ my: 1 }} />
//                 <Typography variant="subtitle2" color="error" gutterBottom>
//                   If you are feeling low, please consider these resources:
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   <b>India Mental Health Helplines:</b><br />
//                   <MuiLink href="tel:9152987821" target="_blank" rel="noopener">KIRAN (24x7): 9152987821</MuiLink><br />
//                   <MuiLink href="https://www.vandrevalafoundation.com/helpline" target="_blank" rel="noopener">Vandrevala Foundation: 9999666555</MuiLink><br />
//                   <MuiLink href="https://www.snehaindia.org/contact-us" target="_blank" rel="noopener">SNEHA: 044-24640050</MuiLink>
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   <b>Meditation & Self-Care Videos:</b><br />
//                   <MuiLink href="https://www.youtube.com/watch?v=inpok4MKVLM" target="_blank" rel="noopener">10-Minute Meditation for Anxiety</MuiLink><br />
//                   <MuiLink href="https://www.youtube.com/watch?v=O-6f5wQXSu8" target="_blank" rel="noopener">Guided Meditation for Depression</MuiLink>
//                 </Typography>
//                 <Typography variant="body2">
//                   <b>Helpful Resources:</b><br />
//                   <MuiLink href="https://www.mindsfoundation.org/resources" target="_blank" rel="noopener">MINDS Foundation Resources</MuiLink><br />
//                   <MuiLink href="https://www.nimhans.ac.in/pssmhs-helpline/" target="_blank" rel="noopener">NIMHANS Helpline</MuiLink>
//                 </Typography>
//               </>
//             )}
//           </>
//         )}
//       </Paper>
//     </Box>
//   );
// }


import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Chip, 
  Stack, 
  Divider, 
  Link as MuiLink,
  TextField,
  IconButton,
  CircularProgress,
  Button,
  AppBar,
  Toolbar,
  Container,
  Avatar,
  Fade,
  Slide,
  useTheme,
  alpha
} from '@mui/material';
import { 
  Send as SendIcon, 
  Refresh as RefreshIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  SmartToy as BotIcon,
  Person as PersonIcon,
  Psychology as PsychologyIcon
} from '@mui/icons-material';

// Enhanced MessageBubble Component
export const MessageBubble = ({ message, index }) => {
  const theme = useTheme();
  const isUser = message.sender === "user";
  
  const isNegativeOrSad = (msg) => {
    const negative = msg.sentiment === "negative";
    const sad = (msg.emotions || []).some(e =>
      ["sad", "depressed", "hopeless", "unhappy", "down"].includes(e.toLowerCase())
    );
    return negative || sad;
  };

  return (
    <Slide direction={isUser ? "left" : "right"} in={true} timeout={300 + index * 100}>
      <Box 
        display="flex" 
        justifyContent={isUser ? "flex-end" : "flex-start"} 
        mb={3}
        sx={{
          animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        }}
      >
        {!isUser && (
          <Avatar 
            sx={{ 
              bgcolor: 'primary.main',
              mr: 1,
              mt: 0.5,
              width: 32,
              height: 32,
              boxShadow: theme.shadows[3]
            }}
          >
            <BotIcon fontSize="small" />
          </Avatar>
        )}
        
        <Paper
          elevation={isUser ? 8 : 4}
          sx={{
            p: 2.5,
            maxWidth: 420,
            bgcolor: isUser 
              ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
              : theme.palette.background.paper,
            color: isUser ? theme.palette.primary.contrastText : theme.palette.text.primary,
            borderRadius: isUser ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
            position: 'relative',
            transform: 'translateY(0)',
            transition: 'all 0.2s ease-in-out',
            border: isUser ? 'none' : `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
            background: isUser 
              ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
              : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.primary.main, 0.02)} 100%)`,
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: theme.shadows[12],
            },
            '&::before': isUser ? {} : {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              borderRadius: '20px 20px 0 0'
            }
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              whiteSpace: 'pre-line',
              lineHeight: 1.6,
              fontSize: '0.95rem'
            }}
          >
            {message.text}
          </Typography>
          
          {!isUser && (
            <>
              <Stack direction="row" spacing={1} mt={2} flexWrap="wrap" useFlexGap>
                {message.sentiment && (
                  <Chip 
                    size="small" 
                    label={`${message.sentiment}`} 
                    color={message.sentiment === 'positive' ? 'success' : message.sentiment === 'negative' ? 'error' : 'default'}
                    variant="outlined"
                    sx={{ 
                      fontSize: '0.75rem',
                      height: 24,
                      '& .MuiChip-label': { px: 1 }
                    }}
                  />
                )}
                {message.intensity && (
                  <Chip 
                    size="small" 
                    label={`${message.intensity} intensity`}
                    variant="outlined"
                    sx={{ 
                      fontSize: '0.75rem',
                      height: 24,
                      '& .MuiChip-label': { px: 1 }
                    }}
                  />
                )}
                {message.emotions && message.emotions.length > 0 && (
                  <Chip 
                    size="small" 
                    label={message.emotions.join(", ")}
                    color="secondary"
                    variant="outlined"
                    sx={{ 
                      fontSize: '0.75rem',
                      height: 24,
                      '& .MuiChip-label': { px: 1 }
                    }}
                  />
                )}
                {message.crisisLevel && message.crisisLevel !== 'none' && (
                  <Chip 
                    size="small" 
                    label={`${message.crisisLevel} crisis`} 
                    color="error"
                    sx={{ 
                      fontSize: '0.75rem',
                      height: 24,
                      '& .MuiChip-label': { px: 1 }
                    }}
                  />
                )}
                {message.confidence && (
                  <Chip 
                    size="small" 
                    label={`${(message.confidence * 100).toFixed(0)}% confident`}
                    variant="outlined"
                    sx={{ 
                      fontSize: '0.75rem',
                      height: 24,
                      '& .MuiChip-label': { px: 1 }
                    }}
                  />
                )}
              </Stack>
              
              {isNegativeOrSad(message) && (
                <Fade in={true} timeout={1000}>
                  <Box sx={{ mt: 2 }}>
                    <Divider sx={{ 
                      my: 2,
                      '&::before, &::after': {
                        borderColor: alpha(theme.palette.error.main, 0.3)
                      }
                    }} />
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: alpha(theme.palette.error.main, 0.04),
                      borderRadius: 2,
                      border: `1px solid ${alpha(theme.palette.error.main, 0.2)}`
                    }}>
                      <Typography variant="subtitle2" color="error" gutterBottom sx={{ fontWeight: 600 }}>
                        🤗 If you're feeling low, these resources can help:
                      </Typography>
                      <Typography variant="body2" gutterBottom sx={{ lineHeight: 1.6 }}>
                        <strong>India Mental Health Helplines:</strong><br />
                        <MuiLink href="tel:9152987821" target="_blank" rel="noopener" sx={{ color: theme.palette.primary.main }}>
                          📞 KIRAN (24x7): 9152987821
                        </MuiLink><br />
                        <MuiLink href="https://www.vandrevalafoundation.com/helpline" target="_blank" rel="noopener" sx={{ color: theme.palette.primary.main }}>
                          🏥 Vandrevala Foundation: 9999666555
                        </MuiLink><br />
                        <MuiLink href="https://www.snehaindia.org/contact-us" target="_blank" rel="noopener" sx={{ color: theme.palette.primary.main }}>
                          💚 SNEHA: 044-24640050
                        </MuiLink>
                      </Typography>
                      <Typography variant="body2" gutterBottom sx={{ lineHeight: 1.6 }}>
                        <strong>Meditation & Self-Care:</strong><br />
                        <MuiLink href="https://www.youtube.com/watch?v=inpok4MKVLM" target="_blank" rel="noopener" sx={{ color: theme.palette.primary.main }}>
                          🧘‍♀️ 10-Minute Anxiety Meditation
                        </MuiLink><br />
                        <MuiLink href="https://www.youtube.com/watch?v=O-6f5wQXSu8" target="_blank" rel="noopener" sx={{ color: theme.palette.primary.main }}>
                          🌱 Guided Depression Meditation
                        </MuiLink>
                      </Typography>
                      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        <strong>Additional Resources:</strong><br />
                        <MuiLink href="https://www.mindsfoundation.org/resources" target="_blank" rel="noopener" sx={{ color: theme.palette.primary.main }}>
                          🧠 MINDS Foundation Resources
                        </MuiLink><br />
                        <MuiLink href="https://www.nimhans.ac.in/pssmhs-helpline/" target="_blank" rel="noopener" sx={{ color: theme.palette.primary.main }}>
                          🏥 NIMHANS Helpline
                        </MuiLink>
                      </Typography>
                    </Box>
                  </Box>
                </Fade>
              )}
            </>
          )}
        </Paper>
        
        {isUser && (
          <Avatar 
            sx={{ 
              bgcolor: 'secondary.main',
              ml: 1,
              mt: 0.5,
              width: 32,
              height: 32,
              boxShadow: theme.shadows[3]
            }}
          >
            <PersonIcon fontSize="small" />
          </Avatar>
        )}
      </Box>
    </Slide>
  );
};