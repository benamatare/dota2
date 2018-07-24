const defaultState = {
  count: 0,
  result: [],
  account: {
    info: {},
    ratio: {},
    roles: {},
    matches: [],
    recent_matches: [],
    heroes: [],
    peers: []
  },
};


const accountReducer = (state = defaultState, action) => {
  switch (action.type) {
    // Matching Accounts
    case 'SET_RESULT':
      return {...state,
        result: action.payload
      };
    // Account related
    case 'SET_INFO':
      return {...state,
        count: state.count += 1,
        account: {...state.account,
          info: action.payload
        }
      };
    case 'SET_RATIO':
      return {...state,
        count: state.count += 1,
        account: {...state.account,
          ratio: action.payload
        }
      };
    case 'SET_ROLES':
      return {...state,
        count: state.count += 1,
        account: {...state.account,
          roles: action.payload
        }
      };
    case 'SET_MATCHES':
      return {...state,
        count: state.count += 1,
        account: {...state.account,
          matches: action.payload
        }
      };
    case 'SET_RECENT_MATCHES':
      return {...state,
        count: state.count += 1,
        account: {...state.account,
          recent_matches: action.payload
        }
      };
    case 'SET_HEROES':
      return {...state,
        count: state.count += 1,
        account: {...state.account,
          heroes: action.payload
        }
      };
    case 'SET_PEERS':
      return {...state,
        count: state.count += 1,
        account: {...state.account,
          peers: action.payload
        }
      };
    default:
      return state;
  }
};

export default accountReducer;
