export const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status != 200) {
          reject("Error fetching user");
        }
        return response.json();
      })
      .then((jsonResp) => {
        resolve(jsonResp);
      });
  });
};
