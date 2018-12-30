export const getSummary = title => (dispatch) => {
  dispatch(requestSummary(title))
  window.fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/
    ${window.encodeURIComponent(title)}`
  )
    .then(resp => resp.json())
    .then(json => {
      if (json.type === 'standard') {
        dispatch(receiveSummary(json))
      } else {
        dispatch(resetSummary(true))
      }
    })
}

export const REQUEST_SUMMARY = 'REQUEST_SUMMARY'
export const requestSummary = (title) => ({
  type: REQUEST_SUMMARY,
  title: title
})

export const RECEIVE_SUMMARY = 'RECEIVE_SUMMARY'
export const receiveSummary = (json) => ({
  type: RECEIVE_SUMMARY,
  title: json.title,
  description: json.description,
  summary: json.extract,
  href: json.content_urls.desktop.page,
  thumbnailURL: (!!json.thumbnail ? json.thumbnail.source : '') // ew
})

export const RESET_SUMMARY = 'RESET_SUMMARY'
export const resetSummary = (errored) => ({ type: RESET_SUMMARY, errored: errored })
