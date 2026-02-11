import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import { useResume } from "../context/ResumeContext";

export default function TemplateSwitcher() {
  const { resume, setTemplate } = useResume();

  return (
    <Box sx={{ mb: 2 }}>
      <ToggleButtonGroup
        value={resume.template}
        exclusive
        onChange={(e, value) => value && setTemplate(value)}
        size="small"
      >
        <ToggleButton value="modern">Modern</ToggleButton>
        <ToggleButton value="professional">Professional</ToggleButton>
        <ToggleButton value="minimal">Minimal</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
