describe("Object looper", function(){
  it("should equal 'no m&m's for you'", function(){
    expect(candies.mAndm).toEqual("no m&m's for you");
  });
});
describe("Colors array", function(){
 it("purple should be at the end of the array", function(){
   expect(colors[colors.length-1]).toEqual('purple');
 })
 it("remove red from the array and store it in colorRed", function(){
   expect(colorRed).toEqual('red');
 })
 it("Add pink to the beginning of the colors array", function(){
   expect(colors[0]).toEqual('pink');
 })
 it("Leave green in the array, save it to another variable called colorGreen", function(){
   expect(colorGreen).toBeDefined();
   expect(colorGreen).toEqual('green');
 })
})
