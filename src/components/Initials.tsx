interface InitialsProps {
  text: string;
  color: string;
  backgroundColor: string;
}

export default function Initials({
  text,
  color,
  backgroundColor,
}: InitialsProps) {
  return (
    <div className="initials" style={{ color, backgroundColor }}>
      {text}
    </div>
  );
}
