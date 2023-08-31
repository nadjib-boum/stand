import Image from "next/image";

const Avatar: React.FC = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/avatar.png"
        alt="avatar"
        className="rounded-full overflow-hidden shadow"
        height={42}
        width={42}
      />
    </div>
  );
};

export default Avatar;
