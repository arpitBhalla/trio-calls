// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  VideoGallery as VideoGalleryComponent,
  VideoGalleryRemoteParticipant,
  VideoGalleryLocalParticipant,
} from "@azure/communication-react";
import { Stack } from "@fluentui/react";

const MockLocalParticipant: VideoGalleryLocalParticipant = {
  userId: "user1",
  displayName: "You",
  //   state: "Connected",
  isMuted: true,
  isScreenSharingOn: true,
};

const MockRemoteParticipants: VideoGalleryRemoteParticipant[] = [
  {
    userId: "user2",
    displayName: "Peter Parker",
  },
  {
    userId: "user3",
    displayName: "Thor",
    isMuted: true,
    isSpeaking: true,
  },
  {
    userId: "user4",
    displayName: "Matthew Murdock",
  },
  {
    userId: "user5",
    displayName: "Bruce Wayne",
  },
];

// This must be the only named export from this module, and must be named to match the storybook path suffix.
// This ensures that storybook hoists the story instead of creating a folder with a single entry.
export const DefaultVideoGalleryExample: () => JSX.Element = () => {
  return (
    <Stack style={{ height: "30rem" }}>
      <VideoGalleryComponent
        localParticipant={MockLocalParticipant}
        remoteParticipants={MockRemoteParticipants}
      />
    </Stack>
  );
};
