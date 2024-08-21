import Reactotron, { trackGlobalLogs } from "reactotron-react-native";

console.tron = Reactotron
Reactotron.configure() // controls connection & communication settings
  .configure({
    name: "restaurante",
  })
  .useReactNative(trackGlobalLogs(),{
    asyncStorage: true, // there are more options to the async storage.
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    editor: true, // there are more options to editor
    errors: { veto: (stackFrame) => true }, // or turn it off with false
    overlay: true, // just turning off overlay
  })
  .connect()