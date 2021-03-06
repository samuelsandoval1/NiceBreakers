import React from "react";
import styles from "./create-form.module.css";
import Button from "../button/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import * as constants from "../../constants";

function User_Create_Form(props) {
  return (
    <>
      <Card className={styles.form}>
        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Label className={styles.label}>Don't be shy, choose a game!</Form.Label>
              <div onClick={() => {
                props.socket.emit(constants.START_GAME, {
                  game: constants.TWO_TRUTHS_AND_A_LIE,
                });
              }} className={styles.parent}>
                <a className={styles.child}> {constants.TWO_TRUTHS_AND_A_LIE} </a>
              </div>
              {/* <Button
                            className={styles.button}
                            text={constants.TWO_TRUTHS_AND_A_LIE}
                            onClick={() => {
                            props.socket.emit(constants.START_GAME, {
                                game: constants.TWO_TRUTHS_AND_A_LIE,
                            });
                            }}
                             /> */}
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default User_Create_Form;
