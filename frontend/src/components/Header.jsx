// import React, { useContext, useState } from "react";
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   Button, 
//   Box,
//   useTheme,
//   alpha,
//   IconButton,
//   Menu,
//   MenuItem,
//   Avatar,
//   Divider,
//   useMediaQuery,
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Fade,
// } from "@mui/material";
// import {
//   ChatBubbleOutline as ChatBubbleOutlineIcon,
//   Psychology as PsychologyIcon,
//   Person as PersonIcon,
//   Login as LoginIcon,
//   PersonAdd as PersonAddIcon,
//   Logout as LogoutIcon,
//   Home as HomeIcon,
//   Menu as MenuIcon,
//   Close as CloseIcon
// } from "@mui/icons-material";
// import TrendingUp from '@mui/icons-material/TrendingUp';
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function Header() {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
//   const handleUserMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
  
//   const handleUserMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     logout();
//     handleUserMenuClose();
//     navigate('/');
//   };

//   const navigationItems = [
//     { label: 'Home', icon: <HomeIcon />, action: () => navigate('/') },
//     ...(user 
//       ? [
//           { label: 'Chat', icon: <ChatBubbleOutlineIcon />, action: () => navigate('/chat') },
//           { label: 'Results Dashboard', icon: <TrendingUp />, action: () => navigate('/progress') },
//           { label: 'Logout', icon: <LogoutIcon />, action: handleLogout, divider: true }
//         ]
//       : [
//           { label: 'Login', icon: <LoginIcon />, action: () => navigate('/login') },
//           { label: 'Sign Up', icon: <PersonAddIcon />, action: () => navigate('/register') }
//         ]
//     )
//   ];

//   const MobileDrawer = () => (
//     <Drawer
//       anchor="right"
//       open={mobileDrawerOpen}
//       onClose={() => setMobileDrawerOpen(false)}
//       PaperProps={{
//         sx: {
//           width: 280,
//           background: '#ffffff',
//           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//         }
//       }}
//     >
//       <Box sx={{ p: 2, borderBottom: `1px solid #f0f0f0` }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//             <Box sx={{ 
//               width: 32, 
//               height: 32, 
//               borderRadius: '8px',
//               background: '#4c6fff',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}>
//               <PsychologyIcon sx={{ color: '#ffffff', fontSize: 18 }} />
//             </Box>
//             <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a1a1a' }}>
//               MindfulBot
//             </Typography>
//           </Box>
//           <IconButton onClick={() => setMobileDrawerOpen(false)} size="small">
//             <CloseIcon />
//           </IconButton>
//         </Box>
//         {user && (
//           <Box sx={{ 
//             mt: 2, 
//             p: 2, 
//             bgcolor: '#f8f9ff',
//             borderRadius: 2,
//             display: 'flex',
//             alignItems: 'center',
//             gap: 2
//           }}>
//             <Avatar sx={{ bgcolor: '#4c6fff', width: 32, height: 32 }}>
//               <PersonIcon fontSize="small" />
//             </Avatar>
//             <Typography variant="body2" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
//               Welcome back!
//             </Typography>
//           </Box>
//         )}
//       </Box>
      
//       <List sx={{ p: 1 }}>
//         {navigationItems.map((item, index) => (
//           <React.Fragment key={index}>
//             {item.divider && <Divider sx={{ my: 1 }} />}
//             <ListItem 
//               button 
//               onClick={() => {
//                 item.action();
//                 setMobileDrawerOpen(false);
//               }}
//               sx={{
//                 borderRadius: 2,
//                 mb: 0.5,
//                 '&:hover': {
//                   bgcolor: '#f8f9ff'
//                 }
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: 36, color: '#4c6fff' }}>
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText 
//                 primary={item.label}
//                 primaryTypographyProps={{
//                   fontWeight: 500,
//                   fontSize: '0.95rem',
//                   color: '#1a1a1a'
//                 }}
//               />
//             </ListItem>
//           </React.Fragment>
//         ))}
//       </List>
//     </Drawer>
//   );

