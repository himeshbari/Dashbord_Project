import {  } from "antd"

import {YoutubeOutlined,MailOutlined} from "@ant-design/icons"
function AppHeader(){
    return<div className="AppHeader">
        <h1> Visualization Dashboard</h1>
        <div style={{}}>
        <YoutubeOutlined style={{marginRight:15, fontSize:20, color:"red"}}/>
        <MailOutlined style={{marginRight:15, fontSize:20, color:"green"}}/>
        </div>
    </div>
}

export default AppHeader