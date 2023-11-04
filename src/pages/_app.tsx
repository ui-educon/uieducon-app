import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/css/globalStyles.css";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast'
import { wrapper } from "@/core/redux/store";
import AuthProvider from "@/components/hoc/auth-provider";

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {

  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...props.pageProps} />
        <Toaster containerClassName="mt-20" />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp
