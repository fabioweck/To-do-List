import React, { ChangeEvent } from "react";

interface Props {
  handleSelect: (item: ChangeEvent<HTMLSelectElement>) => void;
}

function SelectPriority({ handleSelect }: Props) {
  return (
    <>
      <div className="form-floating">
        <select
          className="form-select"
          id="floatingSelect"
          onChange={handleSelect}
          defaultValue="low"
        >
          <option value="low">Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
        </select>
        <label htmlFor="floatingSelect">Select priority:</label>
      </div>
    </>
  );
}

export default SelectPriority;
