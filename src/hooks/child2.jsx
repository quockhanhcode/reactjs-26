import React, { memo } from "react";

function Child2() {
  console.log("chidl2 component");

  return <div>Child2</div>;
}
export default memo(Child2);
