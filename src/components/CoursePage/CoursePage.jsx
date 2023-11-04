import CourseNav from "./CourseNav";
import EnCourse from './EnCourse';
const CoursePage = () => {
    return (
        <div>
            <CourseNav />
            <div className="flex flex-col py-4 px-10">
              <div className="text-4xl md:text-5xl font-semibold mt-8">
                Courses you are <span className="uicolor">taking</span>
              </div>
              <div className="my-8 flex flex-wrap">
               <EnCourse />
               <EnCourse />
              </div>
              </div>
        </div>
    )
}
export default CoursePage;