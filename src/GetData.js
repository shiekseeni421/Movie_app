
import { Component } from "react";

import './GetData.css'

class  GetData1 extends Component{
    render(){
        let  {item}=this.props
        let Url=item.Poster
        return(<div className="Card">
            <img className="img" alt="title_img" src={Url}/>
            <div className="title_continer">   <p className="title">{item.Title}</p></div>
        </div>)

    }
}

export default GetData1