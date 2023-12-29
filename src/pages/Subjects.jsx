import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import NeonCard from "../components/NeonCard";
import NeonNewCard from "../components/NeonNewCard";

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
    <>
      {subjects.map((subject) => (
        <NeonCard key={subject.id} subject={subject} />
      ))}
      <NeonNewCard user_id={user_id} />
    </>
  );
};

export default Subjects;
