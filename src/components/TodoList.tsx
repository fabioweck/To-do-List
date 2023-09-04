import { ReactNode, useState } from "react";
import DeleteBtn from "./DeleteBtn";

interface Props {
  items: { [key: string]: string };
  deleteTask: (key: string) => void;
}

function TodoList({ items, deleteTask }: Props) {
  return (
    <ul className="list-group">
      {Object.entries(items).map(([key, value]) => {
        return (
          <li className={"list-group-item " + value} key={key}>
            <div>
              <input
                className="htmlForm-check-input me-1"
                type="checkbox"
                value="-checked"
                id="firstCheckbox"
              />
              <label className="htmlForm-check-label" htmlFor="firstCheckbox">
                {key}
              </label>
            </div>
            <DeleteBtn removeTask={() => deleteTask(key)}></DeleteBtn>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
