import FormArea from '@/components/forms/form-area';
import { FormChecking } from '@/components/forms/form-checking';
import { Spacer } from '@nextui-org/react';

export default function Checking() {
  return (
    <main className="mx-auto container">
      <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-16 ">
        <div>
          <FormArea name="findMovedGoodsConfig" />
          <Spacer y={4} />
          <FormArea name="" />
        </div>
        <div>
          <FormArea name="findGoodsInCatgoryConfig" />
          <Spacer y={4} />
          <FormChecking />
          <Spacer y={4} />
        </div>
      </div>
    </main>
  );
}
