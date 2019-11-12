export default {
  states: {
    homeScreen: {
      sampleState: "sample"
    }
  },
  actions: {
    homeScreen: {
      sampleAction: stora => {
        console.log('sampleAction', stora)
      }
    }
  },
  init: stora => {
    console.log('stora initialized', stora)
  }
}