import React, { useState } from "react";

function useInput() {
  const [write, setWrite] = useState({
    id: 0,
    name: "",
    title: "",
    content: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setWrite({ ...write, [name]: value });
  };
  return [write, onChangeHandler];
}

export default useInput;
