/** @format */

import axios from "axios";

export const TeacherData = (key, id) => {
  return axios.get(`http://localhost:3001/${key}`, {
    params: {
      id: id,
    },
  });
};
