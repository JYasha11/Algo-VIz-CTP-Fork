import React from "react";
import SortingVisualizer from "../components/sortingVisualizer/SortingVisualizer";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  panel: {},
});

export const VisualizationsPage2 = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.panel}>
        <SortingVisualizer />
      </div>
    </>
  );
};
