import React from "react";

const PetDetails = ({ params }: { params: { petId: string } }) => {
  console.log(params);
  return (
    <div>
      <h1>This is pet details page</h1>
    </div>
  );
};

export default PetDetails;
