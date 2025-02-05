import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {
  const { likes, messageId, updateLikes } = props;

  const toggleLikes = () => {
    updateLikes(messageId);
  };

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={toggleLikes}>{likes ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  )
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  likes: PropTypes.bool,
  updateLikes: PropTypes.func,
  messageId: PropTypes.number.isRequired
};

export default ChatEntry;
