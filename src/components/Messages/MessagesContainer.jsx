import { connect } from "react-redux";
import { addMessage } from "../../redux/messages-reducer";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import Messages from "../Messages/Messages";
import { compose } from "redux";

const mapStateToProps = (state) => {
    return {
        users: state.messagesPage.users,
        messages: state.messagesPage.messages,
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect,
)(Messages);

