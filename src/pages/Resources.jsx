import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

export default function Resources() {
  return (
    <Box className="space-y-4">
      <Typography variant="h4">Resources</Typography>
      <Typography variant="body1">Curated resources for planning, maps, and emergency preparedness.</Typography>
      <ul className="list-disc pl-6">
        <li><Link href="#">Local trail maps</Link></li>
        <li><Link href="#">Emergency contact templates</Link></li>
        <li><Link href="#">Recommended gear lists</Link></li>
      </ul>
    </Box>
  )
}
