'use client';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface IPromiseAlert {
  loading: string;
  success: string;
  error: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  func: Promise<any>;
  reload?: boolean;
}

export function useAlert() {
  const router = useRouter();

  const alertPromise = (props: IPromiseAlert) => {
    const { loading, success, error, func, reload = true } = props;

    toast.promise(func, {
      loading,
      success: () => {
        if (reload) {
          router.refresh();
        }
        return success;
      },
      error,
    });
  };

  return { alertPromise };
}
