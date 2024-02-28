import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

function RegisterPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {status} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({username, password}));
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-1/4 h-60 mx-auto mt-40"
      onSubmit={(e) => e.preventDefault()}
    >
      <h1 className="text-lg text-white text-center">
        Регистрация
      </h1>
      <label className="text-xs text-gray-400">
        Имя пользователя:
        <input
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-nome placeholder:text-gray-700"
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
        />
      </label>
      <label className="text-xs text-gray-400">
        Пароль:
        <input
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-nome placeholder:text-gray-700"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
      </label>

      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          className="flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4"
          onClick={handleSubmit}
        >
          Подтвердить
        </button>
        <Link
          to="/login"
          className="flex justify-center items-center text-xs text-white"
        >
          Уже зарегистрированы?
        </Link>
      </div>
    </form>
  )
}

export default RegisterPage
