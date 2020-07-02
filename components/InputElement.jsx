function InputElement({ name, text, formik, placeholder, styles }) {
  return (
    <div>
      <label htmlFor={name} className={styles.label}>
        <span className={styles.labelText}>{text}</span>
        <input
          type="text"
          name={name}
          id={name}
          className={styles.input}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </label>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-red-700">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
}

InputElement.propTypes = {
  name: String,
  text: String,
  placeholder: String,
  formik: Object,
  styles: Object,
};

export default InputElement;
