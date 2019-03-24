import mongoose from "mongoose";

export interface Story {
  name: string;
  givenPoints: number[];
  result: number;
}

export type SessionModel = mongoose.Document & {
  name: string;
  nOfVoters: number;
  stories: Story[];
};

const SessionSchema = new mongoose.Schema({
  name: String,
  nOfVoters: Number,
  stories: [
    {
      name: String,
      givenPoints: [Number],
      result: Number,
    },
  ],
});

const Session = mongoose.model<SessionModel>("Session", SessionSchema);
export default Session;
