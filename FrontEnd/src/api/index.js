// Check keyword exists in database
export const checkKeyword = async () => {
  //This variable is just for testing - would pass key words one at a time to this function then check if exists in database
  const keyword = "checking";
  if (keyword) {
    return fetch(`http://127.0.0.1:3001/getKeywords`, {
      method: "GET",
    }).then(async (res) => res.json());
  }
};
