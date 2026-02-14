import Joyride from "react-joyride";
import { useState } from "react";
import { Target } from "lucide-react";

export const DashboardTour = () => {
  const [run] = useState(true);

  const steps = [

    {
      target: ".sechedule-meeting-btn",
      content: "Schedule meetings with investors here.",
    },
    {
      target: ".find-investors-btn",
      content: "Browse and connect with investors.",
    },
    {
      target: ".wallet-card",
      content: "This shows your wallet balance.",
    },
    {
      target: ".search-input",
      content: "Use this to search for startups, industries, or keywords.",
    },
    {
      target: ".filters-section",
      content: "Apply filters to narrow down your search results.",
    },
    { target: ".summary-cards",
      content: "View key metrics about your startup here.",
    },
    {
      target: ".entrepreneur-grid",
      content: "Browse featured startups in this section.",
    },
    { target: ".requests-section",
      content: "Manage your pending requests here.",
    },
    { target: ".recommendations-section", 
      content: "See personalized recommendations here." 
    },
    {
      target: ".documents-section",
      content: "Upload and sign contracts here.",
    },
  ];

  return <Joyride steps={steps} run={run} continuous showSkipButton />;
};
