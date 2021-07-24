# <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Teams_%282018%E2%80%93present%29.svg.png' width='25'> Teams

[![DeepSource](https://deepsource.io/gh/arpitBhalla/MicrosoftEngageMentorship2021.svg/?label=resolved+issues&show_trend=true&token=qkGeZPDLrtbe0wdM5TdpQsLV)](https://deepsource.io/gh/arpitBhalla/MicrosoftEngageMentorship2021/?ref=repository-badge) [![Test](https://github.com/arpitBhalla/MicrosoftEngageMentorship2021/actions/workflows/test.yaml/badge.svg)](https://github.com/arpitBhalla/MicrosoftEngageMentorship2021/actions/workflows/test.yaml) [![Deploy Server](https://github.com/arpitBhalla/MicrosoftEngageMentorship2021/actions/workflows/deploy.yml/badge.svg)](https://github.com/arpitBhalla/MicrosoftEngageMentorship2021/actions/workflows/deploy.yml)

A multi-participant video call platform for calling across the world for free with screen sharing!

---

## 🤞 Made possible with

<div>
<img src='assets/typescript.svg' width='70'>
<img src='assets/redux.svg' width='70'>
<img src='assets/mui.svg' width='70'>
<img src='assets/node.svg' width='70'>
<img src='https://cdn.iconscout.com/icon/free/png-256/google-cloud-2038785-1721675.png' width='70'>
<img src='assets/mongo.svg' width='70'>
</div>

## ✨ Feature list

### 🥅 Basic features

- Schedule 📅 meets, send invite via email 📩 & save to calendar.
- Create public 🌐 or restricted ☢️ meeting.
- Connect with multiple users via meeting link 🔗 or code.
- Realtime chat 💬, connect before or after the meeting.
- Chat in github like markdown. insert tables, code snippets, lists.
- Get notified if network 📶 connectivity lost.
- Toggle dark 🌑 or light 🌕 mode anytime.
- Audio notification 🔔 for chat and new user connect
- Screen Sharing 💻.
- Remove ⛔ Other Participants (only host).
- Shortcut keys to control meeting.
- Interactive animated UI.

### 🧑‍🎓 Classroom specific features

- Realtime whiteboard 📋 with multiple tools.
- Realtime Poll 📊 / Voting 🗳️.
- Take attendance 🙋‍♂️ and save in CSV format.
- Lock 🔒 meeting, late comer would not able to join 🚫.
- Get notified 👀 if student changes tab.

### 👨‍💻 Code features

- 100% strict ⚠️ typescript
- `eslint` and `prettier` friendly code
- Code splitting using `@loadable/component`
- Hooks 🪝 like `React.useCallback` `React.memo` which will increase performance.
- Unit tested with `jest` & `e2e` tested with `cypress`.
- Proper use of `/** comments */` and descriptions for functions.

## 🙇🏻‍♂️ Acknowledgement

- Thanks [arjhun777](https://dev.to/arjhun777) for providing [https://dev.to/arjhun777/video-chatting-and-screen-sharing-with-react-node-webrtc-peerjs-18fg](https://dev.to/arjhun777/video-chatting-and-screen-sharing-with-react-node-webrtc-peerjs-18fg)

## 🚧 Workflow

![Workflow](https://user-images.githubusercontent.com/55053424/125153081-1a12ef00-e16f-11eb-9da1-1f4481af451d.png)

## 🚀 Getting started

Guide for local deployment -

1. Clone the repository

```bash
git clone git@github.com:arpitBhalla/MicrosoftEngageMentorship2021.git
```

2. Change the working directory

```bash
cd server
```

3. Install dependencies

```bash
npm install
```

4. Change the working directory

```bash
cd client
```

5. Install dependencies

```bash
npm install
```

6. Start MongoDB 

```bash
mongod
```

7. Run the app

```bash
npm start # in client directory /client
```

```bash
npm run dev # in server directory /server
```

8. Open project at `http://localhost:3000`


## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov

```

## Lighthouse Report

![Lighthouse](https://user-images.githubusercontent.com/55053424/125126171-51a27c80-e118-11eb-9aee-96787d5ea749.png)

<div align="center">
Developed with ❤️ in India 🇮🇳 by

[@arpitBhallla](https://github.com/arpitBhalla)

</div>
