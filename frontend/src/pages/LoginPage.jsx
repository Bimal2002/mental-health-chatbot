import React, { useState, useContext } from "react";
import { Avatar, Button, TextField, Typography, Container, Box, Paper, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await login(form.email, form.password);
    if (res.success) {
      navigate("/chat");
    } else {
      setError(res.error || "Login failed");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ mt: 8, p: 4, borderRadius: 3 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign in</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth label="Email" name="email" autoComplete="email" autoFocus value={form.email} onChange={handleChange} />
            <TextField margin="normal" required fullWidth label="Password" name="password" type="password" autoComplete="current-password" value={form.password} onChange={handleChange} />
            {error && <Typography color="error" variant="body2">{error}</Typography>}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
            <Link href="/register" variant="body2">{"Don't have an account? Sign Up"}</Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
