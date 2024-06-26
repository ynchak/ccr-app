'use client';
import { getFormData } from '@/form-data';
import { Button, Card, CardBody, Spacer, Textarea } from '@nextui-org/react';
import {
  TableRowsSplitIcon,
  LinkIcon,
  ExternalLinkIcon,
  ReplaceAllIcon,
} from 'lucide-react';
import { useState } from 'react';
import { Options } from '../options';

const icon = {
  open: <ExternalLinkIcon />,
  transform: <ReplaceAllIcon />,
  link: <LinkIcon />,
  split: <TableRowsSplitIcon />,
};

export default function FormArea({ name }) {
  const data = getFormData(name);

  const [areaValue, setAreaValue] = useState('');
  const [countLines, setCountLines] = useState(null);
  const [errorMessage, setErrorMassge] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [selectRadio, setSelectRadio] = useState(data.radioGroup?.defaultValue);

  const handlerSubmit = (e) => {
    e.preventDefault();

    try {
      data.action(areaValue, selectRadio, setCountLines);
    } catch (e) {
      setErrorMassge(e);
      setIsInvalid(true);
    }
    setTimeout(() => {
      setErrorMassge('');
      setIsInvalid(false);
    }, 5000);
    setAreaValue('');
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handlerSubmit}>
        <Card className="p-2">
          <CardBody>
            <Textarea
              isInvalid={isInvalid}
              errorMessage={errorMessage}
              minRows={4}
              maxRows={4}
              placeholder={data.placeholder}
              value={areaValue}
              onValueChange={setAreaValue}
            />
            <Spacer y={2} />
            <div className="flex justify-between">
              <div>
                {countLines}
                {data.radioGroup && (
                  <Options
                    {...data.radioGroup}
                    setSelectRadio={setSelectRadio}
                  />
                )}
              </div>
              <Button
                type="submit"
                color={data.buttonColor}
                endContent={icon[data.buttonIcon]}
              >
                <span className="font-medium">{data.buttonTitle}</span>
              </Button>
            </div>
          </CardBody>
        </Card>
      </form>
    </>
  );
}
