import React, { useState, useContext } from "react";
import { Avatar, Button, TextField, Typography, Container, Box, Paper, Link } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "", displayName: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await register(form.email, form.password, form.displayName);
    if (res.success) {
      navigate("/chat");
    } else {
      setError(res.error || "Registration failed");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ mt: 8, p: 4, borderRadius: 3 }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">Sign up</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth label="Display Name" name="displayName" value={form.displayName} onChange={handleChange} />
            <TextField margin="normal" required fullWidth label="Email" name="email" autoComplete="email" value={form.email} onChange={handleChange} />
            <TextField margin="normal" required fullWidth label="Password" name="password" type="password" autoComplete="new-password" value={form.password} onChange={handleChange} />
            {error && <Typography color="error" variant="body2">{error}</Typography>}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign Up</Button>
            <Link href="/login" variant="body2">{"Already have an account? Sign in"}</Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
