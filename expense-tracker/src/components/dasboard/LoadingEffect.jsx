import React from "react";
function LoadingEffect() {
  return (
    <div className="loadingEffect">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <br />
      <br />
      <div className="loading--quote">"Still faster than Windows update"</div>
    </div>
  );
}

export default LoadingEffect;
