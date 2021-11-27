import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { UserAddIcon } from "@heroicons/react/solid";
import { Button, IconButton } from "../../buttons";

const NewUsers = () => {
  return (
    <div className="flex flex-col p-4 lg:p-6 gap-4">
      <div className="flex flex-row justify-between items-center">
        <p className="pb-2 text-lg font-semibold">New Users</p>
        <IconButton
          Icon={DotsHorizontalIcon}
          size="md"
          type="secondary"
          title="See in details"
        />
      </div>
      <div className="flex flex-col gap-4">
        <UserItem
          imgSrc="https://randomuser.me/api/portraits/men/1.jpg"
          name="User 1"
          profession="UI/UX Designer"
        />
        <UserItem
          imgSrc="https://randomuser.me/api/portraits/men/2.jpg"
          name="User 2"
          profession="UI/UX Designer"
        />
        <UserItem
          imgSrc="https://randomuser.me/api/portraits/women/3.jpg"
          name="User 3"
          profession="UI/UX Designer"
        />
        <UserItem
          imgSrc="https://randomuser.me/api/portraits/men/4.jpg"
          name="User 4"
          profession="UI/UX Designer"
        />
        <UserItem
          imgSrc="https://randomuser.me/api/portraits/women/5.jpg"
          name="User 5"
          profession="UI/UX Designer"
        />
        <UserItem
          imgSrc="https://randomuser.me/api/portraits/women/5.jpg"
          name="User 6"
          profession="UI/UX Designer"
        />
      </div>
    </div>
  );
};

export default NewUsers;

const UserItem = ({
  imgSrc,
  name,
  profession,
}: {
  imgSrc: string;
  name: string;
  profession: string;
}) => (
  <div className="flex flex-row gap-2">
    <img
      src={imgSrc}
      alt={`${name} avatar`}
      className="w-10 h-10 rounded-full"
    />
    <div className="flex-1 flex flex-col overflow-hidden justify-center items-start">
      <p className="font-medium truncate">{name}</p>
      <p className="opacity-80 text-sm truncate">{profession}</p>
    </div>
    <Button
      isGhost
      type="secondary"
      name="Add"
      Icon={UserAddIcon}
      iconPos="left"
      size="sm"
    />
  </div>
);