//   return (
//     <>
//       <AppBar 
//         position="static" 
//         elevation={0}
//         sx={{ 
//           background: '#ffffff',
//           borderBottom: '1px solid #e5e7eb',
//           boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
//         }}
//       >
//         <Toolbar sx={{ minHeight: { xs: 64, md: 70 }, px: { xs: 2, md: 4 } }}>
//           {/* Logo and Brand */}
//           <Box 
//             sx={{ 
//               display: 'flex', 
//               alignItems: 'center', 
//               cursor: 'pointer',
//               transition: 'transform 0.2s ease-in-out',
//               '&:hover': {
//                 transform: 'scale(1.02)'
//               }
//             }}
//             onClick={() => navigate("/")}
//           >
//             <Box sx={{ 
//               mr: 2, 
//               width: 40,
//               height: 40,
//               borderRadius: '10px',
//               background: '#4c6fff',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center'
//             }}>
//               <PsychologyIcon 
//                 sx={{ 
//                   color: '#ffffff',
//                   fontSize: 22
//                 }} 
//               />
//             </Box>
//             <Box>
//               <Typography 
//                 variant="h6" 
//                 sx={{ 
//                   fontWeight: 700,
//                   color: '#1a1a1a',
//                   fontSize: '1.25rem',
//                   lineHeight: 1.2
//                 }}
//               >
//                 MindfulBot
//               </Typography>
//               <Typography 
//                 variant="caption" 
//                 sx={{ 
//                   color: '#6b7280',
//                   fontSize: '0.75rem',
//                   lineHeight: 1
//                 }}
//               >
//                 AI Mental Wellness
//               </Typography>
//             </Box>
//           </Box>

//           <Box sx={{ flexGrow: 1 }} />

//           {/* Desktop Navigation */}
//           {!isMobile && (
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//               <Button 
//                 color="inherit" 
//                 onClick={() => navigate("/")}
//                 sx={{
//                   color: '#6b7280',
//                   fontWeight: 500,
//                   px: 2,
//                   py: 1,
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.2s ease-in-out',
//                   '&:hover': {
//                     bgcolor: '#f8f9ff',
//                     color: '#4c6fff'
//                   }
//                 }}
//               >
//                 Features
//               </Button>
              
//               <Button 
//                 color="inherit" 
//                 onClick={() => navigate("/")}
//                 sx={{
//                   color: '#6b7280',
//                   fontWeight: 500,
//                   px: 2,
//                   py: 1,
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.2s ease-in-out',
//                   '&:hover': {
//                     bgcolor: '#f8f9ff',
//                     color: '#4c6fff'
//                   }
//                 }}
//               >
//                 Resources
//               </Button>
              
//               <Button 
//                 color="inherit" 
//                 onClick={() => navigate("/")}
//                 sx={{
//                   color: '#6b7280',
//                   fontWeight: 500,
//                   px: 2,
//                   py: 1,
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.2s ease-in-out',
//                   '&:hover': {
//                     bgcolor: '#f8f9ff',
//                     color: '#4c6fff'
//                   }
//                 }}
//               >
//                 Support
//               </Button>
              
//               <Button 
//                 color="inherit" 
//                 onClick={() => navigate("/")}
//                 sx={{
//                   color: '#6b7280',
//                   fontWeight: 500,
//                   px: 2,
//                   py: 1,
//                   borderRadius: 2,
//                   textTransform: 'none',
//                   fontSize: '0.95rem',
//                   transition: 'all 0.2s ease-in-out',
//                   '&:hover': {
//                     bgcolor: '#f8f9ff',
//                     color: '#4c6fff'
//                   }
//                 }}
//               >
//                 About
//               </Button>
              
