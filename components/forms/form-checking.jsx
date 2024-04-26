'use client';
import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  Input,
  Skeleton,
  Select,
  SelectItem,
  Spacer,
} from '@nextui-org/react';
import { SaveIcon } from 'lucide-react';
import { useCheckingStore } from '@/store/zustand';

export function FormChecking() {
  const data = useCheckingStore();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [data]);

  const [inputCategoryValue, setInputCategoryValue] = useState(
    data.LOCAL_APP_KEY
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    data.setCatgoryID(inputCategoryValue);
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
            <form onSubmit={handleSubmit}>
              <Select
                className="font-medium"
                isDisabled
                label="Налаштування"
                variant="bordered"
                selectedKeys={new Set(['category'])}
              >
                <SelectItem key="category">ID Категорії</SelectItem>
              </Select>
              <Spacer y={2} />
              <Input
                placeholder={inputCategoryValue || 'Введи ID Категорії'}
                onValueChange={setInputCategoryValue}
              />
              <Spacer y={2} />
              <div className="flex justify-end">
                <Button endContent={<SaveIcon />} color="success" type="submit">
                  <span className="font-medium">Зберегти</span>
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      )}
    </>
  );
}
