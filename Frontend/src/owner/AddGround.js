import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./addground.css";
import sweetalert from "sweetalert";

function AddGround() {
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }

    var today = new Date();
    var date =
      today.getFullYear() + "" + (today.getMonth() + 1) + "" + today.getDate();
    var time =
      today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
    var groundId = date + "" + time + "" + localStorage.getItem("userid");
    localStorage.setItem("groundId", groundId);

    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }
  });

  const [image, setImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const redirectlogin = () => {
    window.location.href = "/login";
    localStorage.setItem("role", null);
  };
  const [groundName, setGroundName] = useState("");
  //let groundName = React.createRef();

  let address = React.createRef();
  let city = React.createRef();
  let rent = React.createRef();
  let sportName = React.createRef();
  let afternoon = React.createRef();
  let morning = React.createRef();
  let evening = React.createRef();
 // let ground_image = React.createRef();

  function addGround() {
    axios
      .post(
        "http://localhost:8081/addGround?groundid=" +
          localStorage.groundId +
          "&ownerid=" +
          localStorage.userid +
          "&groundname=" +
          // groundName.current.value +
          // "&address=" +
          // localStorage.address +
          groundName +
          "&loction=" +
          address.current.value +
          "&address=" +
          localStorage.location +
          "&city=" +
          city.current.value +
          "&amount=" +
          rent.current.value +
          "&sports_name=" +
          sportName.current.value +
          "&morning=" +
          morning.current.name +
          "&afternoon=" +
          afternoon.current.name +
          "&evening=" +
          evening.current.name +
          "&ground_image=" +
          image,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        window.location.href = "/ownerhome";
      });
  }

  return (
    <div className="main mx-auto ">
      <div class="container-fluid px-1 mx-auto main1">
        <div class="row  p-0 mx-auto my-0 ">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 mx-auto text-center">
            <div class="card">
              <h5 class="text-center mb-4">Add Ground Information</h5>
              <input
                type="file"
                onChange={onImageChange}
                className="filetype"
                name="ground_image"
              />
              <img src={image} alt="." className="myimgpic" />

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Enter ground name
                  </label>{" "}
                  <input
                    type="text"
                    id="fname"
                    name="groundname"
                    //value="1"
                    onChange={(e) => {
                      setGroundName(e.target.value);
                    }}
                    // ref={groundName}
                  />{" "}
                  <p id="ground"></p>
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">Enter city</label>{" "}
                  <input type="text" id="lname" name="city" ref={city} />{" "}
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Enter full address
                  </label>{" "}
                  <input
                    type="text"
                    id="email"
                    ref={address}
                    name="address"
                    // value="1"
                    placeholder=""
                  />{" "}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Enter ground rent
                  </label>{" "}
                  <input
                    type="text"
                    id="mob"
                    name="amount"
                    //value=""
                    ref={rent}
                    placeholder=""
                  />{" "}
                </div>
              </div>

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    Enter Sport name
                  </label>{" "}
                  <input
                    type="text"
                    id="email"
                    name="sports_name"
                    ref={sportName}
                    //value="1"
                    placeholder=""
                  />{" "}
                </div>

                <div class="form-group col-sm-12 flex-row d-flex">
                  {" "}
                  <label class="form-control-label px-3">
                    TimeSlot<span class="text-danger"> *</span>
                  </label>{" "}
                  <br />
                  <label class="form-control-label px-3">9 Am to 12 Am </label>
                  <input
                    type="checkbox"
                    id="mob"
                    name="morning"
                    ref={morning}
                    placeholder=""
                  />{" "}
                  <label class="form-control-label px-3">12 Pm to 3 Pm </label>
                  <input
                    type="checkbox"
                    name="afternoon"
                    placeholder=""
                    ref={afternoon}
                  />{" "}
                  <label class="form-control-label px-3">3 Pm to 6 Pm</label>
                  <input
                    type="checkbox"
                    id="mob"
                    name="evening"
                    placeholder=""
                    ref={evening}
                  />{" "}
                </div>

                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <input
                    type="hidden"
                    id="mob"
                    name="ownerid"
                    value={localStorage.getItem("userid")}
                    placeholder=""
                  />{" "}
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <input
                    type="hidden"
                    id="mob"
                    name="groundid"
                    value={localStorage.getItem("groundId")}
                    placeholder=""
                  />{" "}
                </div>
              </div>

              <div class="row justify-content-end">
                <div class="form-group col-sm-6">
                  {" "}
                  <input
                    type="submit"
                    onClick={addGround}
                    class="btn-block btn-success navBtnReg"
                    value="Add Ground"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddGround;
