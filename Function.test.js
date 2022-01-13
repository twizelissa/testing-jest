const functions=require('./Function');
test('Add 2 +4 to equal 6',()=>{
    expect(functions.add(4,2)).toBe(6)
});