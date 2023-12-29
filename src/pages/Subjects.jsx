import React from "react";
import { useEffect, useState } from "react";
import SubjectCard from "../components/SubjectCard";
import { supabase } from "../supabase/client";

const Subjects = ({ user_id }) => {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const { data, error } = await supabase
          .from("Subject")
          .select("*")
          .eq("user_id", user_id);

        if (error) {
          console.error("Error fetching subjects:", error.message);
        } else {
          setSubjects(data);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching subjects:", error.message);
      }
    };

    fetchSubjects();
  }, [supabase]);

  return (
    <div>
      <h2>Subject List</h2>
      <ul>
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </ul>
    </div>
  );
};

export default Subjects;
