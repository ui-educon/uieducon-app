import HomePage from "@/components/HomePage/HomePage";
import { handleGet } from "@/core/api-calls/Axios";

type Props = {
  allCoursesList: any[];
};

export default function Home({ allCoursesList }: Props) {
  return (
    <main>
      <HomePage allCoursesList={allCoursesList} />
    </main>
  );
}

export async function getStaticProps() {
  const allCoursesRes = await handleGet("/course/get-all-courses");
  const allCoursesList = allCoursesRes.data;

  return {
    props: {
      allCoursesList,
    },
    revalidate: 3600,
  };
}
