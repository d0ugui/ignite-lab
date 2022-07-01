import { useContext } from "react";
import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";
import { SidebarContext } from "../context/SidebarContext";


export function Sidebar() {
  const { data } = useGetLessonsQuery();
  const { isSidebarVisible } = useContext(SidebarContext);

  return (
    <aside className={`${isSidebarVisible ? 'block w-full' : 'hidden'} lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600 lg:block`}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de Aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lesson 
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  );
}
