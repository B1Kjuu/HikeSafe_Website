import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import { User, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <Box className="flex flex-col items-center justify-center text-center fade-in-up" sx={{ py: 12, fontFamily: 'Poppins, Arial, sans-serif', background: 'none' }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'var(--brand)', letterSpacing: '-1px' }}>
        Contact
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: '#374151', fontSize: '1.15rem' }}>
        Have questions or want to reach out? Fill out the form below and we’ll get back to you soon!
      </Typography>
      <Box component="form" className="animate-fade-in-up" sx={{ width: '100%', maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2, animationDelay: '0.2s', animationFillMode: 'both' }}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <User size={20} className="text-green-700" />
              </InputAdornment>
            ),
          }}
          sx={{ background: 'white', borderRadius: 2, boxShadow: 1, transition: 'box-shadow 0.2s', '&:focus-within': { boxShadow: 4, borderColor: 'var(--brand)' }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--brand)' } }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Mail size={20} className="text-green-700" />
              </InputAdornment>
            ),
          }}
          sx={{ background: 'white', borderRadius: 2, boxShadow: 1, transition: 'box-shadow 0.2s', '&:focus-within': { boxShadow: 4, borderColor: 'var(--brand)' }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--brand)' } }}
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MessageCircle size={20} className="text-green-700" />
              </InputAdornment>
            ),
          }}
          sx={{ background: 'white', borderRadius: 2, boxShadow: 1, transition: 'box-shadow 0.2s', '&:focus-within': { boxShadow: 4, borderColor: 'var(--brand)' }, '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'var(--brand)' } }}
        />
        <Button variant="contained" color="success" size="large" sx={{ fontWeight: 600, borderRadius: 999, mt: 2, fontFamily: 'Poppins, Arial, sans-serif', fontSize: '1.1rem', boxShadow: 3, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.07)' } }}>
          Send
        </Button>
      </Box>
    </Box>
  );
}
