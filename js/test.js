var expect = chai.expect;

describe("updateView", function() {
    var expected = 'right';
    // console.log(expected);
    it(" result :", function() {
        chai.assert.equal(view.updateView([3,0,0]), expected);
    });
});

describe("casual test", function() {

    expect(view.updateView([3,0,0])).to.be.a('string');
    expect(view.updateView([3,0,0])).to.equal('2');
});




