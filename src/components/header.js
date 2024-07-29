import React,{Paragrap,Span} from "react";
import logo from './images/logo.png';

function header() {

    const logoStyle = {
        float: "left",
        width: "12%",
      };

  const companyNameStyle = {
    color:"#22a",
    fontSize: "250%",
    fontWeight: "bold",
    fontFamily: "Serif",
    padding: "10px",
    textAlign:"center",
    display:"block"
  };
  const companySloganStyle = {
    margin: "0px",
    fontSize: "100%",
    fontFamily: "Cursive",
    padding: "10px",
    textAlign:"center",
  };

  return (
    <div style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1564667005686-cce951e72bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "10%",
      }}>
      <span>
        <img style={logoStyle} src={logo} alt="company logo" />
      </span>
      <span>
        <span style={companyNameStyle}>YUKTI SOFTWARES</span>
        <div style={companySloganStyle}>Nurturing Technologies Nurturing Youth</div>
      </span>
    </div>
  );
}

export default header;
