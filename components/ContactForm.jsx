function ContactForm() {
  const styles = {
    label: "flex flex-col mb-3",
    labelText: "font-semibold",
    input: "border rounded bg-blue-100 text-blue-900 px-3 py-2",
  };
  return (
    <form action="" method="post">
      <div>
        <label htmlFor="firstName" className={styles.label}>
          <span className={styles.labelText}>First Name:</span>
          <input
            className={styles.input}
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
          />
        </label>
      </div>
      <div>
        <label htmlFor="lastName" className={styles.label}>
          <span className={styles.labelText}>Last Name:</span>
          <input
            className={styles.input}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Doe"
          />
        </label>
      </div>
      <div>
        <label htmlFor="email" className={styles.label}>
          <span className={styles.labelText}>Email:</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="jon@example.com"
          />
        </label>
      </div>
      <div>
        <label htmlFor="phoneNumber" className={styles.label}>
          <span className={styles.labelText}>Phone Number:</span>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className={styles.input}
            placeholder="123-345-6789"
          />
        </label>
      </div>
      <div>
        <label htmlFor="address" className={styles.label}>
          <span className={styles.labelText}>Address:</span>
          <input
            type="text"
            name="address"
            id="address"
            className={styles.input}
            placeholder="123 W. Main Street"
          />
        </label>
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="flex-auto md:mr-3">
          <label htmlFor="city" className={styles.label}>
            <span className={styles.labelText}>City:</span>
            <input
              type="text"
              name="city"
              id="city"
              className={styles.input}
              placeholder="Madison"
            />
          </label>
        </div>
        <div className="flex-auto md:mr-3">
          <label htmlFor="state" className={styles.label}>
            <span className={styles.labelText}>State:</span>
            <input
              type="text"
              name="state"
              id="state"
              placeholder="WI"
              className={styles.input}
            />
          </label>
        </div>
        <div className="flex-auto">
          <label htmlFor="zip" className={styles.label}>
            <span className={styles.labelText}>Zip:</span>
            <input
              type="text"
              name="zip"
              id="zip"
              className={styles.input}
              placeholder="53701"
            />
          </label>
        </div>
      </div>
      <div>
        <label htmlFor="business" className="flex items-center mb-3">
          <span className={styles.labelText}>Business Address:</span>
          <input
            type="checkbox"
            name="business"
            id="business"
            className="ml-2"
          />
        </label>
      </div>
      <div>
        <label htmlFor="currentProvider" className={styles.label}>
          <span className={styles.labelText}>Current Provider</span>
          <input
            type="text"
            name="currentProvider"
            id="currentProvider"
            className={styles.input}
            placeholder="AT&T"
          />
        </label>
      </div>
      <div>
        <label htmlFor="currentSpeed" className={styles.label}>
          <span className={styles.labelText}>Current Speed</span>
          <input
            type="text"
            name="currentSpeed"
            id="currentSpeed"
            className={styles.input}
            placeholder="15mb"
          />
        </label>
      </div>
      <div>
        <label htmlFor="computerMaintenance" className="mb-3">
          <span className={styles.labelText}>
            Would you like to have your computers maintained by us?
          </span>
          <input
            className="ml-2"
            type="checkbox"
            name="computerMaintenance"
            id="computerMaintenance"
          />
        </label>
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className="bg-blue-700 text-blue-100 px-3 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
