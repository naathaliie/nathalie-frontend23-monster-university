import "./MyButton.scss";

type MyButtonProps = {
  btn_text: string;
};

const MyButton = ({ btn_text }: MyButtonProps) => {
  return (
    <>
      <button>{btn_text}</button>
    </>
  );
};

export default MyButton;
