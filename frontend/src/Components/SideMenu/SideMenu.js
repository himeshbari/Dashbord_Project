import { AppstoreOutlined, ShopOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate()
    return (
        <div className="SideMenu">
           
            <Menu
              onClick={(item)=>{
                navigate(item.key);
                

              }}
                items={[
                    {
                        label: "Dashbord",
                        icon:<AppstoreOutlined style={{fontSize:25, color:"red"}}/>,
                        key: "/",
                    },
                    {
                        label: "Country",
                        icon:<ShopOutlined style={{fontSize:25, color:"red"}}/>,
                        key: "Country",
                    },

                ]}
            >


            </Menu>

        </div>
    )
}

export default SideMenu