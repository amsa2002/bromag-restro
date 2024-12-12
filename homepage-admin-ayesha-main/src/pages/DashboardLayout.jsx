//react imports
import { Outlet } from "react-router-dom"
import { createContext, useContext, useState } from "react";
//component imports
import { Header, Sidebar } from "../components"


const DashboardContext = createContext()


const DashboardLayout = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return (
        <DashboardContext.Provider value={{ collapsed, toggleCollapsed }}>
            <div className="dashboard-container">
                <Header />
                <Sidebar />
                <div className="dashboard-page">
                    <Outlet />
                </div>
            </div>
        </DashboardContext.Provider>
    )
}

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout