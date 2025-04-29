import React, { useReducer } from 'react';
const initialState = {
    step: 1,
    name: '',
    email: '',
    city: '',
    country: ''
  };
  
  function formReducer(state, action) {
    switch (action.type) {
      case 'NEXT_STEP':
        return { ...state, step: state.step + 1 };
      case 'PREV_STEP':
        return { ...state, step: state.step - 1 };
      case 'UPDATE_FIELD':
        return { ...state, [action.field]: action.value };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }
const useReducerHook = () => {
    const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_FIELD', field: e.target.name, value: e.target.value });
  };

  const next = () => dispatch({ type: 'NEXT_STEP' });
  const prev = () => dispatch({ type: 'PREV_STEP' });

  const handleSubmit = () => {
    alert('Form submitted!\n' + JSON.stringify(state, null, 2));
    dispatch({ type: 'RESET' });
  };

  const { step, name, email, city, country } = state;
  return (
    <>
       <div style={{ padding: 20 }}>
      <h2>Multi-Step Form</h2>

      {step === 1 && (
        
        <div>
          <h3>Step 1: User Info</h3>
          <div className='row'>
          <div className='col-12 col-lg-4'>
          <input className='form-control' name="name" value={name} onChange={handleChange} placeholder="Name" />

</div>
<div className='col-12 col-lg-4'>
<input className='form-control' name="email" value={email} onChange={handleChange} placeholder="Email" />

</div>
<div className='col-12 col-lg-4'>
<button className='btn btn-primary' onClick={next}>Next</button>
</div>
          </div>
        
        </div>
      )}

      {step === 2 && (
        <div>

          <h3>Step 2: Address</h3>
          <div className='row'>
          <div className='col-12 col-lg-4'>
        
          <input className='form-control' name="city" value={city} onChange={handleChange} placeholder="City" />
</div>
<div className='col-12 col-lg-4'>
<input className='form-control' name="country" value={country} onChange={handleChange} placeholder="Country" />

</div>
<div className='col-12 col-lg-4'>
<button className='btn btn-primary mx-2' onClick={prev}>Back</button>
<button className='btn btn-primary mx-2' onClick={next}>Next</button>
</div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>Step 3: Review</h3>
          <pre>{JSON.stringify(state, null, 2)}</pre>
          <button className='btn btn-primary mx-2' onClick={prev}>Back</button>
          <button className='btn btn-primary mx-2' onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
    </>
  )
}

export default useReducerHook
