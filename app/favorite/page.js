import FormArea from '@/components/forms/form-area';
import { Divider, Spacer } from '@nextui-org/react';

export default function Favorite() {
  return (
    <main className="mx-auto container">
      <div className="p-4 grid sm:grid-cols-1 md:grid-cols-2 gap-16 ">
        <div>
          <FormArea name="openSourcesWithIDConfig" />
          <Spacer y={2} />
          <FormArea name="transformConfig" />
          <Spacer y={2} />
          <FormArea name="openInCunstructConfig" />
        </div>
        <div>
          <FormArea name="getLinksFromGoodsIdConfig" />
          <Spacer y={2} />
          <FormArea name="splitColumnConfig" />
          <Spacer y={2} />
        </div>
      </div>
    </main>
  );
}
