import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, loginUser } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

function LoginPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {status} = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (status) {
      toast(status);
    }
    if (isAuth) {
      navigate("/");
    }
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({username, password}));
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
        Авторизация
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
          Войти
        </button>
        <Link
          to="/register"
          className="flex justify-center items-center text-xs text-white"
        >
          Нет аккаунта?
        </Link>
      </div>
    </form>
  )
}

export default LoginPage
