describe("pow",function () {
    it("2 в степени 3 будет 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    describe("возводит x в степень 3", function() {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

});

