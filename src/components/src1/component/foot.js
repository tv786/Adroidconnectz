function Foot() {
  return (
    <div
      className=" pt-5 pb-5 "
      style={{
        bottom: "0",
        width: "100%",
        backgroundColor: "black",
        color: "white",

      }}
    >
      <div className="float-sm-start">
        © 2021 Kalungi, Inc. - All Rights Reserved.
      </div>
      <div className="float-sm-end ">
        <a href="#" style={{ textDecoration: "none", color: "white" }}>
          Powered by Atlas - a B2B SaaS HubSpot theme
        </a>
      </div>
    </div>
  );
}
export default Foot;
