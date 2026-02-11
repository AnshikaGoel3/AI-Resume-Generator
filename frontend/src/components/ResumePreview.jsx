import { Box, Typography, Divider, Chip } from "@mui/material";
import { useResume } from "../context/ResumeContext";
import { colors, radius, shadow } from "../theme/designSystem";

export default function ResumePreview() {
  const { resume } = useResume();

  const isModern = resume.template === "modern";
  const isProfessional = resume.template === "professional";
  const isMinimal = resume.template === "minimal";

  //Filter only enabled + non-empty sections
  const enabledSections = resume.sections.filter(
    (section) => section.enabled && section.content.trim(),
  );

  //A4 Container Styling
  const containerStyles = {
    width: "794px",
    minHeight: "1123px",
    background: "white",
    boxSizing: "border-box",

    transform: {
      xs: "scale(0.75)",
      md: "scale(0.85)",
      lg: "scale(1)",
    },
    transformOrigin: "top center",

    ...(isModern && {
      borderRadius: radius.xl,
      boxShadow: shadow.soft,
      overflow: "hidden",
    }),

    ...(isProfessional && {
      borderRadius: 0,
      boxShadow: "none",
    }),

    ...(isMinimal && {
      borderRadius: 0,
      boxShadow: "none",
    }),
  };

  const sectionTitleStyles = {
    modern: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 1,
      color: colors.primary,
      borderBottom: `2px solid ${colors.primary}`,
      pb: 1,
      mb: 2,
    },
    professional: {
      fontSize: 14,
      fontWeight: 700,
      textTransform: "uppercase",
      borderBottom: "1px solid #d1d5db",
      pb: 1,
      mb: 2,
    },
    minimal: {
      fontSize: 13,
      fontWeight: 600,
      textTransform: "uppercase",
      mb: 1.5,
    },
  };

  const renderSectionContent = (section) => {
    if (section.id === "skills") {
      return (
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {section.content.split(",").map((skill, index) => (
            <Chip
              key={index}
              label={skill.trim()}
              size="small"
              sx={
                isModern
                  ? {
                      background: "#eef2ff",
                      color: colors.primary,
                      fontWeight: 500,
                    }
                  : {
                      background: "#f3f4f6",
                      fontWeight: 500,
                    }
              }
            />
          ))}
        </Box>
      );
    }

    return (
      <Typography
        sx={{
          whiteSpace: "pre-line",
          lineHeight: 1.7,
          fontSize: 14,
          color: "#333",
        }}
      >
        {section.content}
      </Typography>
    );
  };

  return (
    <Box id="resume-preview" sx={containerStyles}>
      {/*MODERN*/}
      {isModern && (
        <>
          <Box
            sx={{
              background: colors.primaryGradient,
              color: "white",
              p: 4,
            }}
          >
            <Typography variant="h4" fontWeight={700}>
              {resume.fullName || "Your Name"}
            </Typography>

            <Typography sx={{ opacity: 0.9 }}>
              {resume.targetRole || "Target Role"}
            </Typography>

            {resume.email && (
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.85 }}>
                {resume.email}
              </Typography>
            )}
          </Box>

          <Box sx={{ p: 4 }}>
            {enabledSections.map((section) => (
              <Box key={section.id} sx={{ mb: 4 }}>
                <Typography sx={sectionTitleStyles.modern}>
                  {section.title}
                </Typography>
                {renderSectionContent(section)}
              </Box>
            ))}
          </Box>
        </>
      )}

      {/*PROFESSIONAL*/}
      {isProfessional && (
        <Box sx={{ p: 5 }}>
          <Typography variant="h3" fontWeight={700}>
            {resume.fullName}
          </Typography>

          <Typography sx={{ fontStyle: "italic", color: "#666", mb: 1 }}>
            {resume.targetRole}
          </Typography>

          {resume.email && (
            <Typography
              sx={{
                fontSize: 14,
                color: "#444",
                mb: 2,
              }}
            >
              {resume.email}
            </Typography>
          )}

          <Divider sx={{ my: 3 }} />

          {enabledSections.map((section) => (
            <Box key={section.id} sx={{ mb: 4 }}>
              <Typography sx={sectionTitleStyles.professional}>
                {section.title}
              </Typography>
              {renderSectionContent(section)}
            </Box>
          ))}
        </Box>
      )}

      {/*MINIMAL*/}
      {isMinimal && (
        <Box sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight={600}>
            {resume.fullName}
          </Typography>

          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: 12,
              letterSpacing: 1,
              color: "#777",
            }}
          >
            {resume.targetRole}
          </Typography>

          {resume.email && (
            <Typography
              sx={{
                fontSize: 13,
                color: "#555",
                mt: 0.5,
              }}
            >
              {resume.email}
            </Typography>
          )}

          <Divider sx={{ my: 2 }} />

          {enabledSections.map((section) => (
            <Box key={section.id} sx={{ mb: 4 }}>
              <Typography sx={sectionTitleStyles.minimal}>
                {section.title}
              </Typography>
              {renderSectionContent(section)}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
