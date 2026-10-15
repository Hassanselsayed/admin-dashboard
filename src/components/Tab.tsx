import type { IconType } from "react-icons";

interface TabProps {
  icon: IconType;
  text: string;
  className?: string;
}

export default function Tab({ className, icon: Icon, text }: TabProps) {
  return (
    <div className={`tab ${className}`}>
      <Icon />
      <span className="tab-text">{text}</span>
    </div>
  );
}
