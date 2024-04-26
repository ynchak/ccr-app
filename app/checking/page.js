import FormArea from '@/components/forms/form-area';
import { FormChecking } from '@/components/forms/form-checking';
import { Divider, Spacer } from '@nextui-org/react';

export default function Checking() {
  return (
    <main className="mx-auto container px-8">
      <div className="p-8 grid sm:grid-cols-1 md:grid-cols-2 gap-16 ">
        <div>
          <h2 className="text-xl font-medium text-center">
            Перенесення товарів
          </h2>
          <Divider className="my-4" />
          <FormArea name="findMovedGoodsConfig" />
          <Spacer y={4} />
          <FormArea name="" />
        </div>
        <div>
          <h2 className="text-xl font-medium text-center">Оновлення товарів</h2>
          <Divider className="my-4" />
          <FormArea name="findGoodsInCatgoryConfig" />
          <Spacer y={4} />
          <FormChecking />
          <Spacer y={4} />
        </div>
      </div>
    </main>
  );
}
