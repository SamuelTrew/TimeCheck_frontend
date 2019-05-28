export const state = () => {
  return {
    groups: [
      {
        id: 'fake_id_1',
        name: 'Fake Group 1',
        thumb: 'https://www.w3schools.com/w3css/img_lights.jpg'
      },
      {
        id: 'fake_id_2',
        name: 'Fake Group 2'
      },
      {
        id: 'mattcorp',
        name: 'MattCorp Employees',
        thumb: 'https://mattcorp.com/android-chrome-192x192.png'
      },
      {
        id: 'radico',
        name: 'RadiCo, a MattCorp company'
      }
    ]
  }
}

export const getters = {
  list: state => state.groups
}
