import axios from 'axios'
import config from '../config.json'
import { getFullUpdatedAppState } from '../utils.js'


//Terrible test, should not make real API calls, in a real website with thousands of tests this would take forever, make a mock API call
describe("Test getFullUpdatedAppState", () => {
  it("returns all data from the store", async () => {
    const {notThrowingText, throwingStatus, partyDate} = await getFullUpdatedAppState() 
  
    expect(notThrowingText).not.toBeNull()
    expect(throwingStatus).not.toBeNull()
    expect(partyDate).not.toBeNull()
  })
})
