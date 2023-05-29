import React from "react";
import { removeSpecialJoin } from "../../pages/book";

export default function AuthorCard({
  selectedAuthor,
  setSelectedAuthor,
  data,
}) {
  const handleCheckbox = (event) => {
    if (event.target.checked) {
      setSelectedAuthor({
        ...selectedAuthor,
        [removeSpecialJoin(event.target.value)]: true,
      });
    } else {
      const { [removeSpecialJoin(event.target.value)]: author, ...others } =
        selectedAuthor;
      setSelectedAuthor({ ...others });
    }
    console.log("dad", event.target.value, selectedAuthor);
  };
  return (
    <div>
      <input
        type="checkbox"
        name="author-check"
        id={data?.name}
        value={data?.name}
        onChange={handleCheckbox}
      />
      <label class="truncate" for={data?.name}>
        {data?.name}
      </label>
      <label for={data?.name}>{data?.total}</label>
    </div>
  );
}
