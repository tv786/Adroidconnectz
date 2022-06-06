function Mid() {
  return (
    <div className="mt-5 mb-5 pt-5 pb-5">
      <div class="row justify-content-center">
        <div class="col-sm-3   ">
        <p style={{color:"blue"}}>Get in touch</p>
          <h1>Unparalleled Customer Support</h1>
          <p>
            Whether you already use Project Pals or want to see how our project
            based-learning platform can benefit your classroom, we’re here to
            help.
          </p>
          <p>
            Contact us and we’ll ensure you speak with the team member who can
            best answer your question, solve your challenge, or provide support.
            Have feedback on the platform? We’d love to hear that, too.
          </p>
          <h6>
              Email
          </h6>
          <p>
          support@projectpals.com


          </p>
          <h6>
            Questions?
          </h6>
          <p>
          Visit our <a href="#" >

          FAQ
          </a>

          </p>
        </div>
        <div class="col-sm-3 mc ms-5 ps-5 mt-5">
        <form>

          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              <b>

              FIRST NAME
              </b>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder=""
              required
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
             <b>

              LAST NAME
             </b>
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder=""
              required
            />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                <b>

                EMAIL
                </b>
              </label>
              <input
                type="email"
                class="form-control"
                id="formGroupExampleInput"
                placeholder=""
                required
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                <b>

                MESSAGE
                </b>
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder=""
                required
              />
            </div>
            <button class="btn btn-primary rounded-0 p-3 pe-5 ps-5" type="submit" style={{fontSize:"12px"}}>SEND</button>

        </form>
        </div>
      </div>
    </div>
  );
}
export default Mid;
