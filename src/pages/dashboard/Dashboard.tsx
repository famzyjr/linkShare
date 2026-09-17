
import CustomizeLink from "../../components/layout/CustomizeLink"
import LinkPreview from "../../components/layout/LinkPreview"
import Navbar from "../../components/layout/Navbar"
const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex gap-4 p-6 "> 
        <LinkPreview />
        <CustomizeLink />
        </div>
       
    </div>
  )
}

export default Dashboard