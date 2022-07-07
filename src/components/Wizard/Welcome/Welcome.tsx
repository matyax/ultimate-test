import RobotImage from "resources/robot.png";

const Welcome = () => {
  return (
    <div>
      <h1 className="wizard__title">Customize your Robot</h1>
      <p>Welcome to the Robot Customization Wizard.</p>
      <div className="wizard__robot-container">
        <img src={RobotImage} alt="Robot" className="wizard__robot" />
      </div>
      <p>
        Complete the following steps to configure different aspects of your
        agent, to provide your customers with the best possible experience.{" "}
        <a
          href="https://support.ultimate.ai/hc/en-us/categories/4405739796114-Conversational-AI"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
        .
      </p>
    </div>
  );
};

export default Welcome;
