import type { IconType } from "react-icons";

interface UserBoardProps {
  icon: IconType;
  iconColor: string;
  iconBgColor: string;
  text: string;
  number: number;
}

export default function UserBoard({
  icon: Icon,
  iconColor,
  iconBgColor,
  text,
  number,
}: UserBoardProps) {
  return (
    <div className="user-board">
      <Icon
        className="icon"
        style={{ color: iconColor, backgroundColor: iconBgColor }}
      />
      <div className="right">
        <p className="text">{text}</p>
        <h3 className="number">{number}</h3>
      </div>
    </div>
  );
}
