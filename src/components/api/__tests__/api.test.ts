jest.mock('../__mocks__/apiCall');
import apiCall from '../api'
import mockData from '../__mocks__/mockdata';
test("mocking the api",async ()=>{
    expect.assertions(1);
    const data = await apiCall();
    expect(data).toEqual(mockData);
    
})


