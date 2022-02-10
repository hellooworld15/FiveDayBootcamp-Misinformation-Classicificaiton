export const getWebsiteData = async () => {
  //This variable is just for testing - would pass key words one at a time to this function then check if exists in database
  return fetch(`http://127.0.0.1:5000/website`, {
    method: "GET",
  }).then(async (res) => res.json());
};
