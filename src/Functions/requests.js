import axios from "axios";
import { BASEURL } from "./apiUrl";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `${localStorage.getItem("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default async function sendBets(bet, stake, gameType) {
  var bettings = [];
  bet.forEach((bet) => {
    bettings.push({
      number: bet,
      stake: stake,
      GameTypeId: localStorage.getItem(gameType),
    });
  });
  try {
    const response = await axios.post(BASEURL + "bet/placebet/", {
      bets: bettings,
    });

    if (response) {
      console.log("IN BETS", response.data);
      return [true, response.data];
    } else {
      return false;
    }
  } catch (e) {
    return e;
  }
}

export function getGameTypes() {
  try {
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("token")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios.get(BASEURL + "bet/gameTypes/").then((response) => {
      if (response.data) {
        console.log("GAME TYPES", response.data.gameTypes);
        localStorage.setItem("spin", response.data.gameTypes[0].id);
      } else {
        alert.show("Not able to cancel the ticket ");
      }
    });
  } catch (e) {}
}

export function getCashierBalance() {
  try {
    axios.interceptors.request.use(
      (config) => {
        config.headers.authorization = `${localStorage.getItem("token")}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    axios.get(BASEURL + "cashier/getBalance/").then((response) => {
      if (response.data) {
        console.log("BALANCE", response.data);
        localStorage.setItem("balance", response.data.balance);
      } else {
        console.log("Error getting balance");
      }
    });
  } catch (e) {}
}
