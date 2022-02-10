// Check keyword exists in database
export const checkKeyword = async () => {
  //This variable is just for testing - would pass key words one at a time to this function then check if exists in database
  const keyword = "checking";
  if (keyword) {
    return fetch(`http://127.0.0.1:3002/getKeywords`, {
      method: "GET",
    }).then(async (res) => res.json());
  }
};

export const getWebsiteData = async (website) => {
  //This variable is just for testing - would pass key words one at a time to this function then check if exists in database
  await fetch(`http://127.0.0.1:3002/websiteData/${website}`, {
    method: "GET",
  }).then(async (res) => await res.json());
};

// export const addWebsiteData = async () => {
//   const dummyData = {
//     description: "Website has another source",
//     pass: true,
//     website: "testWebsite.com",
//   };
//   return fetch(`http://127.0.0.1:3001/addWebsite`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(dummyData),
//   }).then(async (res) => await res.json());
// };
