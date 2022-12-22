import React, { useState } from "react";
import styles from "./ProjectTypeChip.module.css";

function ProjectTypeChip() {
  const [selectedProjectType, setSelectedProjectType] = useState(false);

  console.log("state", selectedProjectType);
  return (
    <>
      <div
        className={`${styles.chip_container} ${
          !selectedProjectType
            ? styles.unselected_chip_container
            : styles.selected_chip_container
        }`}
        onClick={() => setSelectedProjectType((prev) => !prev)}
      >
        <p className={`${styles.chip_text}`}>
          {!selectedProjectType ? "I am interested" : "See you soon!"}
        </p>
        {!selectedProjectType ? (
          <img
            className={`${styles.chip_img} ${styles.unselected_chip_img}`}
            src="/assets/thumb.svg"
            alt=""
          />
        ) : (
          <img
            className={`${styles.chip_img}`}
            src="/assets/happy-face.svg"
            alt=""
          />
        )}
      </div>
    </>
  );
}
export default ProjectTypeChip;
