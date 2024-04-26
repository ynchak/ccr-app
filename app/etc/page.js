import FormArea from '@/components/forms/form-area';
import { Spacer } from '@nextui-org/react';

export default function Etc() {
  return (
    <main className="mx-auto container">
      <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 gap-16 ">
        <div>
          <FormArea name="getGoodsIdFromUrlConfig" />
          <Spacer y={4} />
          <FormArea name="splitColumnConfig" />
        </div>
        <div>
          <FormArea name="getLinksFromGoodsIdConfig" />
          <Spacer y={4} />
        </div>
      </div>
    </main>
  );
}
