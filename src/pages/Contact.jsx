import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import Alert from '@mui/material/Alert'
import { User, Mail, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, success: false, error: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: '' })

    try {
      // Send email to developer
      const response1 = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_b9yg8bm',
          template_id: 'template_msfzosg',
          user_id: 'kc7N-ZhC7f4SSz3R4',
          template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
        }),
      })

      if (!response1.ok) {
        const error1 = await response1.text()
        console.error('Developer email failed:', error1)
        throw new Error('Failed to send notification to developer')
      }

      // Send auto-reply to user
      const response2 = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: 'service_b9yg8bm',
          template_id: 'template_flrmidd',
          user_id: 'kc7N-ZhC7f4SSz3R4',
          template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
        }),
      })

      if (!response2.ok) {
        const error2 = await response2.text()
        console.error('Auto-reply failed:', error2)
        // Continue anyway - main email was sent
      }

      setStatus({ loading: false, success: true, error: '' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Submit error:', error)
      setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again.' })
    }
  }

  return (
    <Box className="flex flex-col items-center justify-center text-center fade-in-up" sx={{ py: 12, fontFamily: 'Poppins, Arial, sans-serif', background: 'none' }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: 'var(--brand)', letterSpacing: '-1px' }}>
        Contact
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: '#374151', fontSize: '1.15rem' }}>
        Have questions or want to reach out? Fill out the form below and we’ll get back to you soon!
      </Typography>

      {status.success && (
        <Alert severity="success" sx={{ mb: 2, maxWidth: 400, mx: 'auto' }}>
          Message sent successfully! We'll get back to you soon.
        </Alert>
      )}
      {status.error && (
        <Alert severity="error" sx={{ mb: 2, maxWidth: 400, mx: 'auto' }}>
          {status.error}
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit} className="animate-fade-in-up" sx={{ width: '100%', maxWidth: 400, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2, animationDelay: '0.2s', animationFillMode: 'both' }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
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
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
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
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
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
        <Button 
          type="submit" 
          variant="contained" 
          color="success" 
          size="large" 
          disabled={status.loading}
          sx={{ fontWeight: 600, borderRadius: 999, mt: 2, fontFamily: 'Poppins, Arial, sans-serif', fontSize: '1.1rem', boxShadow: 3, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.07)' } }}
        >
          {status.loading ? 'Sending...' : 'Send'}
        </Button>
      </Box>
    </Box>
  );
}
