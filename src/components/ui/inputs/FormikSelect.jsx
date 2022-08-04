import Select from "react-select";

export function FormikSelect({ options, field, form }) {
  return (
    <Select
      name={field.name}
      onBlur={field.onBlur}
      onChange={({ label, value }) => {
        form.setFieldValue(field.name, label, value);
      }}
      options={options}
      value={options.find((option) => option.value === form.value)}
    />
  );
}
