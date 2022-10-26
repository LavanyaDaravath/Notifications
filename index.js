const Notification = (props) => {
  //  Write your code here.
  const { className, URl, Text } = props;
  const containerClassName = `notification-con ${className}`;
  return (
    <div className={containerClassName}>
      <img src={URl} className="icons" />
      <p className="Text">{Text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bgContainer">
    <h1 className="heading">Notifications</h1>
    <div className="notification-icon-container">
      <Notification
        URl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="bg-primary-color"
        Text="Information Message"
      />
      <Notification
        URl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="bg-color-success"
        Text="Success Message"
      />
      <Notification
        URl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="bg-color-warning"
        Text="Warning Message"
      />
      <Notification
        URl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="bg-color-danger"
        Text="Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
