export function calculateATS(resume) {
  let score = 0;
  const suggestions = [];

  const addScore = (condition, points, message) => {
    if (condition) {
      score += points;
    } else {
      suggestions.push(message);
    }
  };

  // BASIC INFO

  addScore(resume.fullName?.trim().length > 2, 10, "Add full name");
  addScore(resume.email?.includes("@"), 10, "Add contact details");
  addScore(resume.targetRole?.trim().length > 2, 10, "Add target role");

  // SECTIONS

  resume.sections.forEach((section) => {
    if (!section.enabled) return;

    const content = section.content?.trim();

    switch (section.id) {
      case "summary":
        if (content?.length > 100) score += 15;
        else if (content?.length > 40) {
          score += 8;
          suggestions.push("Expand summary (100+ characters)");
        } else {
          suggestions.push("Add professional summary");
        }
        break;

      case "skills":
        if (content) {
          const skillCount = content.split(",").length;

          if (skillCount >= 8) score += 15;
          else if (skillCount >= 4) score += 10;
          else score += 5;

          if (content.length < 80) {
            suggestions.push("Add more detailed skills");
          }
        } else {
          suggestions.push("Add skills");
        }
        break;

      case "education":
      case "projects":
        if (content?.length > 80) score += 15;
        else if (content?.length > 30) {
          score += 8;
          suggestions.push(`Add more detail in ${section.id}`);
        } else {
          suggestions.push(`Add ${section.id}`);
        }
        break;

      case "certifications":
      case "languages":
        if (content?.length > 20) score += 5;
        else if (!content) {
          suggestions.push(`Add ${section.id}`);
        }
        break;

      default:
        if (content?.length > 30) score += 5;
    }
  });

  return {
    score: Math.min(score, 100),
    suggestions,
  };
}
