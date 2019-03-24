import React from "react";
import "./style";

const Points = [1,2,3,4,5,6,7,8,9,10,11,12];

interface PointProps {
  value: number;
  selected: boolean;
  onClick(v: number): void;
}

const Point: React.FunctionComponent<PointProps> = ({ value, onClick, selected }: PointProps) => {
  return (
    <div
      className={"point" + (selected ? " selected" : "")}
      onClick={() => onClick(value)}>
      {value}
    </div>
  );
}

interface Props {
  selected: number;
  setSelected(v: number): void;
  activeStoryName: string;
}

const ActiveStoryView: React.FunctionComponent<Props> = ({ activeStoryName, selected, setSelected }) => {
  return (
    <div className="active-story-view container">
      <span className="caption">{activeStoryName}</span>
      <div className="grid">
        {
          Points.map(p => 
            <Point
              key={p}
              value={p}
              selected={p===selected}
              onClick={setSelected}
            />
          )
        }
      </div>
      <span className="result">{selected === -1 ? "Please Vote!!!" : (selected + " Voted")}</span>
    </div>
  );
}

export default ActiveStoryView;