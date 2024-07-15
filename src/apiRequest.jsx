const apiRequest = async (URL = '', option = null, errMsg = null) => {
  try{
    const response = await fetch(URL, option);
    if(!response.ok) throw Error('Data Not Received')
  } catch (err) {
      console.log(err.message)
      errMsg = err.message
  } finally {
    return errMsg
  }
}

export default apiRequest;