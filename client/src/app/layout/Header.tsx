import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface headerProps {
  darkMode: boolean;
  onToggle: (value: boolean) => void
}

export default function Header({ darkMode, onToggle }: headerProps) {

  function changeMode() {
    onToggle(!darkMode);
  }

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">
          App Store | {darkMode ? "☀️" : "🌙"}
          <Switch onClick={changeMode} />
        </Typography>
      </Toolbar>
    </AppBar>
  )
}