import { Box, Button } from "@mui/material";
import AppHeader from "../components/AppHeader";
import BasicInfoCard from "../components/BasicInfoCard";
import SectionCard from "../components/SectionCard";
import ResumePreview from "../components/ResumePreview";
import ATSScoreCard from "../components/ATSScoreCard";
import TemplateSwitcher from "../components/TemplateSwitcher";
import { useResume } from "../context/ResumeContext";

export default function BuilderPage() {
  const { resume, addSection } = useResume();

  return (
    <>
      <AppHeader />

      <Box
        sx={{
          display: "flex",
          height: "calc(100vh - 64px)",
          overflow: "hidden",
          background: "#f3f4f6",
        }}
      >
        {/* LEFT PANEL */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            overflowY: "auto",
            background: "#f5f7fb",
            borderRight: "1px solid #e5e7eb",
          }}
        >
          <BasicInfoCard />

          {resume.sections.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}

          {/* CUSTOM SECTION BUTTON */}
          <Box sx={{ mt: 3 }}>
            <Button
              fullWidth
              onClick={addSection}
              sx={{
                py: 1.3,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                background: "linear-gradient(135deg,#6366f1,#7c3aed)",
                color: "white",
                boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
                "&:hover": {
                  background: "linear-gradient(135deg,#4f46e5,#6d28d9)",
                },
              }}
            >
              + Add Custom Section
            </Button>
          </Box>
        </Box>

        {/* RIGHT PANEL */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            overflowY: "auto",
            overflowX: "hidden",
            background: "#ffffff",
          }}
        >
          <TemplateSwitcher />

          {/* Resume Centered */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <ResumePreview />
          </Box>

          {/* ATS BELOW RESUME */}
          <Box
            sx={{
              mt: 4,
              maxWidth: "794px",
              mx: "auto",
            }}
          >
            <ATSScoreCard />
          </Box>
        </Box>
      </Box>
    </>
  );
}
