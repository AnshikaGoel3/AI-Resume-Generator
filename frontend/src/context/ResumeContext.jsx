import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

const defaultSections = [
  { id: "summary", title: "Summary", content: "", enabled: true },
  { id: "skills", title: "Skills", content: "", enabled: true },
  { id: "education", title: "Education", content: "", enabled: true },
  { id: "projects", title: "Projects", content: "", enabled: true },
  {
    id: "certifications",
    title: "Certifications",
    content: "",
    enabled: false,
  },
  { id: "languages", title: "Languages", content: "", enabled: false },
];

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState({
    fullName: "",
    email: "",
    targetRole: "",
    template: "modern",
    sections: defaultSections,
  });

  const updateBasic = (field, value) => {
    setResume((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateSection = (id, value) => {
    setResume((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === id ? { ...section, content: value } : section,
      ),
    }));
  };

  const toggleSection = (id) => {
    setResume((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === id ? { ...section, enabled: !section.enabled } : section,
      ),
    }));
  };

  const deleteSection = (id) => {
    setResume((prev) => ({
      ...prev,
      sections: prev.sections.filter((section) => section.id !== id),
    }));
  };

  const addSection = () => {
    const newId = `custom_${Date.now()}`;

    setResume((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          id: newId,
          title: "Custom Section",
          content: "",
          enabled: true,
        },
      ],
    }));
  };

  const setTemplate = (template) => {
    setResume((prev) => ({
      ...prev,
      template,
    }));
  };

  const updateSectionTitle = (id, newTitle) => {
    setResume((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === id ? { ...section, title: newTitle } : section,
      ),
    }));
  };

  return (
    <ResumeContext.Provider
      value={{
        resume,
        updateBasic,
        updateSection,
        toggleSection,
        deleteSection,
        addSection,
        setTemplate,
        updateSectionTitle,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
