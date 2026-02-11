import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import html2pdf from "html2pdf.js";

export default function AppHeader() {
  const handleExport = () => {
    const element = document.getElementById("resume-preview");

    if (!element) {
      alert("Resume not found!");
      return;
    }

    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 3, // higher quality
        useCORS: true,
        scrollY: 0,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: {
        mode: ["avoid-all", "css", "legacy"],
      },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "linear-gradient(90deg, #6366f1, #7c3aed)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={700}>
          AI Resume Builder Pro
        </Typography>

        <Button
          variant="contained"
          onClick={handleExport}
          sx={{
            background: "#ffffff",
            color: "#6366f1",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              background: "#f3f4f6",
            },
          }}
        >
          Export PDF
        </Button>
      </Toolbar>
    </AppBar>
  );
}
