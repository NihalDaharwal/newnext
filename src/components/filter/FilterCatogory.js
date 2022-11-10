import React from "react";

const FilterCatogory = () => {
  const handlesubmit = () => {
  };

  return (
    <div>
      <div>
        <h6>Category</h6>
        <label htmlFor="electronics">
          {" "}
          <input type="checkbox" name="Electronics" id="" />
          Electronics
        </label>
      </div>
      <div>
        <label htmlFor="home&kitchen">
          <input type="checkbox" name="home&kitchen" id="" />
          Home & kitchen
        </label>

        <div>
          <label htmlFor="books">
            {" "}
            <input type="checkbox" name="books" id="" />
            Books
          </label>
        </div>
        <div>
          <label htmlFor="fashion">
            {" "}
            <input type="checkbox" name="fashion" id="" />
            Fashion
          </label>
        </div>
        <div>
          <label htmlFor="food">
            {" "}
            <input type="checkbox" name="food" id="" />
            Food
          </label>
        </div>
      </div>
      <button onClick={handlesubmit}>Search</button>

      {/* {category.filter((list)=>{
return list.category === "electronics"
})} */}
    </div>
  );
};

export default FilterCatogory;
