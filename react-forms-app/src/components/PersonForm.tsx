const PersonForm = () => {
  return (
    <form>
      <div className="mb3">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" type="text" className="form-control" />
      </div>
    </form>
  )
}

export default PersonForm