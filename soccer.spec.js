// describe('Tests for hte Soccer Gaem', () => {
//     describe('Test the getTotalPoints Method', () => {
//         it('Should return correct point total', () => {
//             const points = getTotalPoints('wwdl')
//             expect(points).toBe(7)
//             //can have a bunch of expect here, but all have to pass
//             //expect(getTotalPoints('dddl')).toBe(3)
//         })
//     })

//     describe('test the orderteams function', () => {
//         it('Should return the correct team, with Points', () => {
//             const team1 = {
//                 name: "Sounders",
//                 results: "wwwwldl"
//             }
//             const team2 = {
//                 name: "Galaxy",
//                 results: "ldwdwlwl"
//             }
//             const expectedString = `Sounders: 16
//         Galaxy:11`

//             const result = orderTeams(team1, team2)
//             //expect(result).toEqual(expectedString)
//             expect(expectedString).toContain('Sounders')

//         })
//     })
// })