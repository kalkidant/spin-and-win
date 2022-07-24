import axios from "axios";

export default function getTerminal(terminal) {
  var response = axios
    .get("https://virtual-bet-test.herokuapp.com/api/terminal/" + terminal)
    .then((response) => console.log(response.data));
  return response;
}
export function authenticate(username, password, terminal) {
  var credential = {
    username: username,
    password: password,
    terminal: terminal,
  };
  try {
    var response = axios
      .post("http://virtual-bets.herokuapp.com/api/cashier/login/", credential)
      .then((response) => console.log(response.status));
    return response;
  } catch (e) {
    return "error";
  }
}

export async function validateTerminal() {
  var terminal = localStorage.getItem("terminal");
  try {
    await axios
      .get(
        "http://virtual-bets.herokuapp.com/api/terminal/" +
          terminal.replace("+", "%2B").replace("/", "%2F")
      )
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          if (response.data.get.data.active) {
            return "active";
          }
        } else {
          return "Terminal not active";
        }
      });
  } catch (e) {
    return "error";
  }
}
