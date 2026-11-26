import { useNavigate } from "react-router-dom";
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AccountRecoveryIcon,
  UserAdd01Icon,
} from "@hugeicons/core-free-icons";


export default function HeaderBeforeLogin() {
  const navigate = useNavigate();

  const navItem = [
    {
      name: "Login",
      slug: "/login",
      icon: AccountRecoveryIcon,
    },
    {
      name: "Sign-Up",
      slug: "/signup",
      icon: UserAdd01Icon,
    }
  ];

  return (
    <div className="w-full absolute top-0 left-0 z-50 ">
      <div className=" bg-gray-700/20 text-white w-full flex justify-end px-3 py-3">

      <ul className="flex justify-end">
      {navItem.map((item) => (
      <li key={item.name}>
       <button
        onClick={() => navigate(item.slug)}
        className="flex px-5 mr-5 py-1 border border-white/30 rounded-xl hover:bg-yellow-700 duration-400"
        >
        <HugeiconsIcon
          icon={item.icon}
          size={20}
          color="currentColor"
          strokeWidth={1.5}
        />
        <span className='px-2'>{item.name}</span>
      </button>
      </li>
    ))}
  </ul>
 </div>


</div>
  );
}