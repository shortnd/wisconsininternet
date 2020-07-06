import propTypes from "prop-types";

function InputElement({
  name,
  text,
  formik,
  placeholder,
  styles,
  type = "text",
  pattern = null,
  className = null,
  required = false,
}) {
  return (
    <div className={className ? className : ""}>
      <label htmlFor={name} className={styles.label}>
        <span className={styles.labelText}>{text}</span>
        <input
          type={type}
          name={name}
          id={name}
          className={`${styles.input} ${
            formik.touched[name] && formik.errors[name] && "border-red-700"
          }`}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          pattern={pattern}
          required={required}
          {...(required ? `aria-labeledby=${name}-error` : "")}
        />
      </label>
      {required && (
        <>
          {formik.touched[name] && formik.errors[name] ? (
            <div
              className="text-red-700"
              aria-live="assertive"
              id={`${name}-error`}
            >
              {formik.errors[name]}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

InputElement.propTypes = {
  name: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  formik: propTypes.object.isRequired,
  styles: propTypes.object.isRequired,
  type: propTypes.string,
  className: propTypes.string,
  required: propTypes.bool,
};

export default InputElement;
