//styled component imports
import Wrapper from "../assets/Wrappers/Sidebar"
//react imports
import { useNavigate } from "react-router-dom";

//antd imports
import { Menu } from 'antd'

//react-icon imports
import { RiDashboardLine, RiGalleryLine, RiQuestionAnswerLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { LuMenuSquare } from "react-icons/lu";
import { MdOutlineRamenDining, MdOutlineDiscount } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { PiSparkle } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
import { useDashboardContext } from "../pages/DashboardLayout";


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Dashboard', '/dashboard', <RiDashboardLine />),
    getItem('Banners', 'banners', <RiGalleryLine />),
    getItem('Blogs', 'blogs', <CgWebsite />),
    getItem('Offers', 'offers', <MdOutlineDiscount />),
    getItem('Dining Features', 'dining-features', <MdOutlineRamenDining />),
    getItem('Cuisines', 'cuisines', <LuMenuSquare />),
    getItem('Signature Foods', 'signature-foods', <IoFastFoodOutline />),
    getItem('Other Features', 'other-features', <PiSparkle />),
    getItem('Gallery', 'gallery', <GrGallery />),
    getItem('Enquiry', 'enquiry', <RiQuestionAnswerLine />),
    getItem("Logout", 'logout', <BiLogOut />)
]


const Sidebar = () => {
    const navigate = useNavigate();
    const { collapsed } = useDashboardContext();


    const handleClick = ({ key }) => {
        if (key === 'logout') {
            console.log(key);
        } else {
            navigate(key);
        }
    }



    return (
        <Wrapper>

            <Menu
                style={{ width: collapsed ? '' : '200px' }}
                onClick={handleClick}
                // defaultSelectedKeys={["/dashboard"]}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
            ></Menu>

        </Wrapper>
    )
}
export default Sidebar