//               {!user ? (
//                 <>
//                   <Button 
//                     color="inherit" 
//                     onClick={() => navigate("/login")}
//                     sx={{
//                       color: '#6b7280',
//                       fontWeight: 500,
//                       px: 2,
//                       py: 1,
//                       borderRadius: 2,
//                       textTransform: 'none',
//                       fontSize: '0.95rem',
//                       transition: 'all 0.2s ease-in-out',
//                       '&:hover': {
//                         bgcolor: '#f8f9ff',
//                         color: '#4c6fff'
//                       }
//                     }}
//                     startIcon={<LoginIcon />}
//                   >
//                     Login
//                   </Button>
//                   <Button 
//                     variant="contained"
//                     onClick={() => navigate("/register")}
//                     sx={{
//                       bgcolor: '#4c6fff',
//                       color: '#ffffff',
//                       fontWeight: 600,
//                       px: 3,
//                       py: 1,
//                       borderRadius: '8px',
//                       textTransform: 'none',
//                       fontSize: '0.95rem',
//                       ml: 1,
//                       boxShadow: '0 2px 4px rgba(76, 111, 255, 0.2)',
//                       transition: 'all 0.2s ease-in-out',
//                       '&:hover': {
//                         bgcolor: '#3b5bff',
//                         boxShadow: '0 4px 12px rgba(76, 111, 255, 0.3)',
//                         transform: 'translateY(-1px)'
//                       }
//                     }}
//                     startIcon={<PersonAddIcon />}
//                   >
//                     Sign Up
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Button 
//                     variant="contained"
//                     onClick={() => navigate("/chat")}
//                     sx={{
//                       bgcolor: '#4c6fff',
//                       color: '#ffffff',
//                       fontWeight: 600,
//                       px: 3,
//                       py: 1,
//                       borderRadius: '8px',
//                       textTransform: 'none',
//                       fontSize: '0.95rem',
//                       boxShadow: '0 2px 4px rgba(76, 111, 255, 0.2)',
//                       transition: 'all 0.2s ease-in-out',
//                       '&:hover': {
//                         bgcolor: '#3b5bff',
//                         boxShadow: '0 4px 12px rgba(76, 111, 255, 0.3)',
//                         transform: 'translateY(-1px)'
//                       }
//                     }}
//                     startIcon={<ChatBubbleOutlineIcon />}
//                   >
//                     Start Chat
//                   </Button>
                  
//                   <Button 
//                     variant="outlined"
//                     onClick={() => navigate("/progress")}
//                     sx={{
//                       borderColor: '#d1d5db',
//                       color: '#6b7280',
//                       fontWeight: 500,
//                       px: 3,
//                       py: 1,
//                       borderRadius: '8px',
//                       textTransform: 'none',
//                       fontSize: '0.95rem',
//                       ml: 1,
//                       transition: 'all 0.2s ease-in-out',
//                       '&:hover': {
//                         borderColor: '#4c6fff',
//                         color: '#4c6fff',
//                         bgcolor: '#f8f9ff'
//                       }
//                     }}
//                     startIcon={<TrendingUp />}
//                   >
//                     See my results
//                   </Button>
                  
//                   <Button 
//                     color="inherit" 
//                     onClick={handleLogout}
//                     sx={{
//                       color: '#6b7280',
//                       fontWeight: 500,
//                       px: 2,
//                       py: 1,
//                       borderRadius: 2,
//                       textTransform: 'none',
//                       fontSize: '0.95rem',
//                       ml: 1,
//                       transition: 'all 0.2s ease-in-out',
//                       '&:hover': {
//                         bgcolor: '#fef2f2',
//                         color: '#dc2626'
//                       }
//                     }}
//                   >
//                     Logout
//                   </Button>
                  
//                   <IconButton
//                     onClick={handleUserMenuOpen}
//                     sx={{ 
//                       ml: 2,
//                       transition: 'all 0.2s ease-in-out',
//                       '&:hover': {
//                         transform: 'scale(1.05)'
//                       }
//                     }}
//                   >
//                     <Avatar 
//                       sx={{ 
//                         bgcolor: '#4c6fff',
//                         color: '#ffffff',
//                         width: 36,
//                         height: 36,
//                         fontSize: '1rem',
//                         fontWeight: 600
//                       }}
//                     >
//                       U
//                     </Avatar>
//                   </IconButton>
//                   <Menu
//                     anchorEl={anchorEl}
//                     open={Boolean(anchorEl)}
//                     onClose={handleUserMenuClose}
//                     PaperProps={{
//                       sx: {
//                         mt: 1,
//                         borderRadius: 2,
//                         minWidth: 180,
//                         background: '#ffffff',
//                         boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
//                         border: '1px solid #e5e7eb'
//                       }
//                     }}
//                   >
//                     <MenuItem 
//                       onClick={() => { handleUserMenuClose(); navigate('/progress'); }}
//                       sx={{
//                         py: 1.5,
//                         px: 2,
//                         borderRadius: 1,
//                         m: 0.5,
//                         '&:hover': {
//                           bgcolor: '#f8f9ff'
//                         }
//                       }}
//                     >
//                       <TrendingUp sx={{ mr: 1.5, fontSize: 20, color: '#4c6fff' }} />
//                       <Typography variant="body2" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
//                         My Results
//                       </Typography>
//                     </MenuItem>
//                     <MenuItem 
//                       onClick={handleLogout}
//                       sx={{
//                         py: 1.5,
//                         px: 2,
//                         borderRadius: 1,
//                         m: 0.5,
//                         '&:hover': {
//                           bgcolor: '#fef2f2'
//                         }
//                       }}
//                     >
//                       <LogoutIcon sx={{ mr: 1.5, fontSize: 20, color: '#dc2626' }} />
//                       <Typography variant="body2" sx={{ fontWeight: 500, color: '#1a1a1a' }}>
//                         Logout
//                       </Typography>
//                     </MenuItem>
//                   </Menu>
//                 </>
//               )}
//             </Box>
//           )}

