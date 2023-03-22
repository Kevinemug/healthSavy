import React from "react";
import "../styles/member.css";
const Member = () => {
  return (
    <>
      <div className="formi">
        <p className="apply">Apply for membership below</p>
        <form>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Pharmacy Name:
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Pharmacist Name
            </label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Tel:
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Pharmacy Image
            </label>
            <div class="col-sm-10">
              <input type="file" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              Profile Image
            </label>
            <div class="col-sm-10">
              <input
                type="file"
                class="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputEmail3" class="col-sm-2 col-form-label">
              License
            </label>
            <div class="col-sm-10">
              <input type="file" class="form-control" id="inputEmail3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Province
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              District
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Street
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputPassword3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Email
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputPassword3" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Confirm Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="form-group row">
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label class="form-check-label" for="gridCheck1">
                  I agree to terms and conditions
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Member;
