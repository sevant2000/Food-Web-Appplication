import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate, NavLink } from "react-router-dom";

const Welcome = () => {
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
    <div className="copy">
      {logindata.length === 0 ? (
        "error"
      ) : (
        <>
         
         <div className="usr p-5">
         <h1>Welcome to Foods kitchen</h1>
          {/* <Button className="butt m-5" onClick={userlogout}>Log-Out</Button> */}
          <button className="butt"><NavLink to="/foor">Food Menu</NavLink></button>
         </div>
          

          {logindata[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              
              <Modal.Body>
                Wish you many many happy returns of the day ! 🍰
              </Modal.Body> 
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </div>
    </>
  );
};

export default Welcome;
