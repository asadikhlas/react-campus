import axios from "axios";
import { loginError, loginSuccess } from "../Actions/login-actions";

export const asyncLogin = newData => async dispatch => {
  try {
    const { data } = await axios.get("http://localhost:3002/api/student");

    console.log(newData);
    console.log("data", data.userData);


    if(!data.userData.length > 0) { 
      dispatch(loginError('Cannot login, Please try again'))
    } else { 

      const loginArr = data.userData.filter(
        item =>
          item.email === newData.email &&
          item.password === newData.password &&
          item.role === newData.role
      );
  
      if(loginArr.length > 0) { 
        dispatch(loginSuccess(newData))
      } else { 
        dispatch(loginError('Cannot login, Please try again'))
      }
  

    }

   

  } catch (err) {
    console.log(err);
  }
};

// export const asyncLogin = data => {
//   console.log(data);
//   return dispatch => {
//     dispatch(sign_in_success(false));
//     dispatch(sign_in_error(null));
//     axios
//       .get("http://localhost:3002/api/student")
//       .then(res => {
//         res.data.userData.map((item, _id) => {
//           if (
//             data.email === item.email &&
//             data.password === item.password &&
//             data.role === item.role
//           ) {
//             dispatch(sign_in_success(true));
//           }
//         });
//       })
//       .catch(err => {
//         dispatch(sign_in_error(err));
//       });
//   };
// };

// export const asyncLogin = (data) => {
//     return dispatch => {
//         dispatch(sign_in_success(false));
//         dispatch(sign_in_error(null))
//         axios.get("http://localhost:3002/api/student").then(res => {
//             dispatch(sign_in_success(true))
//           }).catch(err => {
//               dispatch(sign_in_error(err))
//           })
//     }
// }
