import { useState, useEffect } from "react";
import axios from "axios";
import "./addground.css";
function AddHall() {
  useEffect(() => {
    if (
      localStorage.getItem("role") === "null" ||
      localStorage.getItem("role") != "2"
    ) {
      window.location.href = "/login";
    }
    getAllHalls();
  }, []);

  const [image, setImage] = useState(null);
 
  const [gethallDetail, setHallDetail] = useState({
 
    hallname:"",
    city:"",
    loction:"",
    amount:"",
    sports_name:"",





  });

  const getAllHalls = async () => {
    
    const hall = { "hallid": localStorage.getItem("hallid") };
    //console.log(hall);
    const response = await axios.post(
      "http://localhost:8081/findByHallId",
      hall
    );
    setHallDetail(response.data);
    setImage(response.data.hall_image);
    console.log(response.data);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };


 
  const inputChangeHandler = (e) => {
    const newUser = { ...gethallDetail, [e.target.name]: e.target.value };
    setHallDetail(newUser);
  };


  
  const updateUser = async () => {
    //try{
      const url = `http://localhost:8081/updateHall`;
      const response = await axios.post(url, gethallDetail);
      console.log(response.data);
     /* setUser({ groundname: "", city: "", loction: "", sports_name: "" });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 2500);
    }
    catch (e) {
      setIsError(true);
      setTimeout(() => setIsError(false), 2500);
    }*/
    
  };



  return (
    <div className="main mx-auto ">
      <div class="container-fluid px-1 mx-auto main1">
        <div class="row  p-0 mx-auto my-0 ">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 mx-auto text-center">
            <div class="card">
              <h5 class="text-center mb-4">Add Court Information</h5>
              <form
                action="http://localhost:8081/addHall"
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
                      Enter court name
                    </label>{" "}
                    <input
                      type="text"
                      id="fname"
                      name="hallname"
                      placeholder={gethallDetail.hallname}
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
                      placeholder={gethallDetail.city}
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
                      onChange={inputChangeHandler}
                      placeholder={gethallDetail.loction}
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Enter court rent
                    </label>{" "}
                    <input
                      type="text"
                      id="mob"
                      name="amount"
                      onChange={inputChangeHandler}
                      placeholder={gethallDetail.amount}
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
                      placeholder={gethallDetail.sports_name}
                      value={gethallDetail.sports_name}
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
                      name="hallid"
                      value={localStorage.getItem("hallid")}
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
                      value="Add Court"
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
export default AddHall;