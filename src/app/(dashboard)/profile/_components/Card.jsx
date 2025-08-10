import {
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  comments: ChatBubbleBottomCenterTextIcon,
  users: UserGroupIcon,
  posts: DocumentIcon,
};

export default function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-1 h-24 items-center rounded-xl bg-secondary-0 p-2 shadow-sm">
      <div className="bg-secondary-100 rounded-full h-14 w-14 flex justify-center items-center justify-self-center">
        {Icon ? <Icon className="h-6 w-6" /> : null}
      </div>
      <div className="col-span-2 text-left">
        <p className={`truncate rounded-xl  text-3xl font-bold`}>{value}</p>
        <h3 className="text-base font-medium text-secondary-500">{title}</h3>
      </div>
    </div>
  );
}
