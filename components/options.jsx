import { RadioGroup, Radio } from '@nextui-org/react';

export function Options({ defaultValue, values, setSelectRadio }) {
  return (
    <RadioGroup
      label=""
      defaultValue={defaultValue}
      orientation="horizontal"
      onValueChange={(e) => setSelectRadio(e)}
    >
      {values.map(({ type, value }) => (
        <Radio key={type} value={type}>
          {value}
        </Radio>
      ))}
    </RadioGroup>
  );
}
