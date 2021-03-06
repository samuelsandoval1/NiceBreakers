import React from "react";
import styles from "./host-join-lobby.module.css";
import Button from "../button/Button";
import Button2 from "react-bootstrap/Button";
import * as constants from "../../constants";

const Host_Join_Lobby = (props) => {
  return (
    <div className={styles.gen_box}>
      <div className={styles.top_box}>
        <h1 className={styles.top_text}>Player Number</h1>
        <h2 className={styles.top_text}>{props.data.players.length}</h2>
      </div>
      <br />

      <div className={styles.right_box}>
        <h1 className={styles.right_top_text}>Room Code</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className={styles.right_sub_text}>{props.data.user.lobby}</p>

        <br />
        <br />
        <Button text="Start" className={styles.button} />
        {/* <Button2 variant="light" className={styles.button} type="submit" form="makeGame">
                                Start
                </Button2> */}
      </div>
    </div>
  );
};

export default Host_Join_Lobby;
