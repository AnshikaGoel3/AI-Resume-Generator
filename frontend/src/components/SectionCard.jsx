import {
  Card,
  CardContent,
  Typography,
  Switch,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useResume } from "../context/ResumeContext";
import axios from "axios";

export default function SectionCard({ section }) {
  const { updateSection, updateSectionTitle, toggleSection, deleteSection } =
    useResume();

  const isCustom = section.id.startsWith("custom_");

  const handleAIImprove = async () => {
    if (!section.content) return;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/ai/improve`,
        {
          sectionType: section.title.toUpperCase(),
          content: section.content,
        },
      );

      updateSection(section.id, response.data.improvedContent);
    } catch (error) {
      console.error(error);
      alert("AI improvement failed.");
    }
  };

  return (
    <Card
      sx={{
        mb: 3,
        borderRadius: 3,
        boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
      }}
    >
      <CardContent>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {isCustom ? (
            <TextField
              value={section.title}
              onChange={(e) => updateSectionTitle(section.id, e.target.value)}
              variant="standard"
              sx={{
                fontWeight: 700,
                flex: 1,
                mr: 2,
              }}
            />
          ) : (
            <Typography fontWeight={700}>{section.title}</Typography>
          )}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Switch
              checked={section.enabled}
              onChange={() => toggleSection(section.id)}
            />

            <IconButton size="small" onClick={() => deleteSection(section.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* CONTENT */}
        {section.enabled && (
          <>
            <TextField
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={section.content}
              onChange={(e) => updateSection(section.id, e.target.value)}
              placeholder={`Enter your ${section.title.toLowerCase()} here...`}
            />

            <Button
              variant="contained"
              sx={{
                mt: 2,
                background: "linear-gradient(90deg, #10b981, #059669)",
                textTransform: "none",
                fontWeight: 600,
              }}
              onClick={handleAIImprove}
            >
              Improve with AI ✨
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
