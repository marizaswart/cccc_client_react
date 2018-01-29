jest.mock('../request')

const plant = require('../plant')

describe('#getPlant()', () => {
  it('should load plant data', () => {
    return plant.getPlant('plants')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual('Aloe Vera')
    })
  })
})
