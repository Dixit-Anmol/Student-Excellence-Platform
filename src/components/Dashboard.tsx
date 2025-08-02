import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import HomePage from "@/pages/dashboard/HomePage";
import FeedbackPage from "@/pages/dashboard/FeedbackPage";
import EventsPage from "@/pages/dashboard/EventsPage";
import ResourcesPage from "@/pages/dashboard/ResourcesPage";
import GuidancePage from "@/pages/dashboard/GuidancePage";
import ClubsPage from "@/pages/dashboard/ClubsPage";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "feedback":
        return <FeedbackPage />;
      case "events":
        return <EventsPage />;
      case "resources":
        return <ResourcesPage />;
      case "guidance":
        return <GuidancePage />;
      case "clubs":
        return <ClubsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <DashboardLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderContent()}
    </DashboardLayout>
  );
};

export default Dashboard;