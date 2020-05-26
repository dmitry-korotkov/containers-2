export default class ErrorRepository {
    constructor(){
      this.errorContainer = new Map()
    }
    addError (errorCode, errorText) {
      this.errorContainer.set(errorCode, errorText);
    }
    translate(errorCode) {
      const errorText = this.errorContainer.get(errorCode);
      if (errorText === null || errorText === undefined) {
        return 'Unknown error'
      }
      return errorText
    }
  }