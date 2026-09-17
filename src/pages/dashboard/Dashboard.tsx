
import CustomizeLink from "../../components/layout/CustomizeLink"
import LinkPreview from "../../components/layout/LinkPreview"

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-4 p-6 "> 
        <LinkPreview />
        <CustomizeLink />
        </div>
     
    </div>
  )
}

export default Dashboard