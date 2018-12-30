import {
  REQUEST_SUMMARY,
  RECEIVE_SUMMARY,
  RESET_SUMMARY
} from '../actions/wiki.js'

const initialState = {
  title: "",
  description: "",
  summary: "",
  thumbnailURL: "",
  href: "",
  beingRequested: "",
  isRequesting: false,
  errored: false
}

export default function wiki(state = initialState, action) {
  switch(action.type) {
    case REQUEST_SUMMARY:
      return {
        ...state,
        isRequesting: true,
        errored: false,
        beingRequested: action.title,
      }
    case RECEIVE_SUMMARY:
      return {
        ...state,
        isRequesting: false,
        title: action.title,
        description: action.description,
        summary: action.summary,
        thumbnailURL: action.thumbnailURL,
        href: action.href
      }
    case RESET_SUMMARY:
      return {
        ...initialState,
        errored: action.errored
      }
    default:
      return state
  }
}
