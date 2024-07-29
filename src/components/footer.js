import React from 'react'

function footer() {

    const myStyle={        
        textAlign: "center",
        margin:"0px"
    }

    return (
       <div  style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1564667005686-cce951e72bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "10%",
      }}>
          <div  style={myStyle}>
            <h4> &copy; Yukti Softwares 2021  -  Contact us  </h4>
                <address>B-607 KSAS, SECTOR PI Greater Noida, G.B. Nagar, INDIA</address>
            <h5> <a href="mailto:contact@yuktisoftwares.com">Email: contact@yuktisoftwares.com </a>  - +91 9582815419 </h5>
        </div>
        </div>
    )
}

export default footer