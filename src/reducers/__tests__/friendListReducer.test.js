
import friendsReducer from '../friendlist'
import * as types from '../../constants/ActionTypes'

const initialState = {
  'friends': {
    '0': {
      'name': 'Theodore Roosevelt',
      'starred': true,
      'id': '0',
      'gender': 'M'
    },
    '1': {
      'name': 'Abraham Lincoln',
      'starred': false,
      'id': '1',
      'gender': 'M'
    },
    '2': {
      'name': 'George Washington',
      'starred': false,
      'id': '2',
      'gender': 'M'
    }
  },
  'ids': [
    '0',
    '1',
    '2'
  ],
  'pagination': {
    'itemsPerPage': 3,
    'currentPage': '1',
    'pages': {
      '1': {
        'ids': [
          '0',
          '1',
          '2'
        ]
      }
    }
  }
}

describe('Friends reducer', () => {
  it('should return the initial state', () => {
    expect(friendsReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle ADD_FRIEND', () => {
    expect(friendsReducer(undefined, {
      type: types.ADD_FRIEND,
      friend: {
        name: 'Test Friend',
        gender: 'M'
      }
    })).toEqual({
      'friends': {
        '0': {
          'name': 'Theodore Roosevelt',
          'starred': true,
          'id': '0',
          'gender': 'M'
        },
        '1': {
          'name': 'Abraham Lincoln',
          'starred': false,
          'id': '1',
          'gender': 'M'
        },
        '2': {
          'name': 'George Washington',
          'starred': false,
          'id': '2',
          'gender': 'M'
        },
        '3': {
          'name': 'Test Friend',
          'id': '3',
          'gender': 'M'
        }
      },
      'ids': [
        '0',
        '1',
        '2',
        '3'
      ],
      'pagination': {
        'itemsPerPage': 3,
        'currentPage': '1',
        'pages': {
          '1': {
            'ids': [
              '0',
              '1',
              '2'
            ]
          },
          '2': {
            'ids': [
              '3'
            ]
          }
        }
      }
    })
  })

  it('should handle DELETE_FRIEND', () => {
    expect(friendsReducer(undefined, {
      type: types.DELETE_FRIEND,
      id: '2'
    })).toEqual({
      'friends': {
        '0': {
          'name': 'Theodore Roosevelt',
          'starred': true,
          'id': '0',
          'gender': 'M'
        },
        '1': {
          'name': 'Abraham Lincoln',
          'starred': false,
          'id': '1',
          'gender': 'M'
        }
      },
      'ids': [
        '0',
        '1'
      ],
      'pagination': {
        'itemsPerPage': 3,
        'currentPage': '1',
        'pages': {
          '1': {
            'ids': [
              '0',
              '1'
            ]
          }
        }
      }
    })
  })

  it('should handle STAR_FRIEND', () => {
    expect(friendsReducer(undefined, {
      type: types.STAR_FRIEND,
      id: '2'
    })).toEqual({
      'friends': {
        '0': {
          'name': 'Theodore Roosevelt',
          'starred': true,
          'id': '0',
          'gender': 'M'
        },
        '1': {
          'name': 'Abraham Lincoln',
          'starred': false,
          'id': '1',
          'gender': 'M'
        },
        '2': {
          'name': 'George Washington',
          'starred': true,
          'id': '2',
          'gender': 'M'
        }
      },
      'ids': [
        '0',
        '1',
        '2'
      ],
      'pagination': {
        'itemsPerPage': 3,
        'currentPage': '1',
        'pages': {
          '1': {
            'ids': [
              '0',
              '1',
              '2'
            ]
          }
        }
      }
    })
  })

  it('should handle GO_TO_PAGE', () => {
    expect(friendsReducer(undefined, {
      type: types.GO_TO_PAGE,
      page: '1'
    })).toEqual({
      'friends': {
        '0': {
          'name': 'Theodore Roosevelt',
          'starred': true,
          'id': '0',
          'gender': 'M'
        },
        '1': {
          'name': 'Abraham Lincoln',
          'starred': false,
          'id': '1',
          'gender': 'M'
        },
        '2': {
          'name': 'George Washington',
          'starred': false,
          'id': '2',
          'gender': 'M'
        }
      },
      'ids': [
        '0',
        '1',
        '2'
      ],
      'pagination': {
        'itemsPerPage': 3,
        'currentPage': '1',
        'pages': {
          '1': {
            'ids': [
              '0',
              '1',
              '2'
            ]
          }
        }
      }
    })
  })
})
