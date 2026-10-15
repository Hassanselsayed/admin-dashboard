import LeftPane from "./sections/LeftPane";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SettingsPage from "./pages/SettingsPage";
import UsersPage from "./pages/UsersPage";

const activeTab = "users" as "home" | "users" | "projects" | "settings";

export default function App() {
  return (
    <div className="app">
      <LeftPane activeTab={activeTab} />

      {activeTab === "home" && <HomePage />}

      {activeTab === "users" && <UsersPage />}

      {activeTab === "projects" && <ProjectsPage />}

      {activeTab === "settings" && <SettingsPage />}
    </div>
  );
}
