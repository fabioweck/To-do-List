interface Props {
  btnColor: string;
  handleClickBtn: () => void;
  btnDescription: string;
}

function SubmitBtn({ handleClickBtn, btnColor, btnDescription }: Props) {
  return (
    <button
      type="button"
      className={"btn btn-outline-" + btnColor}
      onClick={handleClickBtn}
    >
      {btnDescription}
    </button>
  );
}

export default SubmitBtn;
