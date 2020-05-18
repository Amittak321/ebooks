import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/index";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CategoryPicker.module.css";

const CategoryPicker = ({ handleCategoryChange }) => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      let data = await fetchCategories();
      setCategory(data);
    };
    getCategories();
  }, []);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="">Sort by category</option>
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CategoryPicker;
