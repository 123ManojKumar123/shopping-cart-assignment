import React from "react";

export default function CatogeryList({ selected, setSelected, catogeries }) {
  return (
    <>
    <div className="catogery-list">
      {catogeries?.map((data, index) => (
        <div
          onClick={() => setSelected(data?.id)}
          id={selected === data?.id && "selected-catogey-card"}
          className="catogery-list-card"
          key={data?.id}
        >
          {data.name}
        </div>
      ))}
    </div>
  <select className="catogery-list-selection" onChange={(event) => setSelected(event.target.value)}>
  <option value="" defaultValue="selected">Select</option> 
  {catogeries?.map((data, index) => (
    data?.id &&(
        <option
          className="catogery-list-card"
          value={data?.id}
          id={selected === data?.id}
          key={data?.id}
        >
          {data.name}
        </option>
      ))
  )}

</select>
</>
  );
}
