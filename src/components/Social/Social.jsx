import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Social = () => {
    const social_links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn
                    <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/amirshoh-ibragimov-7a460723b/?originalSubdomain=ca",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub
                    <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/Ibragim0v",
            style: "rounded-tr-md",
        },
        {
            id: 3,
            child: (
                <>
                    Mail
                    <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:ibragimov.amirshoh@mail.ru",
            style: "rounded-tr-md",
        },
        {
            id: 4,
            child: (
                <>
                    Resume
                    <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "./resume.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {social_links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300"
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            target="__blank"
                            download={download}
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
