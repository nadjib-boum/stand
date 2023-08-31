import Link from "next/link";

type T = typeof Link;

type SidenavItemProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
};

const SidenavItem: React.FC<SidenavItemProps> = ({
  href,
  label,
  icon,
  onClick,
}) => {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick || (() => void 0)}
        className="flex gap-2 items-center py-2 px-4 hover:bg-gray-100 rounded-lg"
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default SidenavItem;
