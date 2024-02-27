import React from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
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
        />
      </label>
      <label className="text-xs text-gray-400">
        Пароль:
        <input
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-nome placeholder:text-gray-700"
          type="password"
          placeholder="Пароль"
        />
      </label>

      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          className="flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4"
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
