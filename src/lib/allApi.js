//here we create all the api call functions 
//same like i can do it in the component also but by this we can make the code and the api call clean and reusable.


// client/lib/api.js

import axios from './axiosInstance';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Fetch all project's of a User..
export const getMyProjects = async () => {
  try {
    const { data } = await axios.get('/project/getAll', {
      headers: getAuthHeader(),
    }
);
    return data;
  } catch (error) {
    console.error('Error fetching Projects:', error);
    throw error;
  }
};

// Book seats
export const createProject = async (name) => {
  try {
    const { data } = await axios.post('/project/createProject', { name }, {
      headers: getAuthHeader(),
    });
    return data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};

// Get files of a poticularProject
export const getFilesOfProject = async (projectId) => {
  try {
    const { data } = await axios.get(`file/project/${projectId}`, {
      headers: getAuthHeader(),
    });
    return data;
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
};

// CreateFile
export const createFile = async (name,transcript,projectId) => {
  try {
    const { data } = await axios.post(`/file/createFile/${projectId}`, {name,transcript}, {
      headers: getAuthHeader(),
    });
    return data;
  } catch (error) {
    console.error('Error creating file:', error);
    throw error;
  }
};

// // bOOK  seat's by recommendations
// export const getRecommendedSeats = async (count) => {
//     console.log(count)
//   try {
//     const { data } = await axios.post('/seat/bookSeatByRecommendation', { count },{
//         headers: getAuthHeader(),
//       });
//     return data;
//   } catch (error) {
//     console.error('Error getting recommended seats:', error);
//     throw error;
//   }
// };

// // Reset all seats (admin function)
// export const resetAllSeats = async () => {
//   try {
//     const { data } = await axios.post('/seat/reset', {}, {
//       headers: getAuthHeader(),
//     });
//     return data;
//   } catch (error) {
//     console.error('Error resetting seats:', error);
//     throw error;
//   }
// };
