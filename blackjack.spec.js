/*
Notes:

Jasmine
describe(string, function)
it(string, function)
expct(value)
normally it's package based using node
dealerShouldDraw 

10, 9 passed in to function should return false
Ace, 6 passed in to function should return true
10, 6, Ace passed in to function should return false
2, 4, 2, 5 passed in should return true

matchers
expect().tobe()
.not.tobe()
.toBeFalsy()
toContain()
*/
describe('Tests for blackjack', () => {
    describe('Test dealerShouldDraw method', () => {
        it('10, 9 should return false', () => {
            const hand1 = dealerShouldDraw([{val:10, displayVal:10}, {val:9, displayVal:9}])
            //debugger;
            expect(hand1).toBe(false)
        })
        it('Ace, 6 should return true', () => {
            const hand2 = dealerShouldDraw([{val:11, displayVal:'Ace'}, {val:6, displayVal:6}])
            //debugger;
            expect(hand2).toBe(true)

        })
        it('10, 6, Ace should return false', () => {
            const hand3 = dealerShouldDraw([{val:10, displayVal:10},{val:6, displayVal:6},{val:11, displayVal:'Ace'}])
            //debugger;
            expect(hand3).toBe(false)
        })  
        it('2, 4, 2, 5 should return true', () => {
            const hand4 = dealerShouldDraw([{val:2, displayVal:2},{val:4, displayVal:4},{val:2, displayVal:2},{val:5, displayVal:5}])
            //debugger;
            expect(hand4).toBe(true)
        })
    })
})

