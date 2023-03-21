import React from "react";
import store from "../store/Context";
import Formular from "../components/Forms/CollectionForm";

function Collection() {
  // 
  const {collection} = store().data;
  
  return (
    <div className="notepad" style={{background: collection.bg}}>
      <h2> {collection.title} </h2>
      <p> {collection.info} </p>

      <div>
        {/* <AddApp/> */}
        <Formular />
      </div>

    </div>
  );
}

export default Collection;
