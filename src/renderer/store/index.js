export const state = () => ({
  activeFleet: 'OURS',
  availableFleets: []
})

export const mutations = {
  setFleet (state, fleet) {
    state.activeFleet = fleet
  },
  setFleets (state, fleets) {
    state.availableFleets = fleets
  }
}
