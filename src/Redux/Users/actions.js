export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGN_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      role: userState.role,
      username: userState.username,
      icon: userState.icon,
    },
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      role: "",
      username: "",
      icon: "",
      usertask: [],
    },
  };
};

export const FETCH_USER_TASK = "FETCH_USER_TASK";
export const fetchUserTaskAction = (task) => {
  return {
    type: "FETCH_USER_TASK",
    payload: task,
  };
};
