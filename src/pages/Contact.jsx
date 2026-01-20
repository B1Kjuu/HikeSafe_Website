import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function Contact() {
  return (
    <Box className="space-y-4 max-w-xl">
      <Typography variant="h4">Contact</Typography>
      <TextField fullWidth label="Name" />
      <TextField fullWidth label="Email" />
      <TextField fullWidth label="Message" multiline rows={4} />
      <Button variant="contained">Send</Button>
    </Box>
  )
}
