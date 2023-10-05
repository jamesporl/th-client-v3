import { useRouter } from 'next/navigation';
import { MyProfileRes } from '../mobx/Auth';

const useRedirectFromLogin = () => {
  const router = useRouter();

  const redirectFromLogin = (
    { pathname, myProfile }: { pathname?: string, myProfile?: MyProfileRes },
  ) => {
    let isAppPage = false;
    let isAdminPage = false;
    if (pathname) {
      isAppPage = pathname.startsWith('/my');
      isAdminPage = pathname.startsWith('/site-admin');
    }
    const isNotPublicPage = isAppPage || isAdminPage;
    if (myProfile) {
      if (myProfile.isAdmin && (isAppPage || !pathname)) {
        router.push('/site-admin');
      } else if (!myProfile.isAdmin && (isAdminPage || !pathname)) {
        router.push('/');
      }
    } else if (isNotPublicPage) {
      router.push('/account/login');
    }
  };

  return redirectFromLogin;
};

export default useRedirectFromLogin;
