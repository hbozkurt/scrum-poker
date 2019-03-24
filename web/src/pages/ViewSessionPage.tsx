import React from "react";
import StoryListView, { Story, Status } from "../components/StoryListView";
import ActiveStoryView from "../components/ActiveStoryView";
import ScrumMasterPanel from "../components/ScrumMasterPanel";

const stories: Story[] = [
  {
    id: "Story 1",
    name: "Story 1",
    status: Status.Voted,
    point: 5
  },
  {
    id: "Story 2",
    name: "Story 2",
    status: Status.Voted,
    point: 5
  },
  {
    id: "Story 3",
    name: "Story 3",
    status: Status.NotVoted,
  },
  {
    id: "Story 4",
    name: "Story 4",
    status: Status.NotVoted,
  },
  {
    id: "Story 5",
    name: "Story 5",
    status: Status.NotVoted,
  },
  {
    id: "Story 6",
    name: "Story 6",
    status: Status.NotVoted,
  },
  {
    id: "Story 7",
    name: "Story 7",
    status: Status.NotVoted,
  },
  
];

interface Props {

}

const ViewSessionPage: React.FunctionComponent<Props> = props => {
  const [active, setActive] = React.useState("");
  const [value, setValue] = React.useState(-1);

  const activeStory = stories.find(s => s.id === active);
  return (
    <div className="view-session">
      <StoryListView stories={stories} onSelect={setActive} />
      <ActiveStoryView
        selected={value}
        setSelected={setValue}
        activeStoryName={activeStory ? activeStory.name : ""}
      />
      <ScrumMasterPanel />
    </div>
  );
}

export default ViewSessionPage