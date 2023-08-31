import Button from "@/components/primitives/Button";
import useAuth from "@/hooks/useCheckAuth";
import { PlusIcon } from "@/components/icons";

const CreatePostButton: React.FC = () => {
  const { checkAuth } = useAuth();

  const handleClick = () => {
    const isAuth = checkAuth();
    if (!isAuth) return;
    console.log("CreatePostButton");
  };

  return (
    <div className="flex justify-center">
      <Button full className="w-32" onClick={handleClick}>
        <PlusIcon className="font-bold" />
        Create
      </Button>
    </div>
  );
};

export default CreatePostButton;
