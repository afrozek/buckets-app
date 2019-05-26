import bucketsApi from "../api/bucketsApi.js";

import * as log from "loglevel";

export const setVersion = version => {
  log.debug("set version action called:", version);
  return {
    type: "VERSION_SELECTED",
    payload: version
  };
};

export const setAuthStatus = status => {
  log.debug("set status action called:", status);
  return {
    type: "SET_AUTH_STATUS",
    payload: status
  };
};

export const fetchGuides = () => async dispatch => {
  try {
    const response = await bucketsApi.get("/posts/guides");
    log.debug("fetched all guides response.data", response.data);
    log.debug("fetched all guides response.data", response.data);

    dispatch({
      type: "FETCH_GUIDES",
      payload: response.data.items
    });
  } catch (err) {
    log.debug("fetched all guides err", err);
    return Promise.reject(err);
  }

  // log.debug("fetched all guides response.data", response.data);
};

export const fetchUsers = () => async dispatch => {
  const response = await bucketsApi.get("/users");
  log.debug("fetched all users response.data", response.data);
  dispatch({
    type: "FETCH_USERS",
    payload: response.data
  });
};

export const fetchAllDataV2 = () => async (dispatch, getState) => {
  Promise.all([dispatch(fetchUsers()), dispatch(fetchGuides())]).then(
    () => {
      log.debug("I did everything!");
    },
    err => {
      log.error("error fetching all data err: ", err);
      log.error("error fetching all data err.data: ", err.data);
      log.error(
        "error fetching all data err.data: ",
        err.data
      );
    }
  );
}; // fetchAllDataV2

export const fetchSidebar = () => {
  log.debug("Called fetchSidebar from actions.js");
  return{
    type: "FETCH_SIDEBAR"
  }
}



