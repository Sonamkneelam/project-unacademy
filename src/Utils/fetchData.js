/** @format */

import axios from "axios";

export const TeacherData = async (key, id) => {
  return await axios.get(`http://localhost:3001/${key}`, {
    params: {
      id: id,
    },
  });
};
