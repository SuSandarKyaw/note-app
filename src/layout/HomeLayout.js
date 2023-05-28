import {AiOutlineHeart} from "react-icons/ai"
import './home.css'
export default function HomeLayout({children}){
    return <div className="home container-fluid " style={{minHeight:"100vh"}}>
        <h1 className="text-white text-center"><AiOutlineHeart/> Cruel Summer Lyris</h1>
       {children}
    </div>
}