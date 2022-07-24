import React from "react";
import "../Components/Css/homeCss.css";
export const Report = React.forwardRef((props, ref) => {
  function time() {
    var currentdate = new Date();
    var datetime =
      currentdate.getDay() +
      "/" +
      currentdate.getMonth() +
      "/" +
      currentdate.getFullYear() +
      "  " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes();

    return datetime;
  }
  return (
    <div ref={ref} className='p-1'>
      <div className='row mt-1'>
        <div className='col-8 verySmallText'>Report ID</div>
        <div className='col-4 verySmallText'>
          <small>4324CDGA</small>
        </div>{" "}
        <div className='col-8 verySmallText'>Report ID</div>
        <div className='col-4 verySmallText'>
          <small>4324CDGA</small>
        </div>{" "}
        <div className='col-8 verySmallText'>Report ID</div>
        <div className='col-4 verySmallText'>
          <small>4324CDGA</small>
        </div>{" "}
        <div className='col-8 verySmallText'>Report ID</div>
        <div className='col-4 verySmallText'>
          <small>4324CDGA</small>
        </div>{" "}
        <div className='col-8 verySmallText'>Report ID</div>
        <div className='col-4 verySmallText'>
          <small>4324CDGA</small>
        </div>
      </div>
      <div className='row mt-1 marginBottom2 '>
        <div className='col-3 verySmallTextBold'>Income</div>
        <div className='col-3 verySmallTextBold '>Turnover</div>
        <div className='col-3 verySmallTextBold'>Canceled</div>
        <div className='col-3 verySmallTextBold'>Confirmed</div>
      </div>
      <div className='row'>
        <div className='col-12 '>
          <hr />
        </div>
      </div>
      <div className='row '>
        <div className='col-3 verySmallText'>Spin 2 Win Royale</div>
        <div className='col-3 verySmallText '>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
      </div>
      <div className='row '>
        <div className='col-3 verySmallText'>Kuno</div>
        <div className='col-3 verySmallText '>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
      </div>
      <div className='row '>
        <div className='col-3 verySmallText'>Turnover</div>
        <div className='col-3 verySmallText '>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
      </div>
      <div className='row '>
        <div className='col-3 verySmallText'>Cancelled</div>
        <div className='col-3 verySmallText '>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
      </div>
      <div className='row '>
        <div className='col-3 verySmallText'>Confirmed Stake</div>
        <div className='col-3 verySmallText '>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
      </div>
      <div className='row '>
        <div className='col-3 verySmallText '>Total Income</div>
        <div className='col-3 verySmallText '>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
        <div className='col-3 verySmallText'>ብር 10</div>
      </div>
      <div className='row marginBottom2'>
        <div className='col-9 font-weight-bolder varySmallText'>Outcome</div>
        <div className='col-3 '>Paid</div>
      </div>
      <hr />
      <div className='row marginBottom2 marginTop2'>
        <div className='col-9 verySmallText '>Keno Delux</div>
        <div className='col-3 verySmallText'>ብር 105</div>
        <div className='col-9 verySmallText '>Total Outcome</div>

        <div className='col-3 verySmallText'>ብር 105</div>
      </div>
      <hr />
      <div className='row marginBottom2 marginTop2'>
        <div className='col-9 verySmallText '>Balance</div>
        <div className='col-3 verySmallText'>ብር 105</div>
      </div>
      <hr />
      <div className='row marginBottom2 marginTop2'>
        <div className='col-9 verySmallText '>Information</div>
        <div className='col-3 verySmallText'>ብር 105</div>
        <div className='col-9 verySmallText '>Open Winning</div>
        <div className='col-3 verySmallText'>ብር 24</div>
      </div>
      <hr />
      <div className='row marginTop2'>
        {" "}
        <div className='col-9 verySmallText '>Net Balance</div>
        <div className='col-3 verySmallText'>ብር 105</div>
      </div>
    </div>
  );
});
