/**
 *  Handles fetch errors.
 *  @type {Object} Response
 */
const handleErrors = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export {
  handleErrors
}
