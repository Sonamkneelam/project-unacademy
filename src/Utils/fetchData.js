/** @format */

import axios from "axios";

export const TeacherData = (id) => {
  return axios.get("http://localhost:3001/", {
    params: {
      id: id,
    },
  });
};
