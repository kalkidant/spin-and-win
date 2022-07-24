import { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import "./Css/popup.css";
import axios from "axios";
import { BASEURL } from "../Functions/apiUrl";
export default function PayTable(props) {
  const [odds, setOdds] = useState([]);

  const payTable = () => {
    try {
      axios.get(BASEURL + "bet/odds").then((response) => {
        // setOdds(response.data.odds);
        var temp = [];
        temp.push(
          response.data.odds.number,
          response.data.odds.green,
          response.data.odds.red,
          response.data.odds.black,
          response.data.odds.dozens,
          response.data.odds.low,
          response.data.odds.high,
          response.data.odds.odd,
          response.data.odds.even
        );
        setOdds(temp);
      });
    } catch (e) {
      console.log("Error loading the odds");
    }
  };

  useEffect(() => {
    payTable();
  }, []);
  return props.payTable ? (
    <div className='popup p-3'>
      <div className='popupInner px-2'>
        <div className={"row p-1 bg-primary"}>
          <div className='col-lg-11 '>
            <div className='row m-2 text-white'>
              <div className='col-lg-12'>Spin 2 Win Royale</div>
              <div className='col-lg-12'>
                <h5>
                  <b>PAYTABLE</b>{" "}
                </h5>
              </div>
            </div>
          </div>
          <div className='col-lg-1 p-3'>
            <AiIcons.AiOutlineClose
              color='white'
              size={25}
              onClick={() => props.setPayTable(false)}
            />
          </div>
        </div>

        <div className='row  p-3'>
          <div className='col-lg-4 smallMargin'>
            <div className='row '>
              <div className='title d-inline  '>Menu</div>
            </div>

            <div className='row innerRow  mt-3'>
              <div className='col-lg-10'>Exact Number</div>
              <div className='col-lg-2'>{odds[0]}</div>
            </div>
            <div className='row innerRow'>
              <div className='col-lg-10'>Red/ Black</div>
              <div className='col-lg-2'>{odds[2]}</div>
            </div>
            <div className='row innerRow'>
              <div className='col-lg-10'>Green</div>
              <div className='col-lg-2'>{odds[1]}</div>
            </div>

            <div className='row innerRow'>
              <div className='col-lg-10'>Dozens</div>
              <div className='col-lg-2'>{odds[4]}</div>
            </div>
            <div className='row innerRow'>
              <div className='col-lg-10'>Even / Odd</div>
              <div className='col-lg-2'>{odds[7]}</div>
            </div>
            <div className='row innerRow'>
              <div className='col-lg-10'>Low / High</div>
              <div className='col-lg-2'>{odds[5]}</div>
            </div>
          </div>
          <div className='col-lg-4 '>
            <div className='row '>
              <div className='title d-inline'>Finals/Sectors</div>
            </div>
            <div className='row innerRow mt-3'>
              <div className='col-lg-10'>Sectors</div>
              <div className='col-lg-2'>6</div>
            </div>
            <div className='row innerRow'>
              <div className='col-lg-10'>Finals[0] </div>
              <div className='col-lg-2'>9</div>
            </div>
            <div className='row innerRow'>
              <div className='col-lg-10'>Finals[1 - 6] </div>
              <div className='col-lg-2'>9</div>
            </div>
          </div>
          <div className='col-lg-4 '>
            <div className='row'>
              <div className='title d-inine'>Extra Bets</div>
            </div>
            <div className='row innerRow mt-3'>
              <div className='col-lg-10'>Mirror</div>
              <div className='col-lg-2'>18</div>
            </div>
            <div className='row innerRow'>
              <div className='col-lg-10'>Twins</div>
              <div className='col-lg-2'>9</div>
            </div>
            <div className='row innerRow'>
              <div className='col-lg-10'>Low / High & Colour </div>
              <div className='col-lg-2'>9</div>
            </div>
          </div>
        </div>

        <div className='row closeBtn mt-4'>
          <button
            type='button'
            className='btn bg-primary closeBtn'
            onClick={() => props.setPayTable(false)}
          >
            CLOSE{" "}
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
