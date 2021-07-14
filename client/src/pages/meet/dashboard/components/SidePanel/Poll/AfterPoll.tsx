import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import { BorderLinearProgress } from "../BorderLinearProgress";
import { PollType } from "./PollType";

export const AfterPoll: React.FC<PollType & { myRes?: string }> = ({
  question,
  options,
  correct,
  myRes,
}) => (
  <Box p={2} borderRadius={3} border="1px solid #e2e2e2">
    <Box display="flex" justifyContent="space-between">
      <Typography variant="subtitle1" color="textPrimary">
        {question}
      </Typography>
      <Chip label="Live" color="primary" />
    </Box>
    {options.map((opt) => (
      <>
        <Box py={1} display="flex" justifyContent="space-between" key={opt}>
          <Typography variant="body2" color="textSecondary">
            {opt}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {opt === myRes ? 1 : 0} vote
          </Typography>
        </Box>
        <BorderLinearProgress
          variant="determinate"
          value={opt === correct ? 100 : 0}
        />
      </>
    ))}
  </Box>
);
