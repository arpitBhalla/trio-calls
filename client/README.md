# Front End

## Directory Structure

````dir
├── assets
│   └── teams.png
├── components
│   ├── Chat
│   │   ├── ChatMessage.tsx
│   │   ├── ChatTextInput.tsx
│   │   └── index.tsx
│   ├── ControllerButton.tsx
│   ├── Header.tsx
│   ├── LoadingPage.tsx
│   ├── Logo.tsx
│   ├── NotFound.tsx
│   └── ShadowBox.tsx
├── core
│   ├── hooks
│   │   ├── common.ts
│   │   ├── redux.ts
│   │   ├── useDocVisible.ts
│   │   ├── useMsgs.ts
│   │   ├── useSocket.ts
│   │   ├── useVideoConf.ts
│   │   └── useWndFocus.ts
│   ├── provider
│   │   ├── SocketProvider.tsx
│   │   └── ThemeProvider.tsx
│   ├── reducers
│   │   ├── auth.ts
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
│   │   │   │   └── Participants.tsx
│   │   │   ├── Controller.tsx
│   │   │   ├── LeftBar.tsx
│   │   │   ├── Preview.tsx
│   │   │   ├── Sketch.tsx
│   │   │   └── Video.tsx
│   │   ├── index.tsx
│   │   ├── Meet.tsx
│   │   └── WaitRoom.tsx
│   └── index.tsx
├── utils
│   ├── auth.fetch.ts
│   ├── axios.fetch.ts
│   ├── common.test.ts
│   ├── common.ts
│   ├── meeting.fetch.ts
│   └── types.ts
├── App.test.tsx
├── App.tsx
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── serviceWorker.ts
└── setupTests.ts```
````
