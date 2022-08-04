import Select from "react-select";

export function FormikSelect({ options, field, form, currencies }) {
  console.log("options", options);
  console.log("currencies", currencies);
  return (
    <Select
      name={field.name}
      onBlur={field.onBlur}
      onChange={({ value }) => {
        form.setFieldValue(field.name, value);
      }}
      options={options}
      value={options.find((option) => option.value === form.value)}
    />
  );
}
