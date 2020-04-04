import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addAsync } from "../../redux/actions";

const AsyncAdd = ({ nums, addAsync }) => {
  useEffect(() => {
    // Update the document title using the browser API
    console.log("AsyncAdd Done!");
  });

  return (
    <h1
      onClick={() => {
        addAsync();
      }}
    >
      {nums}
    </h1>
  );
};

const mapStateToProps = (state) => {
  const { nums } = state;
  return { nums };
};

export default connect(mapStateToProps, { addAsync })(AsyncAdd);
