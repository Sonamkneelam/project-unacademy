/** @format */

import axios from "axios";

export const TeacherData = async (key, id) => {
  return await axios.get(`https://my-cool-projectdb.herokuapp.com/${key}`, {
    params: {
      id: id,
    },
  });
};
