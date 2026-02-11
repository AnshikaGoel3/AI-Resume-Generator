import { Box, Typography, LinearProgress } from "@mui/material";
import { useResume } from "../context/ResumeContext";
import { calculateATS } from "../utils/atsCalculator";

export default function ATSScoreCard() {
  const { resume } = useResume();

  const { score, suggestions } = calculateATS(resume);

  return (
    <Box
      sx={{
        background: "white",
        borderRadius: 3,
        p: 4,
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <Typography fontWeight={600}>ATS Compatibility Score</Typography>

      <Typography sx={{ fontSize: 28, fontWeight: 700, mt: 1 }}>
        {score} / 100
      </Typography>

      <LinearProgress
        variant="determinate"
        value={score}
        sx={{
          mt: 2,
          height: 6,
          borderRadius: 5,
        }}
      />

      <Typography sx={{ mt: 2, fontSize: 13, color: "#666" }}>
        Your resume needs more content to pass ATS screening.
      </Typography>

      <Box sx={{ mt: 2, fontSize: 13 }}>
        {suggestions.map((s, i) => (
          <div key={i}>• {s}</div>
        ))}
      </Box>
    </Box>
  );
}
