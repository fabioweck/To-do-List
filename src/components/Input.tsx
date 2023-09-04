function InputTodo({ handleInput }: any) {
  return (
    <>
      <form>
        <div className="input-task">
          <label htmlFor="item" className="input-label">
            Task description:
          </label>
          <input
            type="text"
            onChange={(e) => handleInput(e.target.value)}
            className="form-control"
          />
        </div>
      </form>
    </>
  );
}

export default InputTodo;
