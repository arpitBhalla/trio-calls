# Front End

## Directory Structure

```dir.
├── assets
│   ├── audio.d.ts
│   ├── notification.mp3
│   └── teams.png
├── components
│   ├── Chat
│   │   ├── ChatMessage.tsx
│   │   ├── ChatSkeleton.tsx
│   │   ├── ChatTextInput.tsx
│   │   └── index.tsx
│   ├── Header
│   │   ├── Header.tsx
│   │   └── index.tsx
│   ├── ControllerButton.tsx
│   ├── LoadingPage.tsx
│   ├── Logo.test.tsx
│   ├── Logo.tsx
│   ├── NotFound.tsx
│   └── ShadowBox.tsx
├── core
│   ├── hooks
│   │   ├── common.ts
│   │   ├── redux.ts
│   │   ├── useAudio.ts
│   │   ├── useConnection.ts
│   │   ├── useDocVisible.ts
│   │   ├── useMsgs.tsx
│   │   ├── useSocket.ts
│   │   └── useWndFocus.ts
│   ├── provider
│   │   ├── AudioProvider.tsx
│   │   ├── index.tsx
│   │   ├── SocketProvider.tsx
│   │   └── ThemeProvider.tsx
│   ├── reducers
│   │   ├── auth.ts
│   │   ├── chat.ts
│   │   ├── media.ts
│   │   ├── meeting.ts
│   │   └── theme.ts
│   ├── config.ts
│   ├── store.ts
│   └── theme.ts
├── pages
│   ├── auth
│   │   ├── index.tsx
│   │   ├── SignIn.tsx
│   │   └── SignUp.tsx
│   ├── chat
│   │   ├── components
│   │   │   ├── styles
│   │   │   │   └── ChatParticipants.ts
│   │   │   ├── ChatHeader.tsx
│   │   │   ├── ChatMsgs.tsx
│   │   │   └── ChatParticipants.tsx
│   │   ├── Chat.tsx
│   │   └── index.tsx
│   ├── home
│   │   ├── components
│   │   │   ├── JoinMeet.tsx
│   │   │   └── NewMeet.tsx
│   │   └── Home.tsx
│   ├── meet
│   │   ├── components
│   │   │   ├── SidePanel
│   │   │   │   ├── ChatBox.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   ├── Info.tsx
│   │   │   │   ├── Participants.tsx
│   │   │   │   ├── PollModal.tsx
│   │   │   │   └── Polls.tsx
│   │   │   ├── Controller.tsx
│   │   │   ├── index.tsx
│   │   │   ├── LeftBar.tsx
│   │   │   ├── PollAlert.tsx
│   │   │   ├── Preview.tsx
│   │   │   ├── Sketch.tsx
│   │   │   └── Video.tsx
│   │   ├── hooks
│   │   │   └── useVideoConf.ts
│   │   ├── index.tsx
│   │   ├── Meet.tsx
│   │   └── WaitRoom.tsx
│   └── index.tsx
├── utils
│   ├── auth.fetch.ts
│   ├── axios.fetch.ts
│   ├── chat.fetch.ts
│   ├── common.test.ts
│   ├── common.ts
│   ├── meeting.fetch.ts
│   └── types.ts
├── App.tsx
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts
```
