function ErrorMessage({ message = 'Something went wrong...' }) {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-7">
      <div className="bg-red-100 text-red-700 p-4 rounded shadow text-center">⚠️ {message}</div>
    </div>
  )
}
export default ErrorMessage
