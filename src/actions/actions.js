export const setVersion = (version) => {
  console.log("set version action called:", version);
  return {
    type: "VERSION_SELECTED",
    payload: version
  }
}