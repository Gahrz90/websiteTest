import "./Form.css";

export default function Form() {
  return (
    <form className="form">
      <span className="form-title uppercase">contattaci</span>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <select>
        <option value={""}>Birth place</option>
      </select>
      <input type="date" placeholder="Date" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Company" />
      <textarea placeholder="Your message" />
      <div>
        <input type="checkbox" id="privacy_policy" />
        <label htmlFor="privacy_policy">Accept privacy policy</label>
      </div>
      <button>send</button>
    </form>
  );
}
