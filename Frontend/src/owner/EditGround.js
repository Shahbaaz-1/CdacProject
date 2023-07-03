import { useState, useEffect } from "react";
import axios from "axios";
import "./addground.css";



function AddGround() {
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }
    getAllGrounds();
  }, []);

  const [image, setImage] = useState(null);
  //const [groundName, setGroundName] = useState("");
 // const [city, setCity] = useState("");
 let [isSuccess, setIsSuccess] = useState(false);
 let [isError, setIsError] = useState(false);
  const [getgroundDetail, setGroundDetail] = useState({
        
    ground_name:"",
    city:"",
    loction:"",
    amount:"",
    sports_name:""
    


  });


  const inputChangeHandler = (e) => {
    const newUser = { ...getgroundDetail, [e.target.name]: e.target.value };
    setGroundDetail(newUser);
  };


  const updateUser = async () => {
    //try{
      const url = `http://localhost:8081/updateGround`;
      const response=await axios.post(url, getgroundDetail);
      console.log(response.data);
      window.location.href = "/viewgroundowner";
    
    
  };


  const getAllGrounds = async () => {
    const ground = { ground_id: localStorage.getItem("groundid") };
    const response = await axios.post(
      "http://localhost:8081/findByGoundId",
      ground
    );
    setGroundDetail(response.data);
    setImage(response.data.ground_image);
    console.log(response.data);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="main mx-auto ">
      <div class="container-fluid px-1 mx-auto main1">
        <div class="row  p-0 mx-auto my-0 ">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 mx-auto text-center">
            <div class="card">
              <h5 class="text-center mb-4">Add Ground Information</h5>
              <form
                action="http://localhost:8081/addGround"
                method="post"
                enctype="multipart/form-data"
                class="form-card"
              >
                <input
                  type="file"
                  onChange={onImageChange}
                  className="filetype"
                  name="ground_image"
                />
                <img src={image} alt="." className="myimgpic" />

                {/* <input
                  type="hidden"
                  onChange={onImageChange}
                  className="filetype"
                  name="ground_id"
                /> */}

                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter ground name
                    </label>{" "}
                    <input
                      type="text"
                      id="fname"
                      name="ground_name"
                      placeholder={getgroundDetail.ground_name}
                      onChange={inputChangeHandler}
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter city
                    </label>{" "}
                    <input
                      type="text"
                      id="lname"
                      name="city"
                      onChange={inputChangeHandler}
                      placeholder={getgroundDetail.city}
                      
                    />{" "}
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
                      name="loction"
                      placeholder={getgroundDetail.loction}
                      onChange={inputChangeHandler}
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
                      placeholder={getgroundDetail.amount}
                      onChange={inputChangeHandler}
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
                      // placeholder=""
                      placeholder={getgroundDetail.sports_name}
                      onChange={inputChangeHandler}
                    />{" "}
                  </div>

                  <div class="form-group col-sm-12 flex-row d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      TimeSlot<span class="text-danger"> *</span>
                    </label>{" "}
                    <br />
                    <label class="form-control-label px-3">
                      9 Am to 12 Am{" "}
                    </label>
                    <input
                      type="checkbox"
                      id="mob"
                      name="morning"
                      placeholder=""
                    />{" "}
                    <label class="form-control-label px-3">
                      12 Pm to 3 Pm{" "}
                    </label>
                    <input type="checkbox" name="afternoon" placeholder="" />{" "}
                    <label class="form-control-label px-3">3 Pm to 6 Pm</label>
                    <input
                      type="checkbox"
                      id="mob"
                      name="evening"
                      placeholder=""
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
                      value={localStorage.getItem("groundid")}
                      placeholder=""
                    />{" "}
                  </div>
                </div>

                <div class="row justify-content-end">
                  <div class="form-group col-sm-6">
                    {" "}
                    <input
                      type="submit"
                          onClick={updateUser}
                      class="btn-block btn-success navBtnReg"
                      value="UPDATE"
                    />

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddGround;