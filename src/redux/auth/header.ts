export default function authHeader() {
  const token = JSON.parse(localStorage.getItem("token") || "");

  if (token) {
    // For Spring Boot back-end
    // return { Authorization: "Bearer " + user.accessToken };

    // for Node.js Express back-end
    return { "x-auth-token": token };
  } else {
    return {};
  }
}
