import React from "react";
import "./styles.css";

const App = () => {

  return (
    <div className="App">
      <img
        className="logo"
        src="http://www.userlogos.org/files/logos/inductiveload/Pastebin.png"
        alt="pastebin"
        width="200px"
      />
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <br />
      <form
        className="col-10 offset-1"
      >
        <div className="form-group">
          <label htmlFor="api_paste_name">Filename</label>
          <input
            type="text"
            className="form-control"
            id="api_paste_name"
            name="api_paste_name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="api_paste_expire_date">Expiration</label>
          <select
            className="custom-select"
            id="api_paste_expire_date"
            name="api_paste_expire_date"
            defaultValue="choose"
          >
            <option value="choose" disabled>
              Please select
            </option>
            <option value="10M">10 Minutes</option>
            <option value="1H">1 Hour</option>
            <option value="1D">1 Day</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="api_paste_code">Code</label>
          <textarea
            className="form-control"
            id="api_paste_code"
            name="api_paste_code"
            rows="3"
          />
        </div>
        <input type="hidden" name="api_paste_private" value="0" />
        <input type="hidden" name="api_option" value="paste" />
        <input type="hidden" name="api_user_key" value="" />
        <input
          type="hidden"
          name="api_dev_key"
          // Alternate API Key
          // value="10d0f6cee26d024fa57e968ab041a14a"
          value="UfE_u9upiZ_QiNetFmqKl0sORiMtDrtq"
        />
        <div className="form-group">
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </div>
        <p>
          Your link is:
          "~~~~"
        </p>
      </form>
    </div>
  );
};

export default App;
