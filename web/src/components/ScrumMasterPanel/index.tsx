import React from "react";
import "./style";

interface Props {

}

const ScrumMasterPanel: React.FunctionComponent<Props> = props => {
  return (
    <div className="scrum-master-panel container">
      <span className="caption">Scrum Master Panel</span>
    </div>
  );
}

export default ScrumMasterPanel;