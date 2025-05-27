import React, { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, handleReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
        document.body.style.overflow = "hidden";
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>
        {userLost ? "You Lost!" : "You Win!"}
        &nbsp;&nbsp;
        {!userLost && `Score: ${score}`}
      </h2>

      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer on{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={handleReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
