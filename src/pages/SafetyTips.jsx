import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

const tips = [
  'Plan your route and check weather before you go.',
  'Tell someone your plans and expected return time.',
  'Carry a map, compass, and/or GPS device.',
  'Bring sufficient water, high-energy snacks, and a first-aid kit.',
  'Wear appropriate footwear and layered clothing.'
]

export default function SafetyTips() {
  return (
    <Box className="space-y-4" id="safety">
      <Typography variant="h4">Essential Safety Tips</Typography>
      <List>
        {tips.map((t, i) => (
          <ListItem key={i}>
            <ListItemText primary={t} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
