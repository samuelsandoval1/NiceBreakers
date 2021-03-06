import User_Join_Form from "../user-form-component/user-join-form";
import TruthLiesCard from "../truthLiesCard/truthLiesCard";
import NullScene from "../nullScene/NullScene";
import User_Create_Form from "../../components/create-game-component/create-form";
import User_Join_Lobby from "../../components/user-join-lobby-component/user-join-lobby";
import Host_Join_Lobby from "../../components/host-join-lobby-component/host-join-lobby";
import * as constants from "../../constants";
import EndScreen from "../end-screen/endScreen";
import TruthLiesGame from "../truthLiesGame/truthLiesGame";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("content", this.props.socket);
    let componentList = {
      // Players
      [constants.SET_INFO]: <User_Join_Form socket={this.props.socket} />,
      [constants.WAITING]: <User_Join_Lobby socket={this.props.socket} />,
      [constants.TWO_TRUTHS_AND_A_LIE]: (
        <TruthLiesGame socket={this.props.socket} data={this.props.data} />
      ),
      // Host
      [constants.USER_CREATE_FORM]: (
        <User_Create_Form socket={this.props.socket} data={this.props.data} />
      ),
      [constants.HOST_JOIN_LOBBY]: (
        <Host_Join_Lobby socket={this.props.socket} data={this.props.data} />
      ),
      // Both
      [constants.END_SCREEN]: (
        <EndScreen data={this.props.data} socket={this.props.socket} />
      ),
    };
    const component = componentList[this.props.scene];
    if (component == null) return <NullScene />;
    return <div>{component}</div>;
  }
}
