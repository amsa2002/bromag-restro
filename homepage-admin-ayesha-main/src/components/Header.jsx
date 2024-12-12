//styled-component imports
import Wrapper from "../assets/Wrappers/Header"
import logo from '../assets/images/logo.svg'

//antd imports
import { Button } from 'antd';
//icon imports
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useDashboardContext } from "../pages/DashboardLayout";


const Header = () => {

    const { toggleCollapsed, collapsed } = useDashboardContext();

    return (
        <Wrapper>
            <div className="toggle-div">
                <Button
                    onClick={toggleCollapsed}
                    style={{
                        marginBottom: 16,
                    }}
                >
                    {collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
                </Button>
            </div>


            <img src={logo} alt="" />
            <h1>restaurant name</h1>
        </Wrapper>
    )
}
export default Header