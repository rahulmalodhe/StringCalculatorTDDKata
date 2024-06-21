import add from "./stringCalculator";

test('should return 0 for an empty String', ()=>{
    expect( add("")).toBe(0)
})
