import Sidebar from "./Sidebar";
import CourseVideo from "./CourseVideo";
const MyCourse = () => {
    return (
        <div  className='flex md:flex-row flex-col h-[90vh]'>
       
       <div className="">
        <Sidebar />
        {/* <Temp /> */}
        
        </div>



        <div className="md:ml-10 mt-10 p-6">
            Content
            <CourseVideo />
        </div>
        </div>
    )
}
export default MyCourse;