import React, { useRef, useState } from "react";
import Modal from "../../UI/Modal";
import successIcon from "../../assets/success.svg";
import errorIcon from "../../assets/error.svg";
import Button from "../../UI/Button";
import styles from "./Subscribe.module.css";

const MODAL_CONTENT = [
  {
    title: "Congrats!",
    image: `${successIcon}`,
    message:
      "You have successfully joined the waitlist. We'd update you as soon as we launch.",
  },
  {
    title: "Oops!",
    image: `${errorIcon}`,
    message:
      "You have already joined the waitlist. We'd update you as soon as we launch.",
  },
];

let userEmail = [];

function Subscribe() {
  const emailInputRef = useRef();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addEmailHandler = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", enteredEmail);
    if (userEmail.includes(enteredEmail)) {
      return;
    } else {
      userEmail.push(enteredEmail);
    }
    // console.log(userEmail);
    setEnteredEmail("");
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const submitHandler = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const emailCheck = userEmail.includes(enteredEmail);

  const successModal = (
    <Modal
      title={MODAL_CONTENT[0].title}
      image={MODAL_CONTENT[0].image}
      message={MODAL_CONTENT[0].message}
      onConfirm={closeModal}
    />
  );

  const errorModal = (
    <Modal
      title={MODAL_CONTENT[1].title}
      image={MODAL_CONTENT[1].image}
      message={MODAL_CONTENT[1].message}
      onConfirm={closeModal}
    />
  );

  return (
    <>
      {showModal && (emailCheck ? errorModal : successModal)}
      <form className={styles.form} onSubmit={addEmailHandler}>
        <input
          className={styles.input}
          placeholder="Enter your email address here..."
          id="email"
          value={enteredEmail}
          type="email"
          ref={emailInputRef}
          onChange={emailChangeHandler}
        />
        <Button
          className={styles.btn}
          type="submit"
          onConfirm={submitHandler}
        />
      </form>
    </>
  );
}

export default Subscribe;
