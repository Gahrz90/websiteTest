import "./Form.css";

export default function Form() {
  return (
    <form className="form">
      <span className="form-title uppercase">contattaci</span>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Email" required />
      <select value={"Empoli"}>
        <option value="" disabled>
          Your city
        </option>
      </select>
      <input type="date" placeholder="Date" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Company" />
      <textarea placeholder="Your message" required />
      <div className="flex items-center w-full">
        <input type="checkbox" id="privacy_policy" required />
        <label htmlFor="privacy_policy">Accept privacy policy</label>
      </div>
      <button className="uppercase my-10 rounded-2xl text-white bg-[#00b0ff] w-1/4 self-center p-3">
        send
      </button>
    </form>
  );
}
