import React from "react";
import "./style.css";

export enum Status {
  Active = "Active",
  Voted = "Voted",
  NotVoted = "Not Voted"
}

export interface Story {
  id: string;
  name: string;
  status: Status;
  point?: number;
}

interface Props {
  stories: Story[];
  onSelect(id: string): void
}

const StoryListView: React.FunctionComponent<Props> = props => {
  return (
    <div className="story-list-view container">
      <ul>
        <li className="header">
          <span>Story</span>
          <span>Story Point</span>
          <span>Status</span>
        </li>
        {props.stories.map(s => (
          <li key={s.id} onClick={() => props.onSelect(s.id)}>
            <>
              <span>{s.name}</span>
              <span>{s.point}</span>
              <span>{s.status}</span>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StoryListView;