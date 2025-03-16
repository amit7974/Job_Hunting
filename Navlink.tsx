import { useLocation } from "react-router-dom";
import { Link } from "tabler-icons-react";

const NavLinks = () => {
    const links = [
        { name: "Find Jobs", href: "find-jobs" },
        { name: "Find Talent", href: "find-talent" },
        { name: "Upload Job", href: "upload-job" },
        { name: "About us", href: "about" },
    ];
    const location = useLocation();
    return <div className="flex gap-5">
        {
links.map((link, index) =><Link key={index} to={link.href}>{link.name}</Link>)


        }

        </div>

    }
export default NavLinks;