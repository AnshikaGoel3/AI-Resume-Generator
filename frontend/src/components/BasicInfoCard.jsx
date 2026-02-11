import { Card, CardContent, Typography, TextField, Box } from "@mui/material";
import { useResume } from "../context/ResumeContext";

export default function BasicInfoCard() {
  const { resume, updateBasic } = useResume();

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Basic Information
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Full Name"
            value={resume.fullName}
            onChange={(e) => updateBasic("fullName", e.target.value)}
            fullWidth
          />

          <TextField
            label="Email"
            value={resume.email}
            onChange={(e) => updateBasic("email", e.target.value)}
            fullWidth
          />

          <TextField
            label="Target Role"
            value={resume.targetRole}
            onChange={(e) => updateBasic("targetRole", e.target.value)}
            fullWidth
          />
        </Box>
      </CardContent>
    </Card>
  );
}
