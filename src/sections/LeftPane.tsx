import { FaGear } from "react-icons/fa6";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";

import Tab from "../components/Tab";
import Initials from "../components/Initials";

interface LeftPaneProps {
  activeTab: string;
}

const TABS_ARRAY = [
  { id: 1, icon: FaHome, text: "Home" },
  { id: 2, icon: FaUser, text: "Users" },
  { id: 3, icon: FaProjectDiagram, text: "Projects" },
  { id: 4, icon: FaGear, text: "Settings" },
];

export default function LeftPane({ activeTab }: LeftPaneProps) {
  return (
    <div className="left-pane">
      <div className="top">
        <h2>Whatever Inc</h2>

        <div className="tabs">
          {TABS_ARRAY.map((tab) => (
            <Tab
              className={`${activeTab === tab.text.toLowerCase() ? "active" : ""}`}
              key={tab.id}
              icon={tab.icon}
              text={tab.text}
            />
          ))}
        </div>
      </div>

      <div className="bottom">
        <Initials
          text="JD"
          color="var(--black)"
          backgroundColor="var(--light-blue)"
        />
        <div className="bottom-right">
          <h3>Jane Doe</h3>
          <p>Admin</p>
        </div>
      </div>
    </div>
  );
}
