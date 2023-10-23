





const Mymessage = ({ message }) => {
    if (message.attachments && message.attachments.length > 0) {
      return (
        <img
          src={message.attachments[0]?.file}
          alt="message-attachment"
          className="message-image"
          style={{ float: 'right' }}
        />
      );
    }
    return (
        <div  className="message"style={{ float: 'right', marginRight: '10px', backgroundColor: '#cce7ff', color: '#000', padding: '8px', borderRadius: '6px', maxWidth: '60%' }}>
        {message.text}
      </div>
      
    );
  };
  export default Mymessage;