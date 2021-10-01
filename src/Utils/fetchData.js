/** @format */

import axios from "axios";

export const TeacherData = (id) => {
  return axios.get("http://localhost:3001/class/", {
    params: {
      id: id,
    },
  });
};
