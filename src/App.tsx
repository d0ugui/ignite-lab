import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
        bio
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <div className="App">
      <h1 className="text-5xl font-bold text-violet-500">Hello</h1>
      <ul>
        {data?.lessons.map((lesson) => {
          return <li>{lesson.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
