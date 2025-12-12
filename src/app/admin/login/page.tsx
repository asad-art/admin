"use client";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form method="POST" action="/admin-login" className="p-6 border rounded">
        <h2 className="text-xl mb-4">Admin Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border p-2 mb-2 w-full"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
