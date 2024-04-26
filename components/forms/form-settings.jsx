'use client';

import { useEffect, useState } from 'react';
import { useSettingsStore } from '@/store/zustand';
import { useSyncExternalStore } from 'react';
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Skeleton,
  Spacer,
} from '@nextui-org/react';
import { SaveIcon, UndoIcon } from 'lucide-react';

const settingsData = {
  category: 'ID Категорії',
  param: 'ID параметру',
  vendor: 'Виробника',
};

export function FormSettings() {
  const data = useSettingsStore();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [data]);

  const [selectValue, setSelectValue] = useState(new Set([data.settingsBy]));
  const [settingsInputValue, setSettingsInputValue] = useState(data.value);
  const [settingsInputParamValue, setSettingsInputParamValue] = useState(
    data.paramValue
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectValue.has('category')) {
      setSettingsInputParamValue('');
    }
    data.setData({
      settingsBy: `${[...selectValue.keys()]}`,
      value: settingsInputValue,
      paramValue: settingsInputParamValue,
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    setSettingsInputValue('');
    setSettingsInputParamValue('');
  };
  return (
    <>
      {!loaded ? (
        <Card className="space-y-5 p-4" radius="lg">
          <Skeleton className="rounded-lg">
            <div className="h-8 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-8 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="rounded-lg">
            <div className="h-8 rounded-lg bg-default-300"></div>
          </Skeleton>
        </Card>
      ) : (
        <Card className="p-2">
          <CardBody>
            <form
              onSubmit={handleSubmit}
              onReset={handleReset}
              suppressHydrationWarning
            >
              <Select
                className="font-medium"
                isRequired
                label="Налаштування"
                variant="bordered"
                selectedKeys={selectValue}
                onSelectionChange={setSelectValue}
              >
                {Object.entries(settingsData).map(([name, lable]) => (
                  <SelectItem key={name} value={name}>
                    {lable}
                  </SelectItem>
                ))}
              </Select>
              <Spacer y={4} />
              <>
                <div className="flex gap-2">
                  <Input
                    placeholder={
                      settingsInputValue ||
                      `Введи ${settingsData[[...selectValue.values()]]}`
                    }
                    onValueChange={setSettingsInputValue}
                  />
                  {selectValue.has('category') && (
                    <Input
                      placeholder={paramValue || `Введи ID параметру`}
                      onValueChange={setSettingsInputParamValue}
                    />
                  )}
                </div>
                <div className="flex justify-between mt-4">
                  <Button
                    endContent={<UndoIcon />}
                    color="primary"
                    type="reset"
                    variant="faded"
                  >
                    <span className="font-medium">Очистити значення</span>
                  </Button>
                  <Button
                    endContent={<SaveIcon />}
                    color="success"
                    type="submit"
                  >
                    <span className="font-medium">Зберегти</span>
                  </Button>
                </div>
              </>
            </form>
          </CardBody>
        </Card>
      )}
    </>
  );
}
