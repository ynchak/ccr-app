import FormArea from '@/components/forms/form-area';
import { Divider, Spacer } from '@nextui-org/react';

export default function Etc() {
  return (
    <main className="mx-auto container px-8">
      <div className="p-8 grid sm:grid-cols-1 md:grid-cols-2 gap-16 ">
        <div>
          <h2 className="text-xl font-medium text-center">
            Перенесення товарів
          </h2>
          <Divider className="my-4" />
          <FormArea name="getGoodsIdFromUrlConfig" />
          <Spacer y={4} />
          <FormArea name="splitColumnConfig" />
        </div>
        <div>
          <h2 className="text-xl font-medium text-center">Оновлення товарів</h2>
          <Divider className="my-4" />
          <FormArea name="getLinksFromGoodsIdConfig" />
          <Spacer y={4} />
        </div>
      </div>
    </main>
  );
}
