import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export default function Home() {
  return (
    <Box className="space-y-6">
      <Typography variant="h3" component="h1">Welcome to HIKESAFE</Typography>
      <Typography variant="body1">Your guide to safe and enjoyable hiking experiences. Learn preparedness, essential gear, and emergency steps.</Typography>
      <div className="flex gap-4">
        <Button variant="contained" color="primary" href="#safety">Explore Safety Tips</Button>
        <Button variant="outlined" color="primary" href="/resources">Resources</Button>
      </div>
    </Box>
  )
}
