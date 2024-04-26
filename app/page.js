import FormArea from '@/components/forms/form-area';
import { FormSettings } from '@/components/forms/form-settings';
import { Divider, Spacer } from '@nextui-org/react';

export default function Home() {
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
          <FormArea name="openSourceAttr" />
          <Spacer y={2} />
          <FormSettings />
          <Spacer y={2} />
        </div>
      </div>
    </main>
  );
}
