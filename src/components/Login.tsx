import * as React from 'react'

export interface LoginFormStateProps {
  registered: boolean;
  loading: boolean;
}

export interface LoginFormDispatchProps {
  login: (username: string, password: string) => void;
  register: (username: string, password: string) => void;
}

interface FormState {
  email: string;
  password: string;
}

const initialState: FormState = {
  email: '',
  password: ''
}

const LoginForm: React.FC<LoginFormStateProps & LoginFormDispatchProps> = ({ registered, login, register, loading }) => {
  const [formState, setFormState] = React.useState<FormState>(initialState)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (registered) {
      login(formState.email, formState.password)
    } else {
      register(formState.email, formState.password)
    }
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>email</label>
        <input onChange={handleChange} name='email' />
        <label htmlFor='password'>password</label>
        <input onChange={handleChange} name='password' />
        <button type='submit'>{registered ? 'Login' : "Register"}</button>
      </form>
      {loading && <p>Loading...</p>}
    </React.Fragment>
  )
}

export default LoginForm