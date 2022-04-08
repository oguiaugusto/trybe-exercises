const axios = require('axios');

const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';
const headers = { Authorization: API_TOKEN, 'Content-Type': 'application/json' };

const methodGet = () => {
  axios.get('https://postman-echo.com/get?param1=teste', { headers })
    .then((r) => console.log(r.data))
    .catch((errOrRes) => {
      if (errOrRes.status) return console.error(`Request failed with status ${errOrRes.status}`);
      console.error(errOrRes);
    });
};

// methodGet();

const body = {
  name: 'Tryber',
  email: 'trybe@betrybe.com',
  password: '12345',
};

const methodPost = () => {
  axios({
    method: 'POST',
    url: 'https://postman-echo.com/post?param1=teste',
    data: body
  })
    .then((r) => console.log(r.data))
    .catch((errOrRes) => {
      if (errOrRes.status) return console.error(`Request failed with status ${errOrRes.status}`);
      console.error(errOrRes);
    });
};

methodPost();
