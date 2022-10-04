import InputField from "../InputField";
export const AddAddress: React.FC = () => {
  const fieldProps = {
    className: "this",
    label: "post Code",
    id: "1",
    value: "test",
    placeholder: "Post code",
    onChange: console.log("on post code change"),
    onFocus: console.log("on focus"),
    onBlur: console.log("on blur"),
    required: false,
    ref: "testing",
    autoComplete: "test",
  };
  return (
    <div>
      <h3>Add new</h3>
      <h4>by post code</h4>
      <InputField {...fieldProps} />
      <button>add Manually</button>
    </div>
  );
};
