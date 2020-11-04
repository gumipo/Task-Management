import { db, FirebaseTimestamp, Firebasetimestamp } from "../../Firebase";
import { push } from "connected-react-router";

const taskRef = db.collection("tasks");

export const saveTask = (title, descriptions) => {
  return async (dispatch, getState) => {
    const user = getState().users;
    const uid = user.uid;
    const icon = user.icon;
    const username = user.username;
    const timestamp = FirebaseTimestamp.now().toDate();

    const taskData = {
      uid: uid,
      uusername: username,
      icon: icon,
      title: title,
      descriptions: descriptions,
      created_at: timestamp,
      updated_at: timestamp,
    };
    taskRef.doc().set(taskData);
    dispatch(push("/now/task"));
  };
};
