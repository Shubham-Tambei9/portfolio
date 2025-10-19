import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaFigma, FaTwitter } from "react-icons/fa";

const socials = [
  {icon: <FaGithub />, path: 'https://github.com/Shubham-Tambei9'},
  {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/shubham-tambe-i9'},
  {icon: <FaFigma />, path: 'https://www.figma.com/@Shubham_Techi9'},
  {icon: <FaTwitter />, path: 'https://x.com/Shubham_Techi9?t=C-WkhbeTS1HeSiog8Okyjw&s=09'},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
  <div className={containerStyles}>
    {socials.map((item, index)=>{
      return (
      <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}</Link>
      );
    })}
  </div>
  );
};

export default Social;
