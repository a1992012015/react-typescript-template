const proxy = {
  "POST /api/oauth/token": function() {
    console.log("mocker");
    return {
      "access_token": "574af18f30d05dd9558294392b46ca22",
      "token_type": "example",
      "expires_in": 3600,
      "refresh_token": "tGzv3JOkF0XG5Qx2TlKWIA",
      "example_parameter": "example_value"
    };
  },
  "POST /api/list": function(name) {
    console.log(name.body);
    return {
      name: name,
    }
  }
};

module.exports = proxy;
