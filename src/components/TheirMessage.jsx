


const TheirMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.userName !== message.sender.userName;
  
    return (
      <div className="message-row">
        {isFirstMessageByUser && (
          <div
            className="message-avatar"
            style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
          />
        )}
  
        {message.attachments && message.attachments.length > 0 
        ? (
          <img
            src={message.attachments[0]?.file} 
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '10px' : '68px' }}
          />
        ) : (
          <div
            className="message"
            style={{
              float: 'left',
              backgroundColor: '#CABCDC',
              marginLeft: isFirstMessageByUser ? '4px' : '48px',
            }}
          >
            {message.text}
          </div>
        )}
      </div>
    );
  };
  
  export default TheirMessage;
  