//           {/* Mobile Menu Button */}
//           {isMobile && (
//             <IconButton
//               color="inherit"
//               onClick={() => setMobileDrawerOpen(true)}
//               sx={{
//                 color: '#6b7280',
//                 '&:hover': {
//                   bgcolor: '#f8f9ff'
//                 }
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <MobileDrawer />
//     </>
//   );
// }

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  Brain,
  Menu,
  X,
  User,
  LogOut,
  MessageCircle,
  TrendingUp,
  Home,
  BookOpen,
  Phone,
  Info,
  LogIn,
  UserPlus,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    navigate("/");
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const navigationItems = [
    { label: "Features", href: "#features", icon: <BookOpen className="w-4 h-4" /> },
    { label: "Resources", href: "#resources", icon: <BookOpen className="w-4 h-4" /> },
    { label: "Support", href: "#support", icon: <Phone className="w-4 h-4" /> },
    { label: "About", href: "#about", icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group transition-transform duration-200 hover:scale-105"
            onClick={() => handleNavigation("/")}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-200">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MindfulBot
              </h1>
              <p className="text-xs text-gray-500 font-medium">AI Mental Wellness</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-blue-50"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!user ? (
              <>
                <button
                  onClick={() => handleNavigation("/login")}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  <LogIn className="w-4 h-4" />
                  Login
                </button>
                <button
                  onClick={() => handleNavigation("/register")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  Get Started
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleNavigation("/chat")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Start Chat
                </button>
                <button
                  onClick={() => handleNavigation("/progress")}
                  className="bg-white text-blue-600 border border-blue-600 px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold flex items-center gap-2"
                >
                  <TrendingUp className="w-4 h-4" />
                  My Results
                </button>
                
                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-blue-50"
                  >
                    <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* User Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              {user?.name || 'User'}
                            </p>
                            <p className="text-xs text-gray-500">
                              {user?.email || 'Welcome back!'}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleNavigation("/progress")}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      >
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-medium">My Results</span>
                      </button>
                      
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-medium">Logout</span>
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm rounded-b-xl">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              
              <div className="pt-4 border-t border-gray-100 mt-2">
                {!user ? (
                  <div className="space-y-2">
                    <button
                      className="w-full flex items-center space-x-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-colors duration-200"
                      onClick={() => handleNavigation("/login")}
                    >
                      <LogIn className="w-4 h-4" />
                      <span className="font-medium">Login</span>
                    </button>
                    <button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                      onClick={() => handleNavigation("/register")}
                    >
                      <UserPlus className="w-4 h-4" />
                      Get Started
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {/* User Info */}
                    <div className="flex items-center space-x-3 px-4 py-3 bg-blue-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {user?.name || 'User'}
                        </p>
                        <p className="text-xs text-gray-500">
                          Welcome back!
                        </p>
                      </div>
                    </div>
                    
                    <button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                      onClick={() => handleNavigation("/chat")}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Start Chat
                    </button>
                    
                    <button
                      className="w-full bg-white text-blue-600 border border-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold flex items-center justify-center gap-2"
                      onClick={() => handleNavigation("/progress")}
                    >
                      <TrendingUp className="w-4 h-4" />
                      My Results
                    </button>
                    
                    <button
                      className="w-full flex items-center space-x-3 text-gray-600 hover:text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-colors duration-200"
                      onClick={handleLogout}
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Overlay for user menu */}
      {isUserMenuOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </header>
  );
}