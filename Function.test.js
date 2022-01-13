const functions=require('./Function');
test('Add 2 +4 to equal 6',()=>{
    expect(functions.add(4,2)).toBe(6)   
}),
test('Multiplication of 2*4*8',()=>{
    expect(functions.mult(2,4,8)).toBe(64)
})