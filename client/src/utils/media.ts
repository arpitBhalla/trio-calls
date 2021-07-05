// // audioToggle: function(e) {
// //     e.stopPropagation();
// //     localMediaStream.getAudioTracks()[0].enabled = !localMediaStream.getAudioTracks()[0].enabled;
// //     this.audioEnabled = !this.audioEnabled;
// // },
// // videoToggle: function(e) {
// //     e.stopPropagation();
// //     localMediaStream.getVideoTracks()[0].enabled = !localMediaStream.getVideoTracks()[0].enabled;
// //     this.videoEnabled = !this.videoEnabled;
// // },
// // toggleSelfVideoMirror: function() {
// //     document.querySelector("#videos .video #selfVideo").classList.toggle("mirror");
// // },
// // nameToLocalStorage: function() {
// //     window.localStorage.name = this.name;
// // },
// function a(e) {
//   e.stopPropagation();
//   let screenMediaPromise;
//   if (!App.screenshareEnabled) {
//     if (navigator.getDisplayMedia) {
//       screenMediaPromise = navigator.getDisplayMedia({ video: true });
//     } else if (navigator.mediaDevices.getDisplayMedia) {
//       screenMediaPromise = navigator.mediaDevices.getDisplayMedia({
//         video: true,
//       });
//     } else {
//       screenMediaPromise = navigator.mediaDevices.getUserMedia({
//         video: { mediaSource: "screen" },
//       });
//     }
//   } else {
//     screenMediaPromise = navigator.mediaDevices.getUserMedia({ video: true });
//   }
//   screenMediaPromise
//     .then((screenStream) => {
//       App.screenshareEnabled = !App.screenshareEnabled;

//       for (let peer_id in peers) {
//         const sender = peers[peer_id]
//           .getSenders()
//           .find((s) => (s.track ? s.track.kind === "video" : false));
//         sender.replaceTrack(screenStream.getVideoTracks()[0]);
//       }
//       screenStream.getVideoTracks()[0].enabled = true;
//       const newStream = new MediaStream([
//         screenStream.getVideoTracks()[0],
//         localMediaStream.getAudioTracks()[0],
//       ]);
//       localMediaStream = newStream;
//       attachMediaStream(document.getElementById("selfVideo"), newStream);
//       this.toggleSelfVideoMirror();

//       screenStream.getVideoTracks()[0].onended = function () {
//         if (App.screenshareEnabled) App.screenShareToggle();
//       };
//     })
//     .catch((e) => {
//       alert("Unable to share screen. Please use a supported browser.");
//       console.error(e);
//     });
// }
export {